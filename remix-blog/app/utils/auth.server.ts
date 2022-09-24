import { createCookieSessionStorage, json, redirect } from '@remix-run/node'
import {prisma} from './prisma.server'
import type { LoginForm, RegisterForm } from './types.server'
import { CreateUser } from './users.server'
import bcrypt from "bcryptjs"

const secret = process.env.SESSION_SECRET
if(!secret){
    throw new Error("SESSION SECRET IS NOT SET")
}

const storage = createCookieSessionStorage({
    cookie:{
        name:'remix-session',
        secure: process.env.NODE_ENV == 'production',
        secrets: [secret],
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 30,
        httpOnly: true,
    }
})

export const register = async (form: RegisterForm) => {
    const exists = await prisma.user.count({where: {email: form.email}})

    if (exists){
        return json(
            {
                error: `user already exits`
            },
            {
                status: 400
            }
        )
    }

    const newUser = await CreateUser(form)

    if(!newUser) {
        return json({
             error: 'error, something went wrong',
             fields: {email: form.email, password: form.password}
        },
        {
            status: 400
        }
        )
    }
    return createUserSession(newUser.id, '/');
}

export const login = async (form: LoginForm) =>{
    const user = await prisma.user.findUnique({
        where:{email: form.email}
    })

    if(!user || !(await bcrypt.compare(form.password, user.password))){
        return json({error: 'incorrect credentials'}, {status: 400})
    }

    return createUserSession(user.id, '/');
}

export const createUserSession = async (userId: string, redirectTo:string) =>{
    const session = await storage.getSession();
    session.set('userId', userId)
    return redirect(redirectTo,{
        headers:{
            'set-cookie': await storage.commitSession(session),
        }
    } )
}

export async function requireUserId(
    request: Request,
    redirectTo: string = new URL(request.url).pathname
) {
    const session = await getUserSession(request)
    const userId = session.get('userId')
    if (!userId || typeof userId != 'string'){
        const searchParams = new URLSearchParams([['redirectTo',redirectTo]]);
        throw redirect(`/login?${searchParams}`)
    }
    return userId;
}

function getUserSession(request: Request){
    return storage.getSession(request.headers.get('cookie'))
}

export async function getUserId(
    request: Request,
    redirectTo: string = new URL(request.url).pathname
) {
    const session = await getUserSession(request)
    const userId = session.get('userId')
    if (!userId || typeof userId != 'string'){
        return null
    }
    return userId;
}

export async function getUser(request: Request){
    const userId = await getUserId(request);
    if(typeof userId != 'string'){
        return null
    }
}
import { json } from '@remix-run/node'
import {prisma} from './prisma.server'
import type { LoginForm, RegisterForm } from './types.server'
import { CreateUser } from './users.server'
import bcrypt from 'bcryptjs'

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
    return null
}

export const login = async (form: LoginForm) =>{
    const user = await prisma.user.findUnique({
        where:{email: form.email}
    })

    if(!user || !(await bcrypt.compare(form.password, user.password))){
        return json({error: 'incorrect credentials'}, {status: 400})
    }

    return null;
}
import { json } from '@remix-run/node'
import {prisma} from './prisma.server'
import type { RegisterForm } from './types.server'
import { CreateUser } from './users.server'

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
import { KudoStyle, prisma } from "@prisma/client";

export const createKudo = async (
    message: string,
    userId: string,
    recipientId: string,
    style: KudoStyle
) => {
    await prisma.kudo.create({

    })
}
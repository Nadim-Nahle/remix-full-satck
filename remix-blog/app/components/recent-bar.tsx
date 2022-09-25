import { User } from "@prisma/client";

interface KudoWithRecipient extends Kudo {
  recipient: User;
}

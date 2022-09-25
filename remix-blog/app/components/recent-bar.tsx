import { Kudo, User } from "@prisma/client";

interface KudoWithRecipient extends Kudo {
  recipient: User;
}

export function RecentBar({ kudos }: { kudos: KudoWithRecipient[] }) {
  return (
    <div className="w-1/5 border-l-4 border-l-yellow-300 flex flex-col items-center"></div>
  );
}

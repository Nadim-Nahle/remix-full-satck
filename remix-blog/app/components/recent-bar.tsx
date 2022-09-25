import { Kudo, User } from "@prisma/client";
import { UserCircle } from "./user-circle";

interface KudoWithRecipient extends Kudo {
  recipient: User;
}

export function RecentBar({ kudos }: { kudos: KudoWithRecipient[] }) {
  return (
    <div className="w-1/5 border-l-4 border-l-yellow-300 flex flex-col items-center">
      <h2 className="text-xl text-yellow-300 font-semibold my-6">
        Recent Kudos
      </h2>
      <div className="h-full flex flex-col gap-y-10 mt-10">
        {kudos.map((kudo) => (
          <div className="h-24 w-24 relative" key={kudo.recipient.id}>
            <UserCircle
              profile={kudo.recipient.profile}
              className="w-20 h-20"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

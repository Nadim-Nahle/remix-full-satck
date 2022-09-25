import { Profile, Kudo as IKudo } from "@prisma/client";
import { backgroundColorMap, colorMap } from "~/utils/constants";
import { UserCircle } from "./user-circle";

interface props {
  profile: Profile;
  kudo: Partial<IKudo>;
}

export function Kudo({ profile, kudo }: props) {
  return (
    <div
      className={`flex ${
        backgroundColorMap[kudo.style?.backgroundColor || "RED"]
      } p-4 rounded-xl w-full gap-x-2 relative`}
    >
      <div>
        <UserCircle profile={profile} className="h-16 w-16" />
      </div>
      <div className="flex flex-col">
        <p
          className={`${
            colorMap[kudo.style?.textColor || "WHITE"]
          } font-bold text-lg whitespace-pre-wrap break-all`}
        >
          {profile.firstName} {profile.lastName}
        </p>
        <p
          className={`${
            colorMap[kudo.style?.textColor || "WHITE"]
          } font-bold text-lg whitespace-pre-wrap break-all`}
        >
          {kudo.message}
        </p>
      </div>
    </div>
  );
}

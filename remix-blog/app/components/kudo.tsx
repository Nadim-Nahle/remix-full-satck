import { Profile, Kudo as IKudo } from "@prisma/client";
import { backgroundColorMap } from "~/utils/constants";

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
    ></div>
  );
}

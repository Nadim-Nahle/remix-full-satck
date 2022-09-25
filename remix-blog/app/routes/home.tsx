import { json, LoaderFunction } from "@remix-run/node";
import Layout from "~/components/layout";
import { requireUserId } from "~/utils/auth.server";
import { UserPanel } from "~/components/user-panel";
import { getOtherUsers } from "~/utils/users.server";
import { Outlet, useLoaderData } from "@remix-run/react";
import { getFilteredKudos } from "~/utils/kudo.server";
import { Kudo } from "~/components/kudo";
import { Kudo as Ikudo, Profile } from "@prisma/client";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const users = await getOtherUsers(userId);
  const kudos = await getFilteredKudos(userId, {}, {});
  return json({ users, kudos });
};

interface KudoWithAuthor extends Ikudo {
  author: {
    profile: Profile;
  };
}

export default function Home() {
  const { users, kudos } = useLoaderData();
  return (
    <Layout>
      <Outlet />
      <div className="h-full flex">
        <UserPanel users={users} />
        <div className="flex-1 flex flex-col">
          {/*search bar*/}
          <div className="flex-1 flex">
            <div className="w-full p-10 flex flex-col gap-y-p">
              {kudos.map((kudo: KudoWithAuthor) => (
                <Kudo key={kudo.id} kudo={kudo} profile={kudo.author.profile} />
              ))}
            </div>
            {/*recent kudos*/}
          </div>
        </div>
      </div>
    </Layout>
  );
}

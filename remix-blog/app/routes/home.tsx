import { json, LoaderFunction } from "@remix-run/node";
import Layout from "~/components/layout";
import { requireUserId } from "~/utils/auth.server";
import { UserPanel } from "~/components/user-panel";
import { getOtherUsers } from "~/utils/users.server";
import { Outlet, useLoaderData } from "@remix-run/react";
import { getFilteredKudos } from "~/utils/kudo.server";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const users = await getOtherUsers(userId);
  const kudos = await getFilteredKudos(userId, {}, {});
  return json({ users, kudos });
};

export default function Home() {
  const { users } = useLoaderData();
  return (
    <Layout>
      <Outlet />
      <div className="h-full flex">
        <UserPanel users={users} />
        <div className="flex-1 flex flex-col">
          {/*search bar*/}
          <div className="flex-1 flex">
            <div className="w-full p-10 flex flex-col gap-y-p"></div>
            {/*recent kudos*/}
          </div>
        </div>
      </div>
    </Layout>
  );
}

import { json, LoaderFunction } from "@remix-run/node";
import Layout from "~/components/layout";
import { requireUserId } from "~/utils/auth.server";
import { UserPanel } from "~/components/user-panel";
import { getOtherUsers } from "~/utils/users.server";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const users = await getOtherUsers(userId);
  return json({ users });
};

function home() {
  return (
    <Layout>
      <div className="h-full flex">
        <UserPanel />
      </div>
    </Layout>
  );
}

export default home;

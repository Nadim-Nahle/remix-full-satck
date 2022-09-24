import { LoaderFunction } from "@remix-run/node";
import { requireUserId } from "~/utils/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  return null;
};

function home() {
  return (
    <div className="h-screen w=full bg-slate-600">
      <h2 className="font-bold text-5xl text-blue-400">Home Page</h2>
    </div>
  );
}

export default home;

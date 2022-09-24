import type { LoaderFunction } from "@remix-run/node";
import { requireUserId } from "~/utils/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  return null;
};

function index() {
  return (
    <div className="h-screen w-full bg-slate-600">
      <h1 className="font-bold text-5xl text-blue-400">
        my first remix project
      </h1>
    </div>
  );
}

export default index;

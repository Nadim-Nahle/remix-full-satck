import { json, LoaderFunction, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Modal } from "~/components/modal";
import { getUserById } from "~/utils/users.server";

export const loader: LoaderFunction = async ({ params }) => {
  const { userId } = params;
  if (typeof userId != "string") {
    return redirect("/home");
  }

  const recipient = await getUserById(userId);
  return json({ recipient });
};

export default function KudoModal() {
  const { recipient } = useLoaderData();
  return (
    <Modal isOpen={true} className="w-2/3 p-10">
      <form method="post">
        <input type="hidden" value={recipient.id} name="recipientId" />
        <div className="flex flex-col md:flex-row gap-y-2 md:gapy-y-0">
          <div className="text-center flex flex-col items-center gap-y-2 pr-8">
            <userCircle > 
          </div>
        </div>
      </form>
    </Modal>
  );
}

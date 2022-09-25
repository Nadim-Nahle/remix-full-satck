import { json, LoaderFunction, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Modal } from "~/components/modal";
import { UserCircle } from "~/components/user-circle";
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
            <UserCircle profile={recipient.profile} className="h-24 w-24" />
            <p className="text-blue-300">
              {recipient.profile.firstName}
              {recipient.profile.lastName}
            </p>
            {recipient.profile.department && (
              <span className="px-2 py-1 bg-gray-300 rounded-xl text-blue-300 w-auto">
                {recipient.profile.department[0].toUpperCase() +
                  recipient.profile.department.toLowerCase().slice(1)}
              </span>
            )}
          </div>
          <div className="flex-1 flex flex-col gap-y-4"></div>
        </div>
      </form>
    </Modal>
  );
}

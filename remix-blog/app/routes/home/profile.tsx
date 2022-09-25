import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import FormField from "~/components/form-field";
import { Modal } from "~/components/modal";
import { getUser } from "~/utils/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  return json({ user });
};

export default function ProfileModal() {
  const { user } = useLoaderData();

  return (
    <Modal isOpen={true} className="w-1/3">
      <div className="p-3">
        <h2 className="text-4xl font-semibold text-blue-600 text-center mb-4">
          Your Profile
        </h2>
        <div className="fex">
          <div className="w-1/3">{/*image uploader*/}</div>
          <div className="flex-1">
            <form>
              <FormField />
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
}

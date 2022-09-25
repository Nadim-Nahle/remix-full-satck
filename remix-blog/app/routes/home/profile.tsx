import { json, LoaderFunction } from "@remix-run/node";
import { Modal } from "~/components/modal";
import { getUser } from "~/utils/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  return json({ user });
};

export default function ProfileModal() {
  return (
    <Modal isOpen={true}>
      <p>Profile settings</p>
    </Modal>
  );
}

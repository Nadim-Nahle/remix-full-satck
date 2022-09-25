import { redirect } from "@remix-run/node";
import { Modal } from "~/components/modal";

const loader: LoaderFunction = async ({ params }) => {
  const { userId } = params;
  if (typeof userId != "string") {
    return redirect("/home");
  }
};

export default function kudoModal() {
  return (
    <Modal isOpen={true}>
      <h2>this is a modal</h2>
    </Modal>
  );
}

import { ActionFunction, json, LoaderFunction } from "@remix-run/node";
import { Department, Profile } from "@prisma/client";
import { useActionData, useLoaderData } from "@remix-run/react";
import React, { useEffect, useRef, useState } from "react";
import FormField from "~/components/form-field";
import { Modal } from "~/components/modal";
import { SelectBox } from "~/components/select-box";
import { getUser, requireUserId } from "~/utils/auth.server";
import { departments } from "~/utils/constants";
import { updateUser } from "~/utils/users.server";

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const form = await request.formData();
  const action = form.get("_action");
  let department = form.get("department");
  let firstName = form.get("firstName");
  let lastName = form.get("lastName");

  switch (action) {
    case "save": {
      if (
        typeof firstName != "string" ||
        typeof lastName != "string" ||
        typeof department != "string"
      ) {
        return json({ error: "Invalid form data" }, { status: 400 });
      }
      await updateUser(userId, {
        firstName,
        lastName,
        department: department as Department,
      });
    }
    default:
      return json({ error: "invalid form data" }, { status: 400 });
  }
};
export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  return json({ user });
};

export default function ProfileModal() {
  const { user } = useLoaderData();
  const actionData = useActionData();
  const [formError, setFormError] = useState(actionData.error || "");
  const firstLoad = useRef(true);
  const [formData, setFormData] = useState({
    firstName: user.profile.firstName,
    lastName: user.profile.lastName,
    department: user.profile.department,
  });

  useEffect(() => {
    if (!firstLoad.current) {
      setFormError("");
    }
  }, [formData]);

  useEffect(() => {
    firstLoad.current = false;
  }, []);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setFormData((form) => ({ ...form, [field]: event.target.value }));
  };

  return (
    <Modal isOpen={true} className="w-1/3">
      <div className="p-3">
        <h2 className="text-4xl font-semibold text-blue-600 text-center mb-4">
          Your Profile
        </h2>
        <div className="text-xs font-semibold text-center tracking-wide text-red-500 w-full mb-2">
          {formError}
        </div>
        <div className="flex">
          <div className="w-1/3">{/*image uploader*/}</div>
          <div className="flex-1">
            <form method="post">
              <FormField
                htmlFor="firstName"
                label="First Name"
                value={formData.firstName}
                onChange={(e) => handleInputChange(e, "firstName")}
              />
              <FormField
                htmlFor="lastName"
                label="Last Name"
                value={formData.lastName}
                onChange={(e) => handleInputChange(e, "lastName")}
              />
              <SelectBox
                className="w-full rounded-xl px-3 py-2 text-gray-400"
                id="department"
                label="Department"
                name="department"
                options={departments}
                value={formData.department}
                onChange={(e) => handleInputChange(e, "department")}
              />
              <div className="w-full text-right mt-4">
                <button
                  name="_action"
                  value="save"
                  className="rounded-xl bg-yellow-500 font-semibold text-blue-600 w-32 h-12 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1"
                >
                  save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
}

import Layout from "~/components/layout";
import FormField from "~/components/form-field";
import React, { useState } from "react";
import { ActionFunction, json } from "@remix-run/node";
import { login, register } from "~/utils/auth.server";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const action = form.get("_action");
  const email = form.get("email");
  const password = form.get("password");
  let firstName = form.get("firstName");
  let lastName = form.get("lastName");

  if (
    typeof action != "string" ||
    typeof email != "string" ||
    typeof password != "string"
  ) {
    return json({ error: "invalid form data", form: action }, { status: 400 });
  }

  if (
    action == "register" &&
    (typeof firstName != "string" || typeof lastName != "string")
  ) {
    return json({ error: "invalid form data", form: action }, { status: 400 });
  }
  switch (action) {
    case "login": {
      return await login({ email, password });
    }
    case "register": {
      firstName = firstName as string;
      lastName = lastName as string;
      return await register({ email, password, firstName, lastName });
    }
    default:
      return json({ error: "invalid form" }, { status: 400 });
  }
};

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const [action, setAction] = useState("login");

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setFormData((form) => ({
      ...form,
      [field]: event.target.value,
    }));
  };

  return (
    <Layout>
      <div className="h-full flex justify-center items-center flex-col gap-y-4">
        <button
          onClick={() => setAction(action == "login" ? "register" : "login")}
          className="absolute top-8 right-8 rounded-xl bg-yellow-300 font-semibold text-blue-600 px-3 py-2 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1"
        >
          {action == "login" ? "Sign Up" : "Sign in"}
        </button>
        <h2 className="text-5xl font-extrabold text-yellow-300">
          Welcome to Remix!
        </h2>

        <p className="font-semibold text-slate-300">
          {action == "login" ? "Please Sign In" : "please Sign Up"}
        </p>
        <form className="rounded-2xl bg-gray-200 p-6 w-96">
          <FormField
            htmlFor="email"
            label="Email"
            value={formData.email}
            onChange={(e) => handleInputChange(e, "email")}
          />
          <FormField
            type="password"
            htmlFor="password"
            label="Password"
            value={formData.password}
            onChange={(e) => handleInputChange(e, "password")}
          />

          {action == "register" ? (
            <>
              <FormField
                htmlFor="firstName"
                label="First Name"
                value={formData.firstName}
                onChange={(e) => handleInputChange(e, "firstName")}
              />
              <FormField
                type="text"
                htmlFor="lastName"
                label="Last Name"
                value={formData.lastName}
                onChange={(e) => handleInputChange(e, "lastName")}
              />
            </>
          ) : null}
          <div className="w-full text-center">
            <button
              type="submit"
              name="_action"
              value={action}
              className="rounded-xl mt-2 bg-yellow-300 px-3 py-2 text-blue-600 font-semibold transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1"
            >
              {action == "login" ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;

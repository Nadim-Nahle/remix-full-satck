import Layout from "~/components/layout";
import FormField from "~/components/form-field";
import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    passowrd: "",
  });

  return (
    <Layout>
      <div className="h-full flex justify-center items-center flex-col gap-y-4">
        <h2 className="text-5xl font-extrabold text-yellow-300">
          Welcome to Remix!
        </h2>
        <p className="font-semibold text-slate-300">Please Login</p>

        <form className="rounded-2xl bg-gray-200 p-6 w-96">
          <FormField htmlFor="email" label="Email" value={} onChange={} />
          <FormField
            type="password"
            htmlFor="password"
            label="Password"
            value={}
            onChange={}
          />
          <div className="w-full text-center">
            <input
              type="submit"
              className="rounded-xl mt-2 bg-yellow-300 px-3 py-2 text-blue-600 font-semibold transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1"
            />
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Login;

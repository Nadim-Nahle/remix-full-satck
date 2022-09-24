import { useEffect, useState } from "react";

interface FormFieldProps {
  htmlFor: String;
  label: String;
  type?: String;
  value: any;
  onChange?: (...args: any) => any;
  error?: String;
}

export default function FormField({
  htmlFor,
  label,
  type = "text",
  value,
  onChange = () => {},
  error = "",
}: FormFieldProps) {
  const [errorText, setErrorText] = useState(error);

  useEffect(() => {
    setErrorText(error);
  }, [error]);

  return <div>FormField</div>;
}

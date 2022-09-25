import { useNavigate } from "@remix-run/react";
import { Portal } from "./portal";

interface props {
  children: React.ReactNode;
  isOpen: boolean;
  ariaLabel?: string;
  className?: string;
}

export const Modal: React.FC<props> = ({
  children,
  isOpen,
  ariaLabel,
  className,
}) => {
  const navigate = useNavigate();
  if (!isOpen) return null;
  return (
    <Portal wrapperId="modal">
      <div
        className="fixed inset-0 overflow-y-auto bg-gray-600 bg-opacity-80"
        aria-labelledby={ariaLabel ?? "modal-title"}
        role="dialog"
        aria-modal="true"
        onClick={() => navigate("/home")}
      ></div>
      <div className="fixed inset-0 pointers-events-none flex justify-center items-center overflow-scroll">
        <div
          className={`${className}bg-gray-200 pointers-events-auto max-h-screen md:rounded-xl `}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
};

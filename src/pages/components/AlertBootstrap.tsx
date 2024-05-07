import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}
const AlertBootstrap = ({ children, onClose }: Props) => {
  return (
    <div
      className="alert alert-primary alert-dismissible"
      style={{ width: "30%" }}
    >
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default AlertBootstrap;

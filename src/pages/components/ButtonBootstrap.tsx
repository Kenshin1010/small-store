type Props = {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
};

const ButtonBootstrap = ({ children, onClick, color }: Props) => {
  return (
    <button
      className={"btn btn-" + color}
      style={{ width: "50%" }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonBootstrap;

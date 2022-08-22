import "./button.css";

type ButtonProps = {
  children: string;
  className: string;
  onClick?: () => Promise<void> | void;
};

export const Button = ({ className, children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`default ${className}`}>
      {children}
    </button>
  );
};

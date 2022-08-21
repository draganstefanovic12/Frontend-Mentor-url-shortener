import "./button.css";

type ButtonProps = {
  children: string;
  className: string;
};

export const Button = ({ className, children }: ButtonProps) => {
  return <button className={`default ${className}`}>{children}</button>;
};

import { ReactNode } from "react";

interface Props {
  //reactNode will help  pass HTML contents or any children into the component
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;

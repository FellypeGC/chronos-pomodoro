import { Link } from "react-router-dom";

type RouterLinkProps = {
  children: React.ReactNode;
  href: string;
} & React.ComponentProps<"a">;

const index = ({ children, href, ...props }: RouterLinkProps) => {
  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  );
};

export default index;

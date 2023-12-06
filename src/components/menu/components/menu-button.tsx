import { styled } from "@stitches/react";

export const MenuButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => <A href={href}>{children}</A>;

const A = styled("a", {
    fontFamily: "Roboto, sans-serif, monospace",
    fontSize: "medium",
    textDecoration: "none",
    color: "#f2f2f2",
    fontWeight: 600,
    margin: 0,
    padding: 0, 
})
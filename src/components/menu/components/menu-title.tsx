import { styled } from "@stitches/react";

export const MenuTitle = ({ children }: { children: React.ReactNode }) => (
  <H1>{children}</H1>
);

const H1 = styled("h1", {
  fontFamily: "Roboto, sans-serif, monospace",
  fontSize: "x-large",
  fontWeight: 700,
  color: "#f2f2f2",
  margin: 0,
  padding: 0,
  cursor: "pointer"
});

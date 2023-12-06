import { styled } from "@stitches/react";

export const Box = styled("div", {
    display: "flex",
    flexDirection: "column",
})

export const BoxTW = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => (
    <div className="box" {...props}/>
)
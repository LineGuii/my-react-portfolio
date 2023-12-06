import { styled } from "@stitches/react";
import { Box } from "@ui";

export const MainBox = styled(Box, {
    "@media (min-width: 420px)": {
        width: "95%",
    },
    "@media (min-width: 700px)": {
        width: "80%",
    },
    "@media (min-width: 1280px)": {
        width: "60%",
    },
    margin: "0 auto",
})
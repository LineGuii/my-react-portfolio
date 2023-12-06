import { Box } from "@ui/box";
import { Menu } from "@components/menu/";
import { Flex } from "@components";
import { Title } from "@ui/title/title";
import { styled } from "@stitches/react";
import { SubTitle } from "@components/ui/subtitle";

export function Home() {
  return (
    <Box>
      <Menu />
      <HomeBox>
        <StyledFlex>
          <img
            src="./public/logo512.png"
            height={128}
            about="face"
            alt="face"
          />
        </StyledFlex>
        <StyledFlex>
          <Title style={{ color: "#F2F2F2" }}>GUILHERME IANNOTTA</Title>
        </StyledFlex>
        <StyledFlex style={{ paddingTop: 4}}>
          <SubTitle style={{ color: "#F2F2F2" }}>DESENVOLVEDOR FRONT-END</SubTitle>
        </StyledFlex>
      </HomeBox>
    </Box>
  );
}

const HomeBox = styled(Box, {
  flex: 1,
  justifyContent: "center",
  backgroundColor: "#5e548e",
  padding: 48,
  gap: 8,
});

const StyledFlex = styled(Flex, {
  justifyContent: "center",
});

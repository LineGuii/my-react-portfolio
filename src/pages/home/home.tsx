import { styled } from "@stitches/react";
import { SubTitle, Title, Box, Flex } from "@ui";

export function Home() {
  return (
    <Box>
      <HomeBox>
        <StyledFlex>
          <img src="/logo512.png" height={128} about="face" alt="face" />
        </StyledFlex>
        <StyledFlex>
          <Title style={{ color: "#F2F2F2" }}>GUILHERME IANNOTTA</Title>
        </StyledFlex>
        <StyledFlex style={{ paddingTop: 4 }}>
          <SubTitle style={{ color: "#F2F2F2" }}>
            DESENVOLVEDOR FRONT-END
          </SubTitle>
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

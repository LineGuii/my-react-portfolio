import { styled } from "@stitches/react";
import { MenuButton, MenuTitle } from "./components";
import { Flex } from "../ui";

export function Menu() {
  return (
    <MenuFlex>
      <Flex style={{ flex: 2, justifyContent: "center" }}>
        <MenuTitle>Meu Portfólio</MenuTitle>
      </Flex>
      <MenuLinks>
        <MenuButton href="#">Home</MenuButton>
        <MenuButton href="#">Experiência</MenuButton>
        <MenuButton href="#">Sobre Mim</MenuButton>
        <MenuButton href="#">Contato</MenuButton>
      </MenuLinks>
    </MenuFlex>
  );
}

const MenuFlex = styled(Flex, {
  padding: 16,
  alignItems: "center",
  gap: 64,
  backgroundColor: "#5e548e",
  top: 0,
  left: 0,
  position: "sticky",
  overflow: "hidden",
});

const MenuLinks = styled(Flex, {
    flex: 3,
    gap: 16,
    flexWrap: "nowrap",
    justifyContent: "flex-end",
    paddingRight: "32px",
})

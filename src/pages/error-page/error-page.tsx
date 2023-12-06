import { SubTitle, Title, Box, Flex } from "@ui";
import { useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError();
  return (
    <Flex style={{justifyContent: "center"}}>
      <Box style={{ margin: "0 auto", justifyContent: "center", alignItems: "center" }}>
        <Title>404</Title>
        <SubTitle>Página não encontrada!</SubTitle>
        <p>
          <i>{error?.statusText || error?.message}</i>
        </p>
      </Box>
    </Flex>
  );
}

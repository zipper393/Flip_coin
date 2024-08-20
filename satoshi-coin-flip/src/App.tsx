import { ConnectButton, useCurrentAccount } from "@mysten/dapp-kit";
import { Box, Callout, Container, Flex, Grid, Heading } from "@radix-ui/themes";
import { PlayerSesh } from "./containers/Player/PlayerSesh";
import { HouseSesh } from "./containers/House/HouseSesh";
import { HOUSECAP_ID, PACKAGE_ID } from "./constants";
import { InfoCircledIcon } from "@radix-ui/react-icons";

function App() {
  const account = useCurrentAccount();
  return (
    <>
      <Flex
        position="sticky"
        px="4"
        py="2"
        justify="between"
        style={{
          borderBottom: "1px",
        }}
      >
        <Box>
          <Heading>LUCKY FLIP</Heading>
        </Box>

        <Box>
          <ConnectButton />
        </Box>
      </Flex>
      <Container>  
        {!account ? (
          <Heading size="4" align="center">
            Please connect wallet to continue
          </Heading>
        ) : (
          <Grid columns="1" gap={"3"} width={"60%"} >
            <PlayerSesh />
            <HouseSesh />
          </Grid>
        )}
      </Container>
    </>
  );
}

export default App;

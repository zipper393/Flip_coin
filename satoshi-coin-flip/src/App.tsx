 import { ConnectButton, useCurrentAccount } from "@mysten/dapp-kit";
import { Box, Callout, Container, Flex, Grid, Heading } from "@radix-ui/themes";
import { PlayerSesh } from "./containers/Player/PlayerSesh";
import { HouseSesh } from "./containers/House/HouseSesh";
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
          borderBottom: "1px solid var(--gray-a2)",
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
       <Callout.Root mb="2">
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>
            You need to connect to wallet that publish the smart contract
            package
          </Callout.Text>
        </Callout.Root>
        <Box style={{ background: 'var(--gray-a2)', borderRadius: 'var(--radius-3)' }}>
          <Container size="1" align="center">
          <img src="https://i.ibb.co.com/4M4kKMV/head.png" alt="head" border="0" style={{
      objectFit: 'cover',
      width: '50%',
      height: '50%',
      borderRadius: 'var(--radius-2)',
    }}/>

          </Container>
        </Box>
        {!account ? (
          <Heading size="4" align="center">
            Please connect wallet to continue
          </Heading>
        ) : (
          <Grid columns="2" gap={"3"} width={"auto"}>
            <PlayerSesh />
            <HouseSesh />
          </Grid>
        )}
      </Container>
    </>
  );
}

export default App;

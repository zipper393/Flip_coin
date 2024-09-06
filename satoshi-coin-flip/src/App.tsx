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
          borderBottom: "3px solid var(--gray-a5)",
          background: 'var(--gray-a2)',
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
       <Callout.Root mb="2" style={{padding: '20px', margin: '5px',}}>
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>
            You need to connect to wallet that publish the smart contract
            package
          </Callout.Text>
        </Callout.Root>
        <Box style={{ background: 'var(--gray-a2)', borderRadius: 'var(--radius-3)' }}>
          <Container>
           <Flex gap="3" align="center">
          <img src="https://i.ibb.co.com/4M4kKMV/head.png" alt="head" style={{
      objectFit: 'cover',
      width: '50%',
      height: '100%',
      borderRadius: 'var(--radius-2)',
    }}/>
           </Flex>
          </Container>
          <Heading size="9" align="center" style={{margin: '2px', paddingBottom: '40px', color: '#E0B20B',}}>
            LUCKY FLIP
          </Heading>
          
        </Box>
        {!account ? (
          <Heading size="4" align="center">
            Please connect wallet to continue
          </Heading>
        ) : (
          <Container size="1" style={{ background: 'var(--gray-a2)', borderRadius: 'var(--radius-3)' }}>
          <Grid columns="2" gap={"3"} width={"auto"}>
            <PlayerSesh />
            <HouseSesh />
          </Grid>
          </Container>
        )}
      </Container>
    </>
  );
}

export default App;

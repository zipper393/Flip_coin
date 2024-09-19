import { ConnectButton, useCurrentAccount } from "@mysten/dapp-kit";
import { Avatar, Box, Container, Flex, Grid, Heading, Link } from "@radix-ui/themes";
import { PlayerSesh } from "./containers/Player/PlayerSesh";
import { HouseSesh } from "./containers/House/HouseSesh";
// import ReactPlayer from 'react-player/youtube';


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
        <Flex gap="2">
          <Avatar
            src="https://i.ibb.co.com/8gD1x1f/output-onlinegiftools.gif"
            fallback="Luck Flip"
          />
          <Avatar fallback="Luck Flip" />
        </Flex>
        

        <Box>
          <ConnectButton />
        </Box>
      </Flex>
      <Container>      
      
   
        {!account ? (
                   <>
        <Heading mb="2" mt="2" size="7" color="amber">
          HOW TO PLAY
        </Heading>
{/*         <Container size="1" style={{ background: 'var(--gray-a2)', borderRadius: 'var(--radius-3)'}}>
        <Flex gap="2" align="center">
         <ReactPlayer 
            url='https://youtu.be/QjxPr8CU6OY?si=pmIdGxLqiRJIEpwb'
              muted={true}
              playing={true}
              width={'65%'}
              controls={true} />
        </Flex>
        </Container> */}
              </>
        ) : (
          <Container size="1" style={{ background: 'var(--gray-a2)', borderRadius: 'var(--radius-3)' }}>
          <Grid columns="1" gap={"3"} width={"auto"}>
          <Box style={{ background: 'var(--gray-a2)', borderRadius: 'var(--radius-3)' }}>
          <Container>
           <Flex mt="6" gap="3" align="center">
          <img src="https://i.ibb.co.com/8gD1x1f/output-onlinegiftools.gif" alt="head" style={{
      objectFit: 'fill',
      width: '35%',
      height: '40%',
      borderRadius: 'var(--radius-2)',
    }}/>
           </Flex>
          </Container>
          <Heading size="9" align="center" style={{margin: '2px', paddingBottom: '40px', color: '#E0B20B',}}>
            LUCK FLIP
          </Heading>
          
        </Box>
            <HouseSesh />
            <PlayerSesh />
            <footer style={{padding: "20px"}}>
        <Container>
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
          <Heading>LUCK FLIP</Heading>
        </Box>
        <Box>
          <div>
          <h2>About Us</h2>
          </div>
          <div>
          <label>
            <Link underline="hover" href="https://discord.gg/SHT8yy5Zbt"> Discord</Link>
          </label>
          </div>
          <div>
          <label>
          <Link underline="hover" href="https://t.me/luckflips"> Telegram</Link>
          </label>
          </div>
          <div>
          <label>
          <Link underline="hover" href="https://x.com/flip_luck7"> Twitter</Link>
          </label>
          </div>
        </Box>
      </Flex>
      
        </Container>
      </footer>
          </Grid>
          </Container>
        )}
      </Container>
      
    </>
  );
}

export default App;

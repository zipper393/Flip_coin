import { useContext, useState } from "react";
import { useSignAndExecuteTransactionBlock } from "@mysten/dapp-kit";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import {
  Box,
  Container,
  Heading,
  TextFieldInput,
  Text,
  Button,
  Grid,
} from "@radix-ui/themes";
import { toast } from "react-toastify";
import { MIST_PER_SUI } from "@mysten/sui.js/utils";

import { PACKAGE_ID } from "../../constants";
import { SuiTransactionBlockResponse } from "@mysten/sui.js/client";
import { useFetchCounterNft } from "./useFetchCounterNft";
import { HouseDataContext } from "../House/HouseDataContext";

export function PlayerCreateGame() {
  const { mutate: execCreateGame, isLoading } =
    useSignAndExecuteTransactionBlock();
  const { data: counterNFTData } = useFetchCounterNft();

  const [guess, setGuess] = useState("");
  const [stake, setStake] = useState(0);

  const handleGuessChange = (e) => {
    setGuess(e.target.value);
  };

  const [houseDataId] = useContext(HouseDataContext);

  return (
    <Container mb={"4"}>
      <Heading size="3" mb="2">
        Play Game
      </Heading>

      <form
        onSubmit={async (e) => {
          e.preventDefault();

          // Create new transaction block
          const txb = new TransactionBlock();

          // Player stake
          const [stakeCoin] = txb.splitCoins(txb.gas, [
            MIST_PER_SUI * BigInt(stake),
          ]);

          // Create the game with CounterNFT
          txb.moveCall({
            target: `${PACKAGE_ID}::single_player_flip::start_game`,
            arguments: [
              txb.pure.string(guess),
              txb.object(counterNFTData[0].data?.objectId!),
              stakeCoin,
              txb.object(houseDataId),
            ],
          });

          execCreateGame(
            {
              transactionBlock: txb,
            },
            {
              onError: (err) => {
                toast.error(err.message);
              },
              onSuccess: (result: SuiTransactionBlockResponse) => {
                toast.success(`Digest: ${result.digest}`);
                toast.info(`Balance: ${result.balanceChanges}`);
              },
            },
          );
        }}
      >
        <Box mb="3">
          <Text>Guess</Text>
          
        </Box>
        <Box mb="3">
        <Grid columns={{ initial: '1', md: '2' }} gap="3" width="auto">
          <div>
        <label>
        <img src="https://i.ibb.co.com/4M4kKMV/head.png" alt="head" style={{
              width: '68%',
              height: 'auto',
              borderRadius: 'var(--radius-2)',
          }}/>
            <input
              type="radio"
              value="H"
              checked={guess === "H"}
              onChange={handleGuessChange}
            /> Heads
          </label>
          </div>
          <div>
          <label>
          <img src="https://i.ibb.co.com/7Ww8G4r/Luck-Flip-Coin-Tail.png" alt="tails" style={{
              width: 'auto',
              height: 'auto',
              borderRadius: 'var(--radius-2)',
          }}/>
            <input
              type="radio"
              value="T"
              checked={guess === "T"}
              onChange={handleGuessChange}
            /> Tails
          </label>
          </div>
        </Grid>
        </Box>

        

        
        <Box mb="3">
          <Text>PUT U BET</Text>
          <TextFieldInput
            required
            placeholder="Stake (in SUI)"
            onChange={(e) => {
              setStake(Number(e.target.value));
            }}
          />
        </Box>

        <Button variant="outline"
          disabled={isLoading || counterNFTData.length <= 0}
          type="submit"
        >
          Create Game
        </Button>
      </form>
    </Container>
  );
}

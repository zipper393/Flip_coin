import { useContext } from "react";
import {
  Box,
  Container,
  Text,
  Heading,
  Callout,
  TextFieldInput,
} from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { HouseDataContext } from "./HouseDataContext";

export function HouseDataInput() {
  const [houseDataId, setHouseDataId] = useContext(HouseDataContext);

  return (
    <Container mb={"4"}>
      <Heading size="3" mb="2">
        Input HouseData ID
      </Heading>

      <Callout.Root mb="2">
        <Callout.Icon>
          <InfoCircledIcon />
        </Callout.Icon>
        <Callout.Text>
          Input HouseData ID everytime we refresh the page. HouseData existed
          only after initialization
        </Callout.Text>
      </Callout.Root>

      <Box mb="3">
        <Text>Copy This <strong> "0x5843b4cbae51082be22ca2e2a1ba25507bb80e8add8f7b38347732f1889e31c6"</strong></Text>
        <TextFieldInput
          required
          placeholder="Paste Here !"
          value={houseDataId}
          onChange={(e) => {
            setHouseDataId(e.target.value);
          }}
        />
      </Box>
    </Container>
  );
}

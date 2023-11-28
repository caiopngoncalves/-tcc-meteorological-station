import {
  Avatar,
  Box,
  HStack,
  Spacer,
  View,
  VStack,
  Text,
  Button,
  Icon,
} from "native-base";

import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export type Station = {
  id: string;
  name: string;
  status: boolean;
  region: string;
};

interface ItemProps {
  station: Station;
}

interface HomeListProps {
  list: Station[];
}

const Item: React.FC<ItemProps> = ({ station }) => {
  const navigate = useNavigation();
  return (
    <View marginX={5}>
      <Box
        borderBottomWidth="1"
        _dark={{
          borderColor: "muted.50",
        }}
        borderColor="muted.800"
        pl={["0", "4"]}
        pr={["0", "5"]}
        py="2"
      >
        <HStack space={[2, 3]} justifyContent="space-between">
          <VStack>
            <Text
              _dark={{
                color: "warmGray.50",
              }}
              color="coolGray.800"
              bold
            >
              {station.name}
            </Text>
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              {station.region}
            </Text>
          </VStack>
          <Spacer />
          <VStack>
            <View
              flexDirection={"row"}
              alignItems={"center"}
              alignSelf={"flex-end"}
            >
              <Text
                fontSize="xs"
                _dark={{
                  color: "warmGray.50",
                }}
                color={station.status ? "green.700" : "red.700"}
                marginRight={3}
                fontWeight={"semibold"}
              >
                {station.status ? "Ativo" : "Inativo"}
              </Text>
              <View
                borderWidth={0.9}
                borderColor={"black"}
                backgroundColor={station.status ? "green.700" : "red.700"}
                borderRadius={800}
                width={2}
                height={2}
              ></View>
            </View>
            <Button
              onPress={() => {
                navigate.navigate("Details", {
                  id: station.id,
                  nameStation: station.name,
                });
              }}
              variant={"link"}
              marginRight={-3}
              marginY={-2}
              endIcon={
                <Icon as={AntDesign} name="arrowright" color={"#065A82"}></Icon>
              }
            >
              <Text color={"#065A82"}>Detalhes</Text>
            </Button>
          </VStack>
        </HStack>
      </Box>
    </View>
  );
};

const HomeList: React.FC<HomeListProps> = ({ list }) => {
  return (
    <View>
      {list.map((Element) => (
        <Item station={Element} key={Element.id} />
      ))}
    </View>
  );
};

export default HomeList;

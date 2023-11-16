// Arquivo: ./home/index.tsx
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Icon } from "native-base";
import React from "react";
import HomeList, { Station } from "../../components/homeList";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

interface HomeProps {
  navigation: any;
}

const data: Station[] = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "Estação 1",
    status: true,
    region: "CEPLAC",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    name: "Estação 2",
    status: true,
    region: "CEPLAC",
  },
  {
    id: "68694a0f-3da1-431f-a4f8-142371e29d72",
    name: "Estação 3",
    status: true,
    region: "CEPLAC",
  },
  {
    id: "28694a0f-3da1-471f-bd96-142456e29d72",
    name: "Estação 4",
    status: false,
    region: "CEPLAC",
  },
  {
    id: "68694a0f-c1b1-431f-bd56-142371e29d72",
    name: "Estação 5",
    status: true,
    region: "CEPLAC",
  },
];

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["#21295c", "#1B3B6F", "#1C7293"]}
    >
      <View height={"100%"}>
        <View
          height={"12%"}
          paddingTop={"2%"}
          marginX={"7%"}
          marginTop={"7%"}
          bgColor={"#9EB3C2"}
          borderTopRadius={20}
          borderBottomWidth={1}
          flexDirection={"column"}
          justifyItems={"center"}
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,

            elevation: 8,
          }}
        >
          <Text
            fontWeight="bold"
            fontSize={20}
            textAlign={"center"}
            color="coolGray.800"
          >
            Consulte informações meteorologicas em tempo real
          </Text>
        </View>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={["#B84700", "#B65316", "#C85C19"]}
          style={{
            height: "10%",
            marginHorizontal: "3%",
            borderRadius: 20,
            borderColor: "black",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <View flexDirection={"row"} justifyContent={"center"}>
            <Text textAlign={"center"} fontSize={20} fontWeight={"bold"}>
              Selecione uma estação
            </Text>
            <View
              bgColor={"transparent"}
              width={35}
              height={35}
              marginLeft={2}
              justifyContent={"center"}
            >
              <Icon
                as={Ionicons}
                name="sunny"
                color={"yellow.500"}
                size={8}
              ></Icon>
              <Icon
                as={AntDesign}
                name="cloud"
                color={"gray.400"}
                size={8}
                position={"absolute"}
                bottom={-6}
                left={3}
              ></Icon>
            </View>
          </View>
        </LinearGradient>
        <View
          marginX={"7%"}
          height={"71%"}
          marginBottom={"7%"}
          bgColor={"#9EB3C2"}
          borderBottomRadius={20}
          borderTopWidth={1}
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,

            elevation: 8,
          }}
        >
          <HomeList list={data}></HomeList>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Home;

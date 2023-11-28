// Arquivo: ./home/index.tsx
import { View, Text, Button, Icon, FlatList } from "native-base";
import React from "react";
import Carousel from "react-native-snap-carousel";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Chart from "../../components/chart";

interface DetailsProps {
  navigation: any;
  route: any;
}
const initialData = [
  15, 16, 15, 16, 17, 15, 15, 16, 15, 16, 17, 15, 15, 17, 18,
];
const sensors = [
  {
    sensorName: "Velocidade do vento",
    description:
      "A velocidade do vento refere-se à rapidez com que o ar se move na atmosfera.",
    measurement: "m/s",
  },
  {
    sensorName: "Direção do vento",
    description:
      "A direção do vento é o ponto cardeal ou ângulo em relação ao qual o vento está soprando, indicando a origem da sua trajetória",
    measurement: "norte" || "sul" || "leste" || "oeste",
  },
  {
    sensorName: "Umidade",
    description:
      "A umidade refere-se à quantidade de vapor de água presente na atmosfera.",
    measurement: "%",
  },
  {
    sensorName: "Temperatura",
    description:
      "A temperatura é uma medida da energia térmica, variável fundamental para entender as condições atmosféricas.",
    measurement: "°C",
  },
  {
    sensorName: "Pressão atmosférica",
    description:
      "A pressão atmosférica é a força exercida pelo peso do ar sobre uma determinada área na superfície terrestre.",
    measurement: "mmHg",
  },
  {
    sensorName: "Precipitação",
    description:
      "A precipitação refere-se à queda de água, líquida ou sólida, da atmosfera para a superfície da Terra.",
    measurement: "mm",
  },
];

type SensorType = (typeof sensors)[0];

interface RenderItemProps {
  sensor: SensorType;
  nav: any;
}

const renderItem = ({ sensor, nav }: RenderItemProps) => {
  return (
    <View
      flex={1}
      bgColor={"#9EB3C2"}
      borderRadius={20}
      justifyContent={"space-between"}
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
      <View flex={1} borderColor={"#B84700"} borderWidth={1} borderRadius={20}>
        <Text
          textAlign={"center"}
          fontSize={17}
          fontWeight={"bold"}
          marginTop={2}
        >
          {sensor.sensorName}
        </Text>
        <Text textAlign={"justify"} fontSize={12} marginTop={2} marginX={"4%"}>
          {sensor.description}
        </Text>
        <View
          bgColor={"white"}
          mt={5}
          marginX={10}
          height={200}
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
          }}
        >
          <Chart data={initialData} measurement={sensor.measurement} />
        </View>
        <Button
          onPress={() => {
            nav.navigate("Sensor", {
              sensor,
            });
          }}
          variant={"link"}
          alignSelf={"flex-end"}
          endIcon={
            <Icon as={AntDesign} name="arrowright" color={"blue.700"}></Icon>
          }
        >
          <Text color={"blue.700"}>Detalhes</Text>
        </Button>
      </View>
    </View>
  );
};

const Details: React.FC<DetailsProps> = ({ navigation, route }) => {
  const { id, nameStation } = route.params;
  const navigate = useNavigation();
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["#21295c", "#1B3B6F", "#1C7293"]}
      style={{ flex: 1 }}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#B84700", "#B65316", "#C85C19"]}
        style={{
          height: "8%",
          marginHorizontal: "3%",
          borderRadius: 20,
          borderColor: "black",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "12%",
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
        <Text textAlign={"center"} fontSize={20} fontWeight={"bold"}>
          Detalhes da {nameStation}
        </Text>
      </LinearGradient>
      <View
        paddingX={"7%"}
        height={"71%"}
        style={{
          flex: 1,
        }}
      >
        <FlatList
          data={sensors}
          renderItem={(item) =>
            renderItem({ sensor: item.item, nav: navigate })
          }
          ItemSeparatorComponent={() => {
            return <View height={3} />;
          }}
          ListFooterComponent={() => {
            return <View height={3} />;
          }}
          ListHeaderComponent={() => {
            return <View height={3} />;
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </LinearGradient>
  );
};

export default Details;

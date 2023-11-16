// Arquivo: ./home/index.tsx
import { LinearGradient } from "expo-linear-gradient";
import { View, Text } from "native-base";
import { LineChart, Grid, YAxis, XAxis } from "react-native-svg-charts";
import React, { useEffect, useState } from "react";

interface SensorProps {
  navigation: any;
  route: any;
}

interface RenderItemProps {
  data: number[];
  measurement: "string";
}

const initialData = [15, 16, 15, 16, 17, 15];
const contentInset = { top: 20, bottom: 20 };

const getMax = (data: number[]) => {
  return data.reduce((maiorNumero, numero) => {
    return numero > maiorNumero ? numero : maiorNumero;
  }, data[0]);
};

const getMin = (data: number[]) => {
  return data.reduce((menorNumero, numero) => {
    return numero < menorNumero ? numero : menorNumero;
  }, data[0]);
};

function getAverage(data: number[]): number {
  const sum = data.reduce((total, number) => total + number, 0);
  const average = sum / data.length;

  return average;
}

const getHour = () => {
  const agora = new Date();
  const horaAtual = agora.getHours();
  const minutosAtuais = agora.getMinutes();
  return `${horaAtual}:${minutosAtuais}`;
};

const Chart = ({ data, measurement }: RenderItemProps) => {
  return (
    <View flexDirection={"column"} flex={1} padding={2}>
      <View flexDirection={"row"} flex={1}>
        <YAxis
          data={data}
          contentInset={contentInset}
          svg={{
            fill: "#B84700",
            fontSize: 10,
          }}
          numberOfTicks={10}
          formatLabel={(value) => `${value}${measurement}`}
        />
        <LineChart
          style={{ flex: 1, marginLeft: 16 }}
          data={data}
          svg={{ stroke: "#B84700" }}
          contentInset={{ top: 20, bottom: 20 }}
        >
          <Grid />
        </LineChart>
      </View>
      <XAxis
        style={{ marginLeft: 45 }}
        data={data}
        formatLabel={(value, index) => getHour()}
        contentInset={{ left: 10, right: 10 }}
        svg={{ fontSize: 10, fill: "black" }}
      />
    </View>
  );
};

const Sensor: React.FC<SensorProps> = ({ navigation, route }) => {
  const { id, sensor } = route.params;
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const adicionarNumeroAleatorio = () => {
      const novoNumero = parseFloat(
        (Math.random() * (27 - 25) + 15).toFixed(2)
      );
      setData((prevNumeros) => [...prevNumeros, novoNumero]);
    };
    const removerPrimeiroNumero = () => {
      if (data.length > 0) {
        setData((prevNumeros) => {
          const novoArray = [...prevNumeros];
          novoArray.shift();
          return novoArray;
        });
      }
    };

    const intervalId = setInterval(adicionarNumeroAleatorio, 2000);
    const intervalRemover = setInterval(removerPrimeiroNumero, 2000);

    return () => {
      clearInterval(intervalId);
      clearInterval(intervalRemover);
    };
  }, [data]);
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["#21295c", "#1B3B6F", "#1C7293"]}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1 }}>
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
            marginTop: "12%",
          }}
        >
          <Text textAlign={"center"} fontSize={20} fontWeight={"bold"}>
            Tela de detalhes sobre {sensor.sensorName}
          </Text>
        </LinearGradient>
        <View
          marginX={"7%"}
          height={"71%"}
          marginBottom={"7%"}
          bgColor={"#9EB3C2"}
          borderBottomRadius={20}
          borderTopWidth={1}
          style={{
            flex: 1,
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
          <View
            bgColor={"white"}
            mt={5}
            margin={3}
            height={300}
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
            <Chart data={data} measurement={sensor.measurement} />
          </View>
          <View flex={1} margin={3}>
            <View
              flexDirection={"row"}
              width={"100%"}
              justifyContent={"space-between"}
            >
              <Text>Valor mínimo: </Text>
              <Text>
                {getMin(data)} {sensor.measurement}
              </Text>
            </View>

            <View
              flexDirection={"row"}
              width={"100%"}
              justifyContent={"space-between"}
            >
              <Text>Valor máximo: </Text>
              <Text>
                {getMax(data)} {sensor.measurement}
              </Text>
            </View>
            <View
              flexDirection={"row"}
              width={"100%"}
              justifyContent={"space-between"}
            >
              <Text>Média: </Text>
              <Text>
                {getAverage(data).toFixed(2)} {sensor.measurement}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Sensor;

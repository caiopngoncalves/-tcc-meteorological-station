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
import {
  BarChart,
  Grid,
  LineChart,
  XAxis,
  YAxis,
} from "react-native-svg-charts";

export type Station = {
  id: string;
  name: string;
  status: boolean;
  region: string;
};

interface HomeListProps {
  list: Station[];
}

interface RenderItemProps {
  data: number[];
  measurement: string;
}

const Chart = ({ data, measurement }: RenderItemProps) => {
  return (
    <View flexDirection={"column"} flex={1} padding={2}>
      <View flexDirection={"row"} flex={1}>
        <YAxis
          data={data}
          contentInset={{ top: 20, bottom: 20 }}
          svg={{
            fill: "#B84700",
            fontSize: 10,
          }}
          numberOfTicks={10}
          formatLabel={(value) => `${value}${measurement}`}
        />
        <BarChart
          style={{ flex: 1, marginLeft: 16 }}
          data={data}
          svg={{ fill: "#B84700" }}
          contentInset={{ top: 20, bottom: 20 }}
        >
          <Grid />
        </BarChart>
      </View>
      {/*       <XAxis
        style={{ marginLeft: 45 }}
        data={data}
        formatLabel={(value, index) => getHour()}
        contentInset={{ left: 10, right: 10 }}
        svg={{ fontSize: 10, fill: "black" }}
      /> */}
    </View>
  );
};

export default Chart;

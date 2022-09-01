import { View, Text } from "react-native";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { COLORS } from "../constants/theme";
import Days from "../components/Days";

const PlanScreen = () => {
  return (
    <SafeAreaView style={[tw`flex-1`, { backgroundColor: COLORS.dark }]}>
      <Days />
    </SafeAreaView>
  );
};

export default PlanScreen;

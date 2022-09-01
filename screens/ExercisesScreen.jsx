import { View, Text } from "react-native";
import React from "react";

import Exercises from "../components/Exercises";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { COLORS } from "../constants/theme";

const ExercisesScreen = () => {
  return (
    <SafeAreaView
      SafeAreaView
      style={[tw`flex-1`, { backgroundColor: COLORS.dark }]}
    >
      <Exercises />
    </SafeAreaView>
  );
};

export default ExercisesScreen;

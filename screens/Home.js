import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { COLORS } from "../constants/theme";
import Plans from "../components/Plans";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={[tw`items-center flex-1 py-10`, { backgroundColor: COLORS.dark }]}
    >
      <TouchableOpacity onPress={() => navigation.navigate("NewPlanScreen")}>
        <View style={tw`flex-row items-center`}>
          <Icon
            type="ionicon"
            name="add-outline"
            color={COLORS.light}
            size={40}
          />
          <Text style={[tw`text-2xl`, { color: COLORS.light }]}>
            Create new Plan
          </Text>
        </View>
      </TouchableOpacity>
      <View>
        <Plans />
      </View>
    </SafeAreaView>
  );
};

export default Home;

import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import { COLORS } from "../constants/theme";
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { setExercises } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";

const SingleDay = ({ dayName, muscleGroup, exercises }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={tw`flex-row justify-between p-10`}
      onPress={() => {
        dispatch(setExercises(exercises));
        navigation.navigate("ExercisesScreen");
      }}
    >
      <Text style={[tw`text-lg`, { color: COLORS.light2 }]}>{dayName}</Text>
      <Text style={[tw`text-lg`, { color: COLORS.light2 }]}>{muscleGroup}</Text>
    </TouchableOpacity>
  );
};

export default SingleDay;

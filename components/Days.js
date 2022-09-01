import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import tw from "twrnc";
import { COLORS } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setPlan } from "../slices/navSlice";
import { useSelector } from "react-redux";
import { selectPlan } from "../slices/navSlice";
import SingleDay from "./SingleDay";

const Days = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const plan = useSelector(selectPlan);
  console.log(plan);
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let i = 0;
  return (
    <View style={tw``}>
      <SingleDay
        dayName={days[0]}
        muscleGroup={plan.planData.monday.muscleGroup}
        exercises={plan.planData.monday.exercises}
      />
      <SingleDay
        dayName={days[1]}
        muscleGroup={plan.planData.tuesday.muscleGroup}
        exercises={plan.planData.tuesday.exercises}
      />
      <SingleDay
        dayName={days[2]}
        muscleGroup={plan.planData.wednesday.muscleGroup}
        exercises={plan.planData.wednesday.exercises}
      />
      <SingleDay
        dayName={days[3]}
        muscleGroup={plan.planData.thursday.muscleGroup}
        exercises={plan.planData.thursday.exercises}
      />
      <SingleDay
        dayName={days[4]}
        muscleGroup={plan.planData.friday.muscleGroup}
        exercises={plan.planData.friday.exercises}
      />
      <SingleDay
        dayName={days[5]}
        muscleGroup={plan.planData.saturday.muscleGroup}
        exercises={plan.planData.saturday.exercises}
      />
      <SingleDay
        dayName={days[6]}
        muscleGroup={plan.planData.sunday.muscleGroup}
        exercises={plan.planData.sunday.exercises}
      />
    </View>
  );
};

export default Days;

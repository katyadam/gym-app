import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import tw from "twrnc";
import { COLORS } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setPlan } from "../slices/navSlice";

const plans = [
  {
    id: 1,
    title: "Arnold's killing plan",
    date: "2022-08-12",
    planData: {
      monday: {
        muscleGroup: "Back/Biceps",
        exercises: [
          "Deadlift: 5x5/4/3",
          "Lat pull: 6x12",
          "Row: 6x12",
          "Headpull: 6x12",
        ],
      },
      tuesday: {
        muscleGroup: "Chest/Triceps",
        exercises: ["Bench: 5x5/4/3", "etc: 6x12", "etc: 6x12", "etc: 6x12"],
      },
      wednesday: {
        muscleGroup: "Dayoff",
        exercises: [],
      },
      thursday: {
        muscleGroup: "Legs",
        exercises: [
          "Deadlift: 5x5/4/3",
          "Lat pull: 6x12",
          "Row: 6x12",
          "Headpull: 6x12",
        ],
      },
      friday: {
        muscleGroup: "Abs/Shoulders",
        exercises: [
          "Deadlift: 5x5/4/3",
          "Lat pull: 6x12",
          "Row: 6x12",
          "Headpull: 6x12",
        ],
      },
      saturday: {
        muscleGroup: "Upperbody",
        exercises: [
          "Deadlift: 5x5/4/3",
          "Lat pull: 6x12",
          "Row: 6x12",
          "Headpull: 6x12",
        ],
      },
      sunday: {
        muscleGroup: "Legs",
        exercises: [
          "Deadlift: 5x5/4/3",
          "Lat pull: 6x12",
          "Row: 6x12",
          "Headpull: 6x12",
        ],
      },
    },
  },
  {
    id: 2,
    title: "Tribute to Zyzz",
    date: "2022-06-22",
  },
  {
    id: 3,
    title: "3-series max pussies",
    date: "2022-06-22",
  },
  {
    id: 4,
    title: "Cbum bomb",
    date: "2022-06-22",
  },
  {
    id: 5,
    title: "Bikinaci idk",
    date: "2022-06-22",
  },
  {
    id: 6,
    title: "Crossfit shit",
    date: "2022-06-22",
  },
];

const Plans = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={tw`w-100`}>
      <FlatList
        data={plans}
        //keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              tw`flex-row items-center justify-between px-2 mx-2 h-30 rounded-bl-lg mt-2 mb-2`,
              { borderColor: COLORS.light },
            ]}
          >
            <Text style={[tw`text-lg`, { color: COLORS.light2 }]}>
              {item.title}
            </Text>
            <Text style={[tw`text-lg`, { color: COLORS.light2 }]}>
              {item.date}
            </Text>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("PlanScreen");
                dispatch(setPlan(item));
              }}
            >
              <Text style={[tw`text-[30px]`, { color: COLORS.light }]}>
                View
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Plans;

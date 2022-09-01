import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { selectExercises } from "../slices/navSlice";
import { useSelector } from "react-redux";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useDispatch } from "react-redux";
import { addExercises } from "../slices/navSlice";
import tw from "twrnc";
import { COLORS } from "../constants/theme";

const Exercises = () => {
  const exercises = useSelector(selectExercises);
  console.log(exercises);

  const [clicked, setClicked] = useState(true);
  const [text, onChangeText] = useState("");

  const dispatch = useDispatch();

  return (
    <View style={tw`items-center mt-5`}>
      <View style={tw`mb-5`}>
        {clicked ? (
          <TouchableOpacity
            onPress={() => {
              setClicked(!clicked);
            }}
          >
            <View style={tw`flex-row items-center`}>
              <Icon
                type="ionicon"
                name="add-outline"
                color={COLORS.light}
                size={40}
              />
              <Text style={[tw`text-2xl`, { color: COLORS.light }]}>
                Add exercise
              </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <View style={tw`flex-row items-center ml-2`}>
            <TextInput
              style={[tw`text-2xl`, { color: COLORS.light }]}
              placeholder="Add..."
              placeholderTextColor={COLORS.light}
              maxLength={30}
              onChangeText={onChangeText}
            ></TextInput>
            <TouchableOpacity
              style={tw`mx-2`}
              onPress={() => {
                dispatch(addExercises(text));
              }}
            >
              <Icon
                type="ionicon"
                name="add-outline"
                color={COLORS.light}
                size={50}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
      {exercises.map((exercise, key) => (
        <Text key={key} style={[tw`text-lg h-30`, { color: COLORS.light2 }]}>
          {exercise}
        </Text>
      ))}
    </View>
  );
};

export default Exercises;

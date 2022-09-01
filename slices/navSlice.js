import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plan: {
    id: null,
    title: null,
    date: null,
    planData: {},
    exercises: [],
  },
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setPlan: (state, action) => {
      state.plan = action.payload;
    },
    setExercises: (state, action) => {
      state.exercises = action.payload;
    },
    addExercises: (state, action) => {
      state.exercises.push(action.payload);
    },
  },
});

export const { setPlan, setExercises, addExercises } = navSlice.actions;

//Selectors
export const selectPlan = (state) => state.nav.plan;
export const selectExercises = (state) => state.nav.exercises;

export default navSlice.reducer; //slouzi ke connectu k danemu storu dat

import React, { useState, useContext } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const id = navigation.getParam("id");
  const editPost = state.find((post) => post.id === id);
  return (
    <View>
      <Text>Editlenecek Content Title : {editPost.title}</Text>
      <Text>Editlenecek Content: {editPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;

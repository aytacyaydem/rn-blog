import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogForm from "../components/BlogForm";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const id = navigation.getParam("id");
  const editPost = state.find((post) => post.id === id);
  
  return <BlogForm />
};

const styles = StyleSheet.create({});

export default EditScreen;

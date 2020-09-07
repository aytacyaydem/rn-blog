import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogForm from "../components/BlogForm";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const id = navigation.getParam("id");
  const editPost = state.find((post) => post.id === id);
  
  return <BlogForm initialValues={{title:editPost.title,content:editPost.content}} onSubmit={(newTitle,newContent) => console.log(newTitle,newContent)}/>
};

const styles = StyleSheet.create({});

export default EditScreen;

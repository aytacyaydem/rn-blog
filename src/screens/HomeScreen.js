import React, { useContext } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { StatusBar } from "react-native";
import BlogContext from "../context/BlogContext";

const HomeScreen = () => {
  const blogPosts = useContext(BlogContext);
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <Text>This is Home Screen</Text>
      <FlatList
        data={blogPosts}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
        keyExtractor={(post) => post.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;

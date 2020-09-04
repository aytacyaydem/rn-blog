import React, { useContext,useEffect } from "react";
import { View, StyleSheet, Text, FlatList,Button } from "react-native";
import { StatusBar } from "react-native";
import BlogContext from "../context/BlogContext";

const HomeScreen = () => {
  const {data,addBlogPost} = useContext(BlogContext);
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <Text>This is Home Screen</Text>
      <Button title="Basıver" onPress={addBlogPost}/>
      <FlatList
        data={data}
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

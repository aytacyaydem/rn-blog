import React, { useContext,useEffect } from "react";
import { View, StyleSheet, Text, FlatList,Button,TouchableOpacity } from "react-native";
import { StatusBar } from "react-native";
import {Context} from "../context/BlogContext";
import {Feather} from "@expo/vector-icons"

const HomeScreen = () => {
  const {state,addBlogPost,deleteBlogPost} = useContext(Context);
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <Button title="Basıver" onPress={addBlogPost}/>
      <FlatList
        data={state}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
            <Text style={styles.title}>{item.title}-{item.id}</Text>
            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}><Feather style={styles.icon} name="trash"/></TouchableOpacity>
            </View>
          )
        }}
        keyExtractor={(post) => post.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingVertical:20,
    paddingHorizontal:10,
    borderTopWidth:1,
    borderColor:"black",
  },
  title:{
    fontSize:18
  },
  icon:{
    fontSize:24
  }
});

export default HomeScreen;

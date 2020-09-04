import React,{useContext} from "react"
import {View,StyleSheet,Text} from "react-native"
import {Context} from "../context/BlogContext"

const BlogContent = ({navigation}) => {
    const id = navigation.getParam("id")
    const {state} = useContext(Context)
    const singlePost = state.find(post => post.id === id)
    return (
        <View>
        <Text>{singlePost.title}</Text>
        <Text>ID Number : {id}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default BlogContent
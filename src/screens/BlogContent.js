import React,{useContext} from "react"
import {View,StyleSheet,Text,TouchableOpacity} from "react-native"
import {Context} from "../context/BlogContext"
import { Feather } from '@expo/vector-icons';

const BlogContent = ({navigation}) => {
    const id = navigation.getParam("id")
    const {state} = useContext(Context)
    const singlePost = state.find(post => post.id === id)
    return (
        <View style={styles.container}>
        <Text style={styles.title}>{singlePost.title}</Text>
        <Text style={styles.content}>{singlePost.content}</Text>
        </View>
    )
}

BlogContent.navigationOptions = ({navigation}) => {
    return {
        headerRight : () => {
            return (
                <TouchableOpacity onPress={() => navigation.navigate("Edit",{id:navigation.getParam("id")})}>
                <Feather style={{paddingRight:10}}name="edit" size={24} color="white" />
                </TouchableOpacity>
            )
        }
    }
}

const styles = StyleSheet.create({
    container:{
        minHeight:100,
        backgroundColor:"#555555",
        alignItems:"center",
        padding:5
    
    },
    title:{
        fontSize:23,
         color:"white",
         borderBottomWidth:1,
         borderBottomColor:"white",
         marginBottom:15
    },
    content:{
        fontSize:17,
        color:"white"
    }
})

export default BlogContent
import React,{useState,useContext} from "react"
import {View,StyleSheet,Text,TextInput,Button} from "react-native"
import {Context} from "../context/BlogContext"
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";

const CreateScreen = ({navigation}) => {
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")
    const {addBlogPost} = useContext(Context)
    return (
       <View>
           <Text style={styles.label}>Enter Title</Text>
           <TextInput style={styles.input} value={title} onChangeText={text => setTitle(text)}/>
           <Text style={styles.label}>Enter Content</Text>
           <TextInput style={styles.input} value={content} onChangeText={text => setContent(text)}/>
           <Button onPress={() => {
               addBlogPost(title,content,() => {
                navigation.navigate("Home")
               })
               }} title="Add New Post" />
       </View>
    )
}

CreateScreen.navigationOptions = () => {
    return {
        headerRight : () => {
            return (
                <TouchableOpacity>
                <Feather style={{paddingRight:10}}name="edit" size={24} color="white" />
                </TouchableOpacity>
            )
        }
    }
}

const styles = StyleSheet.create({
    input:{
        fontSize:18,
        borderWidth:1,
        borderColor:"black",
        marginBottom:15,
        padding:5,
        margin:5
    },
    label:{
        fontSize:20,
        marginBottom:5,
        marginLeft:5
    }
})

export default CreateScreen
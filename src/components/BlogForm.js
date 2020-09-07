import React,{useState} from "react"
import {View,Text,StyleSheet,TextInput,Button} from "react-native"

const BlogForm = ({onSubmit,initialValues}) => {
    const [title,setTitle] = initialValues ? useState(initialValues.title) : useState("")
    const [content,setContent] = initialValues ? useState(initialValues.content) : useState("")
    return (
        <View>
            <Text style={styles.label}>Enter Title</Text>
            <TextInput style={styles.input} value={title} onChangeText={text => setTitle(text)}/>
            <Text style={styles.label}>Enter Content</Text>
            <TextInput style={styles.input} value={content} onChangeText={text => setContent(text)}/>
            <Button onPress={() => onSubmit(title,content)} title="Save Blog Post" />
        </View>
     )
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

export default BlogForm
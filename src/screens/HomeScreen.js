import React from "react"
import {View,StyleSheet,Text} from "react-native"
import {StatusBar} from "react-native"


const HomeScreen = () => {
    return (
        <View>
            <Text>This is Home Screen</Text>
            <StatusBar barStyle="light-content"/>
        </View>
    )
}

const styles = StyleSheet.create({})

export default HomeScreen
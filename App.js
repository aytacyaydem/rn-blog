import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import {BlogProvider} from "./src/context/BlogContext"

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Blogs",
      headerTitleAlign: "center",
      headerTitleStyle: {
        color: "white",
      },
      headerStyle: {
        backgroundColor: "purple",
      },
    },
  }
);

const App = createAppContainer(AppNavigator);

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  ) 
  
};

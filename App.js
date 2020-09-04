import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import {Provider} from "./src/context/BlogContext"
import BlogContent from "./src/screens/BlogContent";
import CreateScreen from "./src/screens/CreateScreen";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    BlogContent:BlogContent,
    Create:CreateScreen
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
    <Provider>
      <App />
    </Provider>
  ) 
  
};

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';

const AppNavigator = createStackNavigator({
  Home:HomeScreen
},{
  initialRouteName:"Home",
  defaultNavigationOptions:{
    title:"Blogs",
    headerTitleAlign:"center",
    headerTitleStyle:{
      color:"white"
    },
    headerStyle:{
      backgroundColor:"purple"
    }
  }
})

export default createAppContainer(AppNavigator)
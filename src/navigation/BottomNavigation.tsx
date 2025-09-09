import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../screen/Login";
import Posts from "../screen/Posts";
import CounterApp from "../screen/CounterApp";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Tab.Screen name="Posts" component={Posts} />
      <Tab.Screen name="CounterApp" component={CounterApp} />
    </Tab.Navigator>
  );
}

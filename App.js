import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Screens/Home';
import Category from './Screens/Category';

const Stack = createStackNavigator({
  Home,
  Category,
});

export default createAppContainer(Stack);

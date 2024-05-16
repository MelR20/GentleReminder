import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import HomeScreen from '../../Screens/HomeScreen';
import ListScreen from '../../Screens/ListScreen';
import colors from '../styles/colors';
import AddListScreen from '../../Screens/AddListScreen';

type RootStackParamList = {
  Home: undefined;
  List: undefined;
  AddList: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: 'Gentle Reminder',
        headerTransparent: true,
        headerBackTitle: 'Back',
        headerTintColor: colors.main,
        //headerBackTitleStyle: fontFamily,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="AddList" component={AddListScreen} />
    </Stack.Navigator>
  );
}

export type HomeScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;
export type ListScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'List'
>;
export type AddListScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'AddList'
>;

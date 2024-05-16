import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import HomeScreen from '../../Screens/HomeScreen';
import ListScreen from '../../Screens/ListScreen';
import colors from '../styles/colors';
import {Text, View} from 'react-native';

type RootStackParamList = {
  Home: undefined;
  List: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: '',
        headerTransparent: true,
        headerBackTitle: 'Back',
        headerTintColor: colors.main,
        //headerBackTitleStyle: fontFamily,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="List" component={ListScreen} />
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

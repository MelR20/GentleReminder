import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import HomeScreen from '../../Screens/HomeScreen';
import ListScreen from '../../Screens/ListScreen';
import colors from '../styles/colors';
import AddListScreen from '../../Screens/AddListScreen';
import AddButton from '../component/AddButton';
import ExpandableMenu from '../component/ExpandableMenu';

type RootStackParamList = {
  Home: undefined;
  List: {id: string};
  AddList: undefined;
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
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({headerRight: () => <ExpandableMenu />})}
      />
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="AddList" component={AddListScreen} />
    </Stack.Navigator>
  );
}
export type RootStackNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  any
>;

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

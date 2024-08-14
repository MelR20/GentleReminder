import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import HomeScreen from '../../Screens/HomeScreen';
import CollectionScreen from '../../Screens/CollectionScreen';
import colors from '../styles/colors';
import AddCollectionScreen from '../../Screens/AddCollectionScreen';
import AddButton from '../component/AddButton';
import ExpandableMenu from '../component/ExpandableMenu';

type RootStackParamCollection = {
  Home: undefined;
  Collection: {id: string};
  AddCollection: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamCollection>();

export default function Navigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Collection" component={CollectionScreen} />
      <Stack.Screen name="AddCollection" component={AddCollectionScreen} />
    </Stack.Navigator>
  );
}
export type RootStackNavigationProp = NativeStackNavigationProp<
  RootStackParamCollection,
  any
>;

export type HomeScreenNavigationProp = NativeStackScreenProps<
  RootStackParamCollection,
  'Home'
>;
export type CollectionScreenNavigationProp = NativeStackScreenProps<
  RootStackParamCollection,
  'Collection'
>;
export type AddCollectionScreenNavigationProp = NativeStackScreenProps<
  RootStackParamCollection,
  'AddCollection'
>;

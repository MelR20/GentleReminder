import {Button, Text, View} from 'react-native';
import { ListScreenNavigationProp } from '../main/navigation/Navigator';

export default function ListScreen({navigation}: ListScreenNavigationProp) {
  return (
    <View>
      <Text>ListScreen</Text>
      <Button title=" go Back " onPress={()=> navigation.goBack()}/>
    </View>
  );
}

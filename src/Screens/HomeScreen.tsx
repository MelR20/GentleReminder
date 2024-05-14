import {Button, Text, View} from 'react-native';
import {HomeScreenNavigationProp} from '../main/navigation/Navigator';

export default function Home({navigation}: HomeScreenNavigationProp) {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="go to list"
        onPress={() => {
          navigation.navigate('List');
        }}
      />
    </View>
  );
}

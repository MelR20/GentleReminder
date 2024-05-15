import {Button, StyleSheet, Text, View} from 'react-native';
import { ListScreenNavigationProp } from '../main/navigation/Navigator';
import colors from '../main/styles/colors';

export default function ListScreen({navigation}: ListScreenNavigationProp) {
  return (
    <View style={styles.container}>
      <Text>ListScreen</Text>
      <Button title=" go Back " onPress={()=> navigation.goBack()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.background,
    paddingLeft:16,
    paddingRight: 16,
  }
})
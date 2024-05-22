import {Button, StyleSheet, View} from 'react-native';
import {ListScreenNavigationProp} from '../main/navigation/Navigator';
import colors from '../main/styles/colors';
import spacing from '../main/styles/spacing';

export default function ListScreen({
  navigation,
  route,
}: ListScreenNavigationProp) {
  route.params.id;
  return (
    <View style={styles.container}>
      <Button title=" go Back " onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: spacing.xxl,
    paddingLeft: spacing.md,
    paddingRight: spacing.md,
  },
});

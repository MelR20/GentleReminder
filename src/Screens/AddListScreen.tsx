import {StyleSheet, View} from 'react-native';
import Title from '../main/component/Title';
import {AddListScreenNavigationProp} from '../main/navigation/Navigator';
import colors from '../main/styles/colors';
import spacing from '../main/styles/spacing';

export default function AddListScreen({navigation}: AddListScreenNavigationProp) {
  return (
    <View style={styles.container}>
      <Title label="This is the add screen" />
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

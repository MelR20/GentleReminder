import {StyleSheet, View} from 'react-native';
import Title from '../main/component/Title';
import {AddCollectionScreenNavigationProp} from '../main/navigation/Navigator';
import colors from '../main/styles/colors';
import spacing from '../main/styles/spacing';
import BackButton from '../main/component/BackButton';

export default function AddCollectionScreen({navigation}: AddCollectionScreenNavigationProp) {
  return (
    <View style={styles.container}>
       <BackButton/>
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

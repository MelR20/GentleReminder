import {StyleSheet, View} from 'react-native';
import {ListScreenNavigationProp} from '../main/navigation/Navigator';
import colors from '../main/styles/colors';
import spacing from '../main/styles/spacing';
import BackButton from '../main/component/BackButton';

export default function ListScreen({
  navigation,
  route,
}: ListScreenNavigationProp) {
  route.params.id;
  return (
    <View style={styles.container}>
      <BackButton onPress={() => navigation.goBack()}/>
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

import {Button, StyleSheet, Text, View} from 'react-native';
import {
  HomeScreenNavigationProp,
  RootStackNavigationProp,
} from '../main/navigation/Navigator';
import colors from '../main/styles/colors';
import Title from '../main/component/Title';
import spacing from '../main/styles/spacing';
import ExpandableMenu from '../main/component/ExpandableMenu';

export default function Home({navigation}: HomeScreenNavigationProp) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Title label="Gentle Reminder" />
      </View>
      <Button
        title="go to list"
        onPress={() => {
          navigation.navigate('List', {id: 'test'});
        }}
      />
      <ExpandableMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingLeft: spacing.md,
    paddingRight: spacing.md,
    alignItems: 'center',
  },
  titleContainer: {
    margin: spacing.md,
    paddingTop: spacing.xl,
    justifyContent: 'center',
  },
});

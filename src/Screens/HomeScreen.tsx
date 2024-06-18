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
        <ExpandableMenu />
      </View>
      <Button
        title="go to list"
        onPress={() => {
          navigation.navigate('List', {id: 'test'});
        }}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingLeft: spacing.xs,
    paddingRight: spacing.xs,

  },
  titleContainer: {
    paddingTop: spacing.lg,
    margin: spacing.sm,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

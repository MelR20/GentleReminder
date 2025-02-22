import {Button, StyleSheet, Text, View} from 'react-native';
import {
  HomeScreenNavigationProp,
  RootStackNavigationProp,
} from '../main/navigation/Navigator';
import colors from '../main/styles/colors';
import Title from '../main/component/Title';
import spacing from '../main/styles/spacing';
import ExpandableMenu from '../main/component/ExpandableMenu';

import {useContext} from 'react';

import {ListContext} from '../main/Contexts/ListContext';

export default function Home({navigation}: HomeScreenNavigationProp) {
  const {collections, setCollections} = useContext(ListContext);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Title label="Gentle Reminder" />
        <ExpandableMenu />
      </View>

      <View>
        {collections.map(collection => (
          <View>
            <Text>{collection.label}</Text>
            <View style={{marginLeft: 8}}>
              {collection.reminders.map(reminder => (
                <Text>{reminder.label}</Text>
              ))}
            </View>
          </View>
        ))}
      </View>

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
    zIndex: 9999,
    paddingTop: spacing.lg,
    margin: spacing.sm,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

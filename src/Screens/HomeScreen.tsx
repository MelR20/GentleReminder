import {Pressable, StyleSheet, Text, View} from 'react-native';
import {RootStackNavigationProp} from '../main/navigation/Navigator';
import colors from '../main/styles/colors';
import Title from '../main/component/Title';
import spacing from '../main/styles/spacing';
import ExpandableMenu, {MenuActions} from '../main/component/ExpandableMenu';

import {useContext} from 'react';

import {CollectionContext} from '../main/Contexts/CollectionContext';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const {collections, setCollections} = useContext(CollectionContext);
  const navigation = useNavigation<RootStackNavigationProp>();
  const options: MenuActions[] = [
    {
      onPress: () => navigation.navigate('AddCollection'),
      label: 'New Collection',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Title label="Gentle Reminder" />
        <ExpandableMenu options={options} />
      </View>

      <View>
        {collections.map(collection => (
          <View key={collection.id}>
            <Pressable
              onPress={() => {
                navigation.navigate('Collection', {id: collection.id});
              }}>
              <Text>{collection.label}</Text>
            </Pressable>
            <View style={{marginLeft: 8}}>
              {collection.reminders.map(reminder => (
                <Text key={reminder.id}>{reminder.label}</Text>
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

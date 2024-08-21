import {Pressable, StyleSheet, Text, View} from 'react-native';
import {CollectionScreenNavigationProp} from '../main/navigation/Navigator';
import colors from '../main/styles/colors';
import spacing from '../main/styles/spacing';
import BackButton from '../main/component/BackButton';
import {useContext} from 'react';
import {CollectionContext} from '../main/Contexts/CollectionContext';
import AddButton from '../main/component/AddButton';
import Title from '../main/component/Title';

export default function CollectionScreen({
  navigation,
  route,
}: CollectionScreenNavigationProp) {
  route.params.id;
  const {collections, setCollections} = useContext(CollectionContext);
  const collection = collections.find(
    collection => collection.id === route.params.id,
  );
  if (collection) {
    return (
      <View>
        <BackButton />
        <Title label={collection?.label} />
        <AddButton
          onPress={() => {
            console.log("ouvrir la modale d'ajout");
          }}
          label="New Reminder"
        />

        {collection?.reminders.map(reminder => (
          <Text key={reminder.id}>{reminder.label}</Text>
        ))}
      </View>
    );
  } else {
    return (
    <View>
      <BackButton />
      <Text>Oups, no collection found</Text>;
    </View>
    )
  }
}

const styles = StyleSheet.create({});

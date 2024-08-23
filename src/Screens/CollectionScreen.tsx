import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {CollectionScreenNavigationProp} from '../main/navigation/Navigator';
import colors from '../main/styles/colors';
import spacing from '../main/styles/spacing';
import BackButton from '../main/component/BackButton';
import {useContext, useState} from 'react';
import {CollectionContext} from '../main/Contexts/CollectionContext';
import AddButton from '../main/component/AddButton';
import Title from '../main/component/Title';
import ReminderItem, { Reminder } from '../main/component/ReminderItem';

export default function CollectionScreen({
  navigation,
  route,
}: CollectionScreenNavigationProp) {
  route.params.id;
  const {collections, setCollections} = useContext(CollectionContext);
  const collection = collections.find(
    collection => collection.id === route.params.id,
  );
  const [addReminderVisible, setaddReminderVisible] = useState(false);
  const [reminderText, onChangeReminderText] = useState('');

  const save = () => {
    if (reminderText != '') {
      const newReminder: Reminder = {
        id: collection!.reminders.length + 1,
        label: reminderText,
        startDate: new Date(),
        expirationDate: new Date(),
      };
      collection?.reminders.push(newReminder);
      onChangeReminderText('');
    }
  };

  if (collection) {
    return (
      <View>
        <BackButton />
        <Title label={collection?.label} />
        <View>
          {addReminderVisible && (
            <View style={styles.addContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Insert new reminder"
                onChangeText={onChangeReminderText}
                onSubmitEditing={() => save()}
                value={reminderText}
              />
              <AddButton onPress={() => save()} icon="S" />
              <AddButton
                onPress={() => {
                  onChangeReminderText('');
                  setaddReminderVisible(!addReminderVisible);
                }}
                icon="X"
              />
            </View>
          )}

          <AddButton
            onPress={() => {
              setaddReminderVisible(!addReminderVisible);
            }}
            label="New Reminder"
          />
        </View>

        {collection?.reminders.map(reminder => (
          // <Text key={reminder.id}>{reminder.label}</Text>
          <ReminderItem{...reminder} />
        ))}
      </View>
    );
  } else {
    return (
      <View>
        <BackButton />
        <Text>Oups, no collection found</Text>;
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addContainer: {
    borderRadius: 20,
    // backgroundColor: colors.secondary,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    flex: 1,
    height: spacing.xl,
    backgroundColor: colors.accent,
    borderRadius: 20,
    padding: spacing.sm,
  },
});

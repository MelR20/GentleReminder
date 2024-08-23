import {Pressable, StyleSheet, Text, View} from 'react-native';
import ExpandableMenu, { MenuActions } from './ExpandableMenu';
import colors from '../styles/colors';

export type Reminder = {
  id: number;
  label: string;
  startDate: Date;
  expirationDate: Date;
};

const ReminderItem = (reminder: Reminder) => {
  const options: MenuActions[]=[
    {
        onPress: ()=>{console.log('Get info')},
        label: 'Info',
        icon: 'I'
    },
    {
        onPress:()=>{console.log('Edit')},
        label: 'Edit',
        icon: 'C'
    },
    {
        onPress: ()=>{console.log('Delete')},
        label: 'Delete',
        icon: 'D'
    }
  ]

  
  return (
    <View style={styles.reminderContainer}>
      <Pressable onLongPress={()=>{console.log('reset date')}} style={styles.button}>
        <Text>{reminder.label}</Text>
      </Pressable>
      <ExpandableMenu options={options} />
    </View>
  );
};

const styles = StyleSheet.create({
    reminderContainer: {
        backgroundColor: colors.secondary,
        margin: 10,
        borderRadius:20,
        padding: 12,
        alignContent:'center',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    button:{
      backgroundColor: colors.accent,
      flex: 1,
      justifyContent: 'center'

    }
});

export default ReminderItem;

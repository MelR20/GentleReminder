import {Pressable, StyleSheet, Text, View} from 'react-native';
import colors from '../styles/colors';
import {useState} from 'react';
import AddButton from './AddButton';
import spacing from '../styles/spacing';
import {
  AddListScreenNavigationProp,
  HomeScreenNavigationProp,
  RootStackNavigationProp,
} from '../navigation/Navigator';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const options = ['new item', 'list'];

const ExpandableMenu = ({}: Props) => {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => setOpen(!open)} style={styles.mainButton}>
        <Text>...</Text>
      </Pressable>
      {open && (
        <View style={styles.menu}>
          <View style={styles.itemContainer}>
            <Text style={styles.label}>Label</Text>
            <AddButton
              onPress={() => {
                setOpen(!open);
                navigation.navigate('AddList');
              }}
            />
          </View>
          <Pressable style={styles.itemContainer}>
            <Text style={styles.label}>Label</Text>
            <AddButton onPress={() => setOpen(!open)} />
          </Pressable>
          <View style={styles.itemContainer}>
            <Text style={styles.label}>Label</Text>
            <AddButton onPress={() => setOpen(!open)} />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
  },
  mainButton: {
    height: 44,
    width: 45,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 180,
  },
  menu: {
    alignItems: 'flex-end',
    top: spacing.md,
    position:'absolute',
    marginTop: spacing.xxl
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginRight: spacing.sm,
    color: colors.textDark,
    paddingLeft: spacing.xs,
    paddingRight: spacing.xs,
  },
});

export default ExpandableMenu;

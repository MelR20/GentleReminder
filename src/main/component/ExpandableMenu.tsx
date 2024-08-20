import {Pressable, StyleSheet, Text, View} from 'react-native';
import colors from '../styles/colors';
import {useState} from 'react';
import AddButton from './AddButton';
import spacing from '../styles/spacing';
import {RootStackNavigationProp} from '../navigation/Navigator';
import {useNavigation} from '@react-navigation/native';

type Props = {};

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
          <AddButton
            onPress={() => {
              setOpen(!open);
              navigation.navigate('AddCollection');
            }}
            label="New Collection"
          />
          <AddButton onPress={() => setOpen(!open)} label ="Edit Collection"/>
          <AddButton onPress={() => setOpen(!open)} label="Settings"/>
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
    position: 'absolute',
    marginTop: spacing.xxl,
  },
});

export default ExpandableMenu;

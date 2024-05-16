import {Pressable, StyleSheet, Text, View} from 'react-native';
import colors from '../styles/colors';
import fontSize from '../styles/fontSize';

type Props = {
  onPress: () => void;
};

const AddButton = ({onPress}: Props) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>+</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 44,
    width: 44,
    backgroundColor: colors.main,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 360,
  },

  text: {
    color: colors.background,
    fontSize: fontSize.extralarge,
  },
});

export default AddButton;

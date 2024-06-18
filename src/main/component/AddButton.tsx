import {Pressable, StyleSheet, Text, View} from 'react-native';
import colors from '../styles/colors';
import fontSize from '../styles/fontSize';
import spacing from '../styles/spacing';

type Props = {
  onPress: () => void;
  label?: string;
};

const AddButton = ({onPress, label}: Props) => {
  return (
    <Pressable style={styles.button} onPress={onPress
}>
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
    borderRadius: 180,
    marginBottom:spacing.sm,
  },

  text: {
    color: colors.background,
    fontSize: fontSize.extralarge,
  },
});

export default AddButton;

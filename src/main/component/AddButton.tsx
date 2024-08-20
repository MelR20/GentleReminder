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
    <View style={styles.itemContainer}>
      <Text style={styles.label}>{label}</Text>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
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

  buttonText: {
    color: colors.background,
    fontSize: fontSize.extralarge,
  },

  label: {
    marginRight: spacing.sm,
    color: colors.textDark,
    paddingLeft: spacing.xs,
    paddingRight: spacing.xs,
  },

  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default AddButton;

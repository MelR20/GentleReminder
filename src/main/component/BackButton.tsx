import {Pressable, StyleSheet, Text, View} from 'react-native';
import colors from '../styles/colors';
import spacing from '../styles/spacing';
import fontSize from '../styles/fontSize';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../navigation/Navigator';

const BackButton = () => {
  const navigation = useNavigation<RootStackNavigationProp>()
  return (
      <Pressable style={styles.button} onPress={()=> navigation.goBack()}>
        <Text style={styles.text}>Back</Text>
      </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 20,
    width: 60,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: spacing.sm,
  },

  text: {
    color: colors.textDark,
    fontSize: fontSize.regular,
  },
});

export default BackButton;

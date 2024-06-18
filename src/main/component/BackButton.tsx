import { Pressable, StyleSheet, Text } from "react-native";
import colors from "../styles/colors";
import spacing from "../styles/spacing";
import fontSize from "../styles/fontSize";


type Props = {
    onPress: () => void;
  };

const BackButton = ({onPress}:Props) => {
    return(
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>Back</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
  button: {
    height: 20,
    width: 60,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom:spacing.sm,
  },

  text: {
    color: colors.textDark,
    fontSize: fontSize.regular,
  },
}); 

export default BackButton;
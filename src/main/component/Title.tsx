import { StyleSheet, Text } from "react-native"
import colors from "../styles/colors"
import fontSize from "../styles/fontSize"


type Props ={
    label:string
}

const Title = (props:Props)=>{
    return(
        <Text style={styles.title}>{props.label}</Text>
    )
}

const styles = StyleSheet.create({
    title:{
        color:colors.main,
        fontSize: fontSize.extralarge,
    }
})

export default Title;
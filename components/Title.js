import { StyleSheet, Text } from "react-native";
import { Colors } from "../constants/colors";

const Title = (props) => {
  return (
    <Text style={styles.gameScreenTitle}>
      {props.children}
      </Text>
  )
}

export default Title
const styles = StyleSheet.create({
   gameScreenTitle: {
    fontSize:40,
    fontWeight:'bold',
    color:Colors.sec800,
    textAlign:'center',
    borderWidth:2,
    borderColor:Colors.sec800,
    borderRadius:8
  }
});
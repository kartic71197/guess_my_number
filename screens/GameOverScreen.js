import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import { Colors } from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";

const GameOverScreen = (props) => {
  return (
    <View style={styles.container}>
      <Title>Game over</Title>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/images/success.png")} style={styles.image}></Image>
      </View>
      <Text style={ styles.finalMessage}>Your Phone took <Text  style={ styles.result}>{props.guessRounds}</Text> rounds to guess Correct number.</Text>
      <PrimaryButton onPress={props.startNewGameHandler}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingVertical:80,
    paddingHorizontal:20,
    flexDirection: "col",
    justifyContent:'center',
    // alignItems:'center',
  },
  image: {
    width:'100%',
    height:'100%',
  },
  imageContainer: {
    width:300,
    height:300,
    borderRadius:200,
    borderWidth:3,
    borderColor:Colors.sec700,
    overflow:'hidden',
    margin:36
  },
  finalMessage:{
    fontSize:24,
    color:'white',
    textAlign:'center',
    marginBottom:30
  },
  result:{
    color:Colors.primary500,
  }
});

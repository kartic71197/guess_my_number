import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";

let min = 1;
let max = 100;

const GameScreen = (props) => {
  const intialGuess = generateRandom(1, 100, props.userNumber);
  const [currentGuess, setCurrentGuess] = useState(intialGuess);

  useEffect(() => {
    if (currentGuess === props.userNumber) {
      props.gameOverHandler();
    }
  }, [currentGuess, props.userNumber, props.gameOverHandler]);

  useEffect(() => {
    min = 1;
    max = 100;
  }, []);

  function generateRandom(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) return generateRandom(min, max, exclude);
    else return rndNum;
  }

  function nextGuess(dir) {
    if (props.userNumber == currentGuess) {
      return true;
    }
    props.setguessRounds( prev => prev+1);
    if (
      (dir == "lower" && currentGuess < props.userNumber) ||
      (dir == "higher" && currentGuess > props.userNumber)
    ) {
      Alert.alert("False Lead!", "Only enter correct lower or higher value.", [
        { text: "Sorry", style: "destructive" },
      ]);
      return false;
    }
    if (dir === "lower") {
      max = currentGuess;
    } else if (dir === "higher") {
      min = currentGuess + 1;
    }
    const randomNumber = generateRandom(min, max, currentGuess);
    setCurrentGuess(randomNumber);
  }
  return (
    <View style={styles.gameScreen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View style={styles.guessButtons}>
        <View style={styles.guessButton}>
          <PrimaryButton onPress={() => nextGuess("lower")}>
            Lower
          </PrimaryButton>
        </View>
        <View style={styles.guessButton}>
          <PrimaryButton onPress={() => nextGuess("higher")}>
            Higher
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  gameScreen: {
    flex: 1,
    paddingVertical: 80,
    paddingHorizontal: 20,
  },
  guessButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 6,
  },
  guessButton: {
    flex: 1,
  },
});

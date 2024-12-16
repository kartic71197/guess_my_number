import { StatusBar } from "expo-status-bar";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import { Colors } from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState();
  const [guessRounds, setguessRounds] = useState(0);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }
  function gameOverHandler(numberOfRounds) {
    setGameOver(true);
  }
  function startNewGameHandler() {
    setUserNumber();
    setGameOver(false);
    setguessRounds(0);
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} gameOverHandler={gameOverHandler} setguessRounds={setguessRounds}/>;
  }
  if (gameOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} startNewGameHandler={startNewGameHandler} guessRounds={guessRounds}/>;
  }
  return (
    <LinearGradient colors={[Colors.primary600, Colors.sec700]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView  style={styles.rootScreen}>
          <StatusBar style="dark" />
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
});

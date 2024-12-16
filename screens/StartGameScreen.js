import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Title from "../components/Title";
import { Colors } from "../constants/colors";

const StartGameScreen = (props) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  function numberInputHandler(value) {
    setEnteredNumber(value);
  }
  function resetNumberHandler() {
    setEnteredNumber("");
  }
  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Entered number should be between 0 and 100",
        [{ text: "Okay", style: "destructive", onPress: resetNumberHandler }]
      );
      return false;
    }
    props.onPickNumber(chosenNumber);
  }
  return (
    <View style={styles.inputContianerOuter}>
      <Title>Enter the number</Title>
      <View style={styles.inputContianerInner}>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        ></TextInput>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContianerOuter: {
    flex:1,
    paddingVertical:80,
    paddingHorizontal:20,
    flexDirection: "col",
  },
  inputContianerInner: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 20,
    borderRadius: 8,
    backgroundColor: Colors.sec600,
    elevation: 4, //shadow for android only - no equavalent on IOS
    shadowColor: "black", //shadow for IOS
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    flexDirection: "col",
    alignItems: "center",
  },
  numberInput: {
    height: 60,
    fontSize: 42,
    borderBottomColor: Colors.primary500,
    borderBottomWidth: 2,
    color: Colors.primary500,
    marginVertical: 8,
    fontWeight: "bold",
    padding: 12,
    width: 70,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;

import { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Colors } from "../constants/colors";

const PrimaryButton = (props) => {
  const [isPressed, setIsPresses] = useState(false);
  function pressHandler() {
    setIsPresses(true);
    props.onPress();
    setTimeout(() => {
      setIsPresses(false);
    }, 100);
  }
  return (
    <Pressable
      onPress={pressHandler} //android_ripple can be use but it is android specific
    >
      <View style={[styles.buttonContainer, isPressed && styles.buttonPressed]}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: Colors.primary500,
    textAlign: "center",
  },
  buttonContainer: {
    backgroundColor: Colors.sec500,
    borderRadius: 28,
    paddingVertical: 12,
    paddingHorizontal: 18,
    margin: 4,
    width: "100%",
  },
  buttonPressed: {
    opacity: 0.5,
  },
});

export default PrimaryButton;

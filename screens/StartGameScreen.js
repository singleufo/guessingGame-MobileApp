import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  useWindowDimensions,
} from "react-native";
import PrimaryBtn from "../components/UI/PrimaryBtn";
import Colors from "../utils/colors";
import Title from "../components/UI/Title";
import { Text } from "react-native";
import Card from "../components/UI/Card";

const StartGameScreen = ({ onStart }) => {
  const [enteredNum, setEnteredNum] = useState("");
  const { width, height } = useWindowDimensions();

  const confirmInput = () => {
    const chosenNum = parseInt(enteredNum);

    if (isNaN(chosenNum) || chosenNum > 99 || chosenNum <= 0) {
      Alert.alert(
        "Invalid number",
        "Number has to be a number between 1 and 99",
        [{ text: "Ok", style: "destructive", onPress: () => setEnteredNum("") }]
      );
      return;
    }

    console.log("Valid number");
    onStart(enteredNum);
  };

  const marginTop = height < 380 ? 30 : 100;

  return (
    <ScrollView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
        <View style={[styles.screenContainer, { marginTop: marginTop }]}>
          <Title>Guess Number Game</Title>
          <Card>
            <Text style={styles.titletext}>Enter a number</Text>
            <TextInput
              style={styles.inpElement}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={enteredNum}
              onChangeText={(num) => setEnteredNum(num)}
            />

            <View style={styles.btnContainer}>
              <View style={{ flex: 1 }}>
                <PrimaryBtn>Reset</PrimaryBtn>
              </View>
              <View style={{ flex: 1 }}>
                <PrimaryBtn onPress={confirmInput}>Confirm</PrimaryBtn>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  inpElement: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    color: Colors.accent500,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },

  titletext: {
    fontSize: 24,
    color: Colors.accent500,
    fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },
});

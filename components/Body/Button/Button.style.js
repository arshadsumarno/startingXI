import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  button: (value, currentFormation) => ({
    height: 45,
    width: 65,
    backgroundColor: value === currentFormation ? '#F5F5F5' : 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  }),
  buttonText: (value, currentFormation) => ({
    fontSize: 25,
    fontFamily: 'League-Spartan',
    color: value === currentFormation ? '#DC4C4C' : '#F5F5F5',
  }),
});

export default style;
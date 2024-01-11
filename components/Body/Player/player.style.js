import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  playerDot: (id, color, border) => ({
    width: 55,
    height: 55,
    borderRadius: 50,
    backgroundColor: id === '0' ? '#47474B' : color,
    borderColor: id === '0' ? '#F5F5F5' : border,
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  playerNumber: (id, color) => ({
    color: (color === '#F5F5F5' || color === '#C9F460') ? (id === '0') ? '#F5F5F5' : '#47474B' : '#F5F5F5',
    fontSize: 35,
    fontFamily: 'League-Spartan',
    marginTop: 5,
  }),
  playerNameContainer: {
    width: 90,
  },
  playerName: {
    textAlign: 'center',
    color: '#47474B',
    marginTop: 5,
    fontSize: 16,
    fontFamily: 'League-Spartan',
  },
});

export default style;
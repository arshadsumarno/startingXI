import { Dimensions, StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 7,
    height: 150,
    backgroundColor: "#5EBD5C",
    alignItems: 'center',
    justifyContent: 'center',
  },
  teamNameContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  teamNameBox: {
    width: '90%',
    height: '70%',
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  teamNameText: {
    width: '100%',
    textAlign: 'center',
    fontFamily: 'League-Spartan',
    fontSize: 30,
    color: '#47474B',
  },
  pitchContainer: {
    flex: 9,
    width: '95%',
  },
  icon: {
    height: (Dimensions.get('screen').height) * 0.7,
    width: (Dimensions.get('screen').width) * 0.9,
    alignSelf: 'center',
  },
  buttonContainer: {
    flex: 1,
    width: '90%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: '5%',
  },  
});

export default style;
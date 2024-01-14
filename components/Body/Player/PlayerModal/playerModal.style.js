import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsContainer: {
    width: '95%',
    height: '60%',
    marginBottom: '25%',
  },
  header: {
    flex: 1,
    backgroundColor: '#60AE5F',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#F5F5F5', 
    fontSize: 40, 
    fontFamily: 'League-Spartan',
  },
  body: {
    flex: 4,
    backgroundColor: '#5EBD5C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  player: (id, color, border) => ({
    width: 220,
    height: 220,
    borderRadius: 200,
    backgroundColor: id === '0' ? '#47474B' : color,
    borderColor: id === '0' ? '#F5F5F5' : border,
    borderWidth: 13,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  numberTextInput: (id, color) => ({
    width: '100%',
    height: '100%',
    marginTop: '15%',
    textAlign: 'center',
    fontFamily: 'League-Spartan',
    fontSize: 140,
    color: (color === '#F5F5F5' || color === '#C9F460') ? (id === '0') ? '#F5F5F5' : '#47474B' : '#F5F5F5',
  }),
  textInputContainer: {
    width: '75%',
    height: '15%',
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '8%',
  },
  nameTextInput: {
    width: '100%',
    textAlign: 'center',
    fontFamily: 'League-Spartan',
    fontSize: 30,
    color: '#47474B',
  },
  exit: {
    flex: 1,
    backgroundColor: '#60AE5F',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    width: '40%',
    height: '60%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20, 
    fontFamily: 'League-Spartan',
  },
});

export default style;
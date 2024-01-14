import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsContainer: {
    width: '90%',
    height: '35%',
    marginBottom: '15%',
  },
  header: {
    flex: 1,
    backgroundColor: '#60AE5F',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headerText: {
    textAlign: "center",
    color: "#F5F5F5",
    fontSize: 40,
    fontFamily: "League-Spartan",
  },
  body: {
    flex: 3,
    backgroundColor: '#5EBD5C',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  text: {
    color: '#F5F5F5', 
    fontSize: 30, 
    fontFamily: 'League-Spartan',
    marginTop: '5%',
    marginLeft: '5%',
  },
  scroll: {
    width: '90%',
    alignSelf: 'center',
  },
  border: (color, item) => ({
    width: 44,
    height: 44,
    borderRadius: 50,
    backgroundColor: color === item ? color : 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
  }),
  button: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderColor: '#F5F5F5',
    borderWidth: 2,
  },
  borderButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 2,
  },
});

export default style;
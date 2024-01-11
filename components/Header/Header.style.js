import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#60AE5F',
    justifyContent: 'center',
  },
  container: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '10%',
  },
  headerText: {
    width: '65%',
    marginTop: '1%',
    textAlign: 'center',
    color: '#F5F5F5',
    fontSize: 45,
    fontFamily: 'League-Spartan',
  },
  icon: {
    height: 35,
    width: 35,
  },
});

export default style;
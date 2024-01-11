import { Text, TouchableOpacity } from "react-native";

import style from "./Button.style";

const Button = ({ value, currentFormation, setCurrentFormation }) => {
  const changeFormation = (newFormation) => {
    setCurrentFormation(newFormation);
  };

  return (
    <TouchableOpacity
      style={style.button(value, currentFormation)}
      onPress={() => changeFormation(value)}
    >
      <Text style={style.buttonText(value, currentFormation)}>{value}</Text>
    </TouchableOpacity>
  );
};

export default Button;

import { useCallback } from "react";
import { Text, TouchableOpacity } from "react-native";

import style from "./Button.style";

const Button = ({ value, currentFormation, setCurrentFormation }) => {
  const changeFormation = useCallback(
    (newFormation) => {
      setCurrentFormation(newFormation);
    },
    [setCurrentFormation]
  );

  const onPressHandler = useCallback(() => {
    changeFormation(value);
  }, [value, changeFormation]);

  return (
    <TouchableOpacity
      style={style.button(value, currentFormation)}
      onPress={onPressHandler}
    >
      <Text style={style.buttonText(value, currentFormation)}>{value}</Text>
    </TouchableOpacity>
  );
};

export default Button;

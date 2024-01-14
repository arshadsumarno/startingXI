import { View, Text, Animated, Easing, TouchableOpacity } from "react-native";
import { useEffect, useRef, useContext } from "react";

import ColorContext from "../../MainSection/ColorContext.js";
import style from "./player.style.js";

const Player = ({ id, name, number, xPos, yPos, onPress }) => {
  const moveAnim = useRef(new Animated.ValueXY({ x: xPos, y: yPos })).current;
  const { color, border } = useContext(ColorContext);

  useEffect(() => {
    Animated.timing(moveAnim, {
      toValue: { x: xPos, y: yPos },
      duration: 400,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [xPos, yPos]);

  return (
    <Animated.View
      style={{
        position: "absolute",
        transform: moveAnim.getTranslateTransform(),
        alignItems: "center",
        width: 80,
        height: 75,
      }}
    >
      <TouchableOpacity
        style={style.playerDot(id, color, border)}
        onPress={onPress}
      >
        <Text style={style.playerNumber(id, color)}>{number}</Text>
      </TouchableOpacity>
      <View style={style.playerNameContainer}>
        <Text style={style.playerName} numberOfLines={2}>
          {name}
        </Text>
      </View>
    </Animated.View>
  );
};

export default Player;

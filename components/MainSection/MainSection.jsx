import { View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useState, useCallback } from "react";

import style from "./MainSection.style";
import Header from "../Header/Header";
import Body from "../Body/Body";

SplashScreen.preventAutoHideAsync();

const MainSection = () => {
  const [color, setColor] = useState("#DC4C4C");
  const [borderColor, setBorderColor] = useState("#F5F5F5");

  const [fontsLoaded, fontError] = useFonts({
    "League-Spartan": require("../../assets/fonts/LeagueSpartan-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={style.container} onLayout={onLayoutRootView}>
      <Header
        color={color}
        setColor={setColor}
        borderColor={borderColor}
        setBorderColor={setBorderColor}
      />
      <Body color={color} borderColor={borderColor} />
    </View>
  );
};

export default MainSection;

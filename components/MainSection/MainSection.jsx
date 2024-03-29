import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useMemo, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import Body from "../Body/Body";
import Header from "../Header/Header";
import ColorContext from "./ColorContext";

SplashScreen.preventAutoHideAsync();

const MainSection = () => {
  const [color, setColor] = useState("#DC4C4C");
  const [border, setBorder] = useState("#F5F5F5");
  const contextValue = useMemo(() => {
    return { color, setColor, border, setBorder };
  }, [color, border]);

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
    <ColorContext.Provider value={contextValue}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={style.container} onLayout={onLayoutRootView}>
          <Header />
          <Body />
        </View>
      </TouchableWithoutFeedback>
    </ColorContext.Provider>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5EBD5C",
    justifyContent: "center",
  },
});

export default MainSection;

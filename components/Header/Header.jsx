import { View, Text, Image, TouchableOpacity } from "react-native";

import style from "./Header.style.js";
import { useState } from "react";

import SettingsModal from "./SettingsModal/SettingsModal.jsx";

const Header = () => {
  const [openSettings, setOpenSettings] = useState(false);

  return (
    <View style={style.header}>
      <SettingsModal
        openSettings={openSettings}
        setOpenSettings={setOpenSettings}
      />

      <View style={style.container}>
        <Image
          style={{
            height: 50,
            width: 50,
          }}
          source={require("../../assets/icon-medium.png")}
        />
        <Text style={style.headerText}>startingXI</Text>
        <TouchableOpacity onPress={() => setOpenSettings(true)}>
          <Image
            style={style.icon}
            source={require("../../assets/settings.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

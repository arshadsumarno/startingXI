import { memo, useCallback, useContext } from "react";
import { Modal, Pressable, Text, View } from "react-native";

import ColorContext from "../../MainSection/ColorContext";
import ColorPicker from "./ColorPicker";
import style from "./settingsModal.style";

const colorList = [
  "#DC4C4C",
  "#FD804A",
  "#FFB11B",
  "#F4D760",
  "#C9F460",
  "#91E18F",
  "#326431",
  "#2C2C72",
  "#4141CD",
  "#9CC1F8",
  "#A692DF",
  "#7451D8",
  "#EB6EBB",
  "#763515",
  "#F5F5F5",
  "#47474B",
  "#A8A8AF",
  "#E1BD75",
];

const SettingsModal = ({ openSettings, setOpenSettings }) => {
  const { color, setColor, border, setBorder } = useContext(ColorContext);

  const handleRequestClose = useCallback(
    () => setOpenSettings(false),
    [setOpenSettings]
  );

  return (
    <Modal
      visible={openSettings}
      onRequestClose={handleRequestClose}
      animationType="fade"
      transparent={true}
    >
      <Pressable onPress={handleRequestClose} style={style.container}>
        <Pressable style={style.settingsContainer}>
          <View style={style.header}>
            <Text style={style.headerText}>Settings</Text>
          </View>
          <View style={style.body}>
            <View style={{ flex: 3 }}>
              <Text style={style.text}>Player Color</Text>
              <ColorPicker
                colorList={colorList}
                color={color}
                setColor={setColor}
                isBorder={false}
              />
            </View>
            <View style={{ flex: 3, marginBottom: "5%" }}>
              <Text style={style.text}>Player Border Color</Text>
              <ColorPicker
                colorList={colorList}
                color={border}
                setColor={setBorder}
                isBorder={true}
              />
            </View>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default memo(SettingsModal);

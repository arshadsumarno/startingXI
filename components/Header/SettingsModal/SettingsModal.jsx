import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Modal,
} from "react-native";

import style from "./settingsModal.style";

const SettingsModal = ({
  openSettings,
  setOpenSettings,
  color,
  setColor,
  borderColor,
  setBorderColor,
}) => {
  const colors = [
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

  return (
    <Modal
      visible={openSettings}
      onRequestClose={() => setOpenSettings(false)}
      animationType="fade"
      transparent={true}
    >
      <Pressable onPress={() => setOpenSettings(false)} style={style.container}>
        <Pressable style={style.settingsContainer}>
          <View style={style.header}>
            <Text
              style={{
                textAlign: "center",
                color: "#F5F5F5",
                fontSize: 40,
                fontFamily: "League-Spartan",
              }}
            >
              Settings
            </Text>
          </View>
          <View style={style.body}>
            <View style={{ flex: 3 }}>
              <Text style={style.text}>Player Color</Text>
              <ScrollView style={style.scroll} horizontal>
                {colors.map((item) => {
                  return (
                    <TouchableOpacity
                      key={item}
                      style={style.border(color, item)}
                      onPress={() => {
                        setColor(item);
                      }}
                    >
                      <View style={[style.button, { backgroundColor: item }]} />
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
            <View style={{ flex: 3, marginBottom: "5%" }}>
              <Text style={style.text}>Player Border Color</Text>
              <ScrollView style={style.scroll} horizontal>
                {colors.map((item) => {
                  return (
                    <TouchableOpacity
                      key={item}
                      style={style.border(borderColor, item)}
                      onPress={() => {
                        setBorderColor(item);
                      }}
                    >
                      <View style={[style.button, { borderColor: item }]} />
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default SettingsModal;

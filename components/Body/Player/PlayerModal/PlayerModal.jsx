import { memo, useContext, useState } from "react";
import {
  Keyboard,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import ColorContext from "../../../MainSection/ColorContext";
import style from "./playerModal.style";

const PlayerModal = ({
  visible,
  onClose,
  onSubmit,
  initialName,
  initialNumber,
  id,
}) => {
  const [name, setName] = useState(initialName === "Name" ? "" : initialName);
  const [number, setNumber] = useState(initialNumber);
  const { color, border } = useContext(ColorContext);

  const handleSubmit = () => {
    onSubmit(name, number);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      animationType="fade"
      transparent={true}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={style.container}>
          <View style={style.settingsContainer}>
            <View style={style.header}>
              <Text style={style.headerText}>Edit Player</Text>
            </View>
            <View style={style.body}>
              <View style={style.player(id, color, border)}>
                <TextInput
                  value={number}
                  onChangeText={setNumber}
                  placeholder=""
                  keyboardType="number-pad"
                  style={style.numberTextInput(id, color)}
                  maxLength={2}
                />
              </View>
              <View style={style.textInputContainer}>
                <TextInput
                  value={name}
                  onChangeText={setName}
                  placeholder="Enter name"
                  placeholderTextColor="#C2C2C2"
                  style={style.nameTextInput}
                  autoCorrect={false}
                />
              </View>
            </View>
            <View style={style.exit}>
              <TouchableOpacity
                style={[style.button, { backgroundColor: "#F5F5F5" }]}
                onPress={onClose}
              >
                <Text style={[style.buttonText, { color: "#DC4C4C" }]}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[style.button, { backgroundColor: "#DC4C4C" }]}
                onPress={handleSubmit}
              >
                <Text style={[style.buttonText, { color: "#F5F5F5" }]}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default memo(PlayerModal);

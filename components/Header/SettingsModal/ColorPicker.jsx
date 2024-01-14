import { FlatList, TouchableOpacity, View, StyleSheet } from "react-native";
import { useCallback, memo } from "react";

const ColorButton = memo(
  ({ item, onPress, color, backgroundColor, borderColor }) => {
    const buttonStyle = { backgroundColor, borderColor };

    return (
      <TouchableOpacity
        key={item}
        style={styles.border(color, item)}
        onPress={onPress}
      >
        <View style={[styles.button, buttonStyle]} />
      </TouchableOpacity>
    );
  }
);

const ColorPicker = ({ colorList, color, setColor, isBorder }) => {
  const renderColorButton = useCallback(({ item }) => {
    const backgroundColor = isBorder ? "transparent" : item;
    const borderColor = isBorder ? item : "#F5F5F5";

    return (
      <ColorButton
        item={item}
        onPress={() => setColor(item)}
        color={color}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
      />
    );
  });

  return (
    <FlatList
      horizontal
      data={colorList}
      renderItem={renderColorButton}
      keyExtractor={(item) => item}
      extraData={color}
      style={styles.scroll}
    />
  );
};

const styles = StyleSheet.create({
  scroll: {
    width: "90%",
    alignSelf: "center",
    marginTop: "2%",
  },
  border: (color, item) => ({
    width: 44,
    height: 44,
    borderRadius: 50,
    backgroundColor: color === item ? color : "transparent",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
    marginRight: 5,
  }),
  button: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 2,
  },
  borderButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 2,
  },
});

export default memo(ColorPicker);

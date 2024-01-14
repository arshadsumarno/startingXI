import { View, TextInput, ImageBackground } from "react-native";

import { useState } from "react";

import style from "./Body.style.js";
import Button from "./Button/Button.jsx";
import Formation from "./Formation/Formation.jsx";

const Body = () => {
  const [currentFormation, setCurrentFormation] = useState("4231");
  const [teamName, setTeamName] = useState("");
  const values = ["4231", "433", "442", "352", "343"];

  return (
    <View style={style.container}>
      <View style={style.teamNameContainer}>
        <View style={style.teamNameBox}>
          <TextInput
            style={[style.teamNameText]}
            onChangeText={setTeamName}
            value={teamName}
            placeholder="My Team"
            placeholderTextColor={"#C2C2C2"}
            maxLength={20}
            autoCorrect={false}
          />
        </View>
      </View>

      <View style={style.pitchContainer}>
        <ImageBackground
          style={style.icon}
          resizeMode="stretch"
          source={require("../../assets/pitch-test.png")}
        >
          <Formation
            currentFormation={currentFormation}
            setCurrentFormation={setCurrentFormation}
          />
        </ImageBackground>
      </View>
      <View style={style.buttonContainer}>
        {values.map((value) => {
          return (
            <Button
              key={value}
              value={value}
              currentFormation={currentFormation}
              setCurrentFormation={setCurrentFormation}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Body;

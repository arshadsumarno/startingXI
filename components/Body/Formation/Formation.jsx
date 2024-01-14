import { Animated, Dimensions } from "react-native";
import { useState, useEffect } from "react";

import Player from "../Player/Player.jsx";
import PlayerModal from "../Player/PlayerModal/PlayerModal.jsx";
import formations from "./FormationData.jsx";

const Formation = ({ currentFormation }) => {
  const [players, setPlayers] = useState(formations[currentFormation]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingPlayer, setEditingPlayer] = useState(null);
  const [edited, setEdited] = useState(false);

  const handlePlayerPress = (player) => {
    setModalVisible(true);
    setEditingPlayer(player);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setEditingPlayer(null);
  };

  const handleModalSubmit = (name, number) => {
    setPlayers((currentPlayers) =>
      currentPlayers.map((p) =>
        p.key === editingPlayer.key ? { ...p, name, number } : p
      )
    );
    setEdited(true);
  };

  useEffect(() => {
    setPlayers((prevPlayers) => {
      return prevPlayers.map((player) => {
        const formationData = formations[currentFormation].find(
          (f) => f.key === player.key
        );

        if (formationData) {
          if (edited)
            return {
              ...player,
              xPos: formationData.xPos,
              yPos: formationData.yPos,
            };
          else
            return {
              ...player,
              name: formationData.name,
              xPos: formationData.xPos,
              yPos: formationData.yPos,
            };
        }

        return player;
      });
    });
  }, [currentFormation]);

  return (
    <Animated.View
      style={{
        position: "relative",
        width: Dimensions.get("screen").width * 0.9,
        height: Dimensions.get("window").height * 0.7,
      }}
    >
      {players.map((player) => (
        <Player
          key={player.key}
          id={player.key}
          name={player.name}
          number={player.number}
          xPos={player.xPos}
          yPos={player.yPos}
          onPress={() => handlePlayerPress(player)}
        />
      ))}
      {editingPlayer && (
        <PlayerModal
          visible={modalVisible}
          onClose={handleModalClose}
          onSubmit={handleModalSubmit}
          initialName={editingPlayer["name"]}
          initialNumber={editingPlayer["number"]}
          id={editingPlayer["key"]}
        />
      )}
    </Animated.View>
  );
};

export default Formation;

import { View, Text, StyleSheet } from "react-native";
import Colors from "../../utils/colors";

function GuessLogContainer({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

export default GuessLogContainer;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 40,
    borderWidth: 1,
    borderColor: Colors.primary800,
    padding: 12,
    marginVertical: 4,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});

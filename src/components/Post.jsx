import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

function Post({ item }) {
  const { url, date, name, user } = item;
  return (
    <View style={styles.itemContainer}>
      <ImageBackground
        source={{
          uri: url,
        }}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.date}>
          <Text style={styles.itemCode}>
            {new Date(date).toLocaleDateString()}
          </Text>
        </View>
        <View style={styles.desc}>
          <Text style={styles.itemName}>
            {name && name.length > 20
              ? name.substring(0, 18) + "..."
              : name || "Photo"}
          </Text>
          <Text style={styles.itemCode}>by {user}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: "flex-end",
    height: 200,
  },

  image: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  date: {
    padding: 5,
    color: "white",
  },
  desc: {
    backgroundColor: "rgba(161,21,207, 0.5)",
    opacity: 0.8,
    padding: 10,
    height: 50,
  },
  itemName: {
    fontSize: 16,
    color: "white",
    fontWeight: "600",
    fontWeight: "700",
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "white",
    fontWeight: "400",
  },
});

export default Post;

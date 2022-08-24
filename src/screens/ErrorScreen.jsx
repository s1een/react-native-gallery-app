import { StyleSheet, Text, ImageBackground, Button } from "react-native";

function ErrorScreen() {
  return (
    <ImageBackground
      source={{
        uri: "https://w0.peakpx.com/wallpaper/90/124/HD-wallpaper-error-404-error-glitch-modern-new-sharp.jpg",
      }}
      resizeMode="cover"
      style={styles.image}
    >
      <Text style={styles.text}>Oops, there's an error..</Text>
      <Button title="Fix it!" color="purple" />
    </ImageBackground>
  );
}

// Styles
const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  text: {
    color: "white",
    fontSize: 20,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ErrorScreen;

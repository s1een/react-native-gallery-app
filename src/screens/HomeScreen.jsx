import { useState } from "react";
import ErrorScreen from "./ErrorScreen";
import { changePage } from "../redux/actions";
import Dots from "react-native-dots-pagination";
import PostsList from "../components/PostsList";
import { useDispatch, useSelector } from "react-redux";
import { StatusBar, StyleSheet, View, Button } from "react-native";

function HomeScreen({ navigation }) {
  // Current Page
  const page = useSelector((state) => state.appReducer.page);
  // Is Error
  const error = useSelector((state) => state.appReducer.error);
  // View mode
  const [grid, setGrid] = useState(false);
  const dispatch = useDispatch();

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar theme="auto" animated={true} />
      <View style={styles.fixToText}>
        <Button
          color="rgba(161,21,207, 1)"
          title="Card View"
          onPress={() => setGrid(false)}
        />
        <Button
          color="rgba(161,21,207, 1)"
          title="Grid View"
          onPress={() => setGrid(true)}
        />
      </View>
      <PostsList navigation={navigation} page={page} grid={grid} />
      <View style={styles.fixToText}>
        <Button
          color="rgba(161,21,207, 1)"
          disabled={page <= 1}
          title="Prev Page"
          onPress={() => dispatch(changePage(false))}
        />
        <Dots
          length={10}
          activeColor={"rgba(161,21,207, 0.5)"}
          active={page - 1}
        />
        <Button
          color="rgba(161,21,207,1)"
          title="Next Page"
          onPress={() => dispatch(changePage(true))}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: 5,
  },
});
export default HomeScreen;

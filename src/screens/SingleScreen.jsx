import axios from "axios";
import ErrorScreen from "./ErrorScreen";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import {
  cancelError,
  loadingEnd,
  loadingStart,
  setError,
} from "../redux/actions";

function SingleScreen({ route, navigation }) {
  const [photo, setPhoto] = useState({
    url: "",
    title: "",
    author: "",
  });
  const { id, title } = route.params;
  const error = useSelector((state) => state.appReducer.error);
  const loader = useSelector((state) => state.appReducer.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    navigation.setOptions({
      title: title || "Photo",
    });
    dispatch(loadingStart());
    fetchPost();
    dispatch(loadingEnd());
  }, [id]);

  async function fetchPost() {
    dispatch(cancelError());
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/${id}?client_id=rrX4OhnV0ZM0HXepM-WPOptexo4d9TEMi1TjRv_R4k0`
      );
      const data = response.data;
      setPhoto((prev) => {
        return {
          ...prev,
          url: data.urls.regular,
          title: data.description,
          author: data.user.username,
        };
      });
    } catch (error) {
      console.log(error);
      dispatch(setError());
    }
  }

  if (loader) {
    return <Loading />;
  }
  if (error) {
    return <ErrorScreen />;
  }
  return (
    <ImageBackground
      source={{ uri: photo.url }}
      resizeMode="cover"
      style={styles.image}
    ></ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

export default SingleScreen;

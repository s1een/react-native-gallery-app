import { useEffect } from "react";
import Post from "../components/Post";
import Loading from "../components/Loading";
import { FlatGrid } from "react-native-super-grid";
import { useSelector, useDispatch } from "react-redux";
import { postsLoad, resetPage } from "../redux/actions";
import { TouchableOpacity, RefreshControl, FlatList } from "react-native";

function PostsList({ page, navigation, grid }) {
  const dispatch = useDispatch();
  // Get Photo List
  const photos = useSelector((state) => state.appReducer.photo);
  // Is Loading?
  const loader = useSelector((state) => state.appReducer.loading);

  useEffect(() => {
    dispatch(postsLoad(page));
  }, [page]);

  if (loader) {
    return <Loading />;
  }

  if (grid) {
    return (
      <FlatGrid
        itemDimension={130}
        data={photos}
        refreshControl={
          <RefreshControl
            refreshing={loader}
            onRefresh={() => dispatch(dispatch(resetPage()))}
          />
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("Photo", { id: item.id, title: item.name })
            }
          >
            <Post item={item} />
          </TouchableOpacity>
        )}
      />
    );
  }

  return (
    <FlatList
      data={photos}
      refreshControl={
        <RefreshControl
          refreshing={loader}
          onRefresh={() => dispatch(dispatch(resetPage()))}
        />
      }
      renderItem={({ item }) => (
        <TouchableOpacity
          key={item.id}
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate("Photo", { id: item.id, title: item.name })
          }
        >
          <Post item={item} />
        </TouchableOpacity>
      )}
    />
  );
}

export default PostsList;

### About

- This React Native application was created as a result of a test task for QuliSoft IT company.
- This application is designed to view pictures from Unsplash.
- App can be tested by [QR-code](https://expo.dev/@r3ason_why/react-photo-app "QR-code")

# React Native App

![](https://pagepro.co/blog/wp-content/uploads/2021/05/ReactNativepicture.png)

## Technologies required for application:

> - React Native
>- Redux + Async Redux library (redux-thunk, redux-saga, e.g.) es6 (JS) or TypeScript
>- Flexbox
>- React Navigation
>- fetch or axios

  Suggested technologies for use:
>- Hooks
>- High Order Components
>- render props
>- ref

## React Native

The app was built in React Native using Expo GO.

`$ npx create-expo-app react-photo-app`

## Redux + Async Redux library

Creating a store:

```javascript
import React from "react";
import thunk from "redux-thunk";
import PhotoApp from "./src/PhotoApp";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./src/redux/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));
function App() {
  return (
    <Provider store={store}>
      <PhotoApp />
    </Provider>
  );
}

export default App;
```

Async Redux:

```javascript
// Fetch Posts
export function postsLoad(page) {
  return async (dispatch) => {
    dispatch(cancelError());
    try {
      dispatch(loadingStart());
      const response = await axios.get(
        `https://api.unsplash.com/photos/?page=${
          page || 1
        }&client_id=${API_KEY}`
      );
      dispatch({
        type: LOAD_PHOTO_LIST,
        data: response.data,
      });
      dispatch(loadingEnd());
    } catch (error) {
      console.log(error);
      dispatch(setError());
    }
  };
}
```

## React Navigation

```javascript
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ErrorScreen from "./ErrorScreen";
import HomeScreen from "./HomeScreen";
import SingleScreen from "./SingleScreen";

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Photo"
          component={SingleScreen}
          options={{ title: "Photo Post" }}
        />
        <Stack.Screen
          name="Error"
          component={ErrorScreen}
          options={{ title: "Oops, there's an error.." }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
```

## Hooks

Using Hooks:

```javascript
// Current Page
const page = useSelector((state) => state.appReducer.page);
// Is Error
const error = useSelector((state) => state.appReducer.error);
// View mode
const [grid, setGrid] = useState(false);
const dispatch = useDispatch();
```

More Hooks:

```javascript
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
```

## Application

### Home Screen:

![](https://github.com/s1een/react-native-gallery-app/blob/master/img/home.jpg?raw=true)

### Home Screen Grid:

![](https://github.com/s1een/react-native-gallery-app/blob/master/img/home_nogrid.jpg?raw=true)

### Single Photo Screen:

![](https://github.com/s1een/react-native-gallery-app/blob/master/img/single.jpg?raw=true)

## My Links
[My LinkedIn](https://www.linkedin.com/in/dmitry-morozov-082288228/ "My LinkedIn")

[My Telegram](https://t.me/r3ason_why "My Telegram")

[My Portfolio](https://s1een.github.io/my_cv_site/ "My Portfolio")

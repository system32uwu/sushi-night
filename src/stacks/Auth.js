import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { Text, Avatar, Button } from "react-native-paper";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import React, { useContext } from "react";
import { openBrowserAsync } from "expo-web-browser";
import { AuthContext } from "../providers/AuthProvider";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Login = () => {
  const { login } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Avatar.Image source={require("../static/logo.png")} size={350} />
      <Text style={{ fontSize: 20, padding: 4, textAlign: "center", color:"white" }}>
        Welcome to Sushi Night, watch anime and keep your list synced as you do.
      </Text>
      <Button
        mode="outlined"
        style={{ alignSelf: "center", marginTop: 20 }}
        onPress={() => login()}
      >
        <Text style={{color:"white"}}>
          {"Log In with AniList "}
        </Text>
        <FontAwesome5
          name="arrow-circle-right"
          size={14}
        />
      </Button>
      <View
        style={{
          flexDirection: "row",
          marginTop: 40,
          justifyContent: "space-between",
          alignSelf: "center",
        }}
      >
        <TouchableOpacity>
          <FontAwesome5
            name="telegram"
            color="aqua"
            size={30}
            style={{ width: 50, height: 35 }}
            onPress={() => openBrowserAsync("https://t.me/sushinight")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5
            name="patreon"
            color="coral"
            size={30}
            style={{ width: 50, height: 35 }}
            onPress={() => openBrowserAsync("https://patreon.com")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            openBrowserAsync("https://github.com/system32uwu");
          }}
        >
          <View>
            <Avatar.Image
              source={{
                uri:
                  "https://avatars.githubusercontent.com/u/29718978?s=460&u=3fd4f3b9037124ffd108bf32725d877ba7e9f07c&v=4",
              }}
              size={35}
            />
            <AntDesign
              name="github"
              size={10}
              color="white"
              style={{
                position: "absolute",
                alignSelf: "flex-end",
                marginTop: 24,
                backgroundColor: "black",
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
});

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

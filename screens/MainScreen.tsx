import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import InputForm from "../components/InputForm";
import TodoItem from "../components/TodoItem";

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#f7f8fa"} />
      <Text style={styles.mainTitle}>Todo App with React Native</Text>
      <View style={styles.listView}>
        <Text style={styles.listTitle}>할 일 목록</Text>
        <TodoItem />
      </View>
      <View style={styles.separator} />
      <View style={styles.listView}>
        <Text style={styles.listTitle}>완료 목록</Text>
      </View>
      <InputForm />
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS === "android" ? 20 : 0,
    backgroundColor: "#f7f8fa",
  },
  mainTitle: {
    marginVertical: 12,
    paddingHorizontal: 12,
    fontSize: 25,
    fontWeight: "600",
  },
  separator: {
    marginHorizontal: 12,
    marginTop: 24,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.2)",
  },
  listView: {
    flex: 1,
  },
  listTitle: {
    marginBottom: 12,
    paddingHorizontal: 12,
    fontSize: 18,
    fontWeight: "500", // iOS
  },
});

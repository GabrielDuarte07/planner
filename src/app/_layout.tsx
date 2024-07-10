import "@/styles/global.css";
import React from "react";
import { Slot } from "expo-router";
import { StatusBar, SafeAreaView } from "react-native";

const Layout = (): React.JSX.Element => {
  return (
    <SafeAreaView className="flex-1 bg-zinc-900">
      <StatusBar backgroundColor="transparent" barStyle="light-content" translucent />
      <Slot />
    </SafeAreaView>
  );
};

export default Layout;

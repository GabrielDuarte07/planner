import "@/styles/global.css";
import "@/utils/dayjsLocaleConfig";
import React from "react";
import { Slot } from "expo-router";
import { StatusBar, SafeAreaView } from "react-native";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  useFonts,
} from "@expo-google-fonts/inter";
import Loading from "@/components/loading";

const Layout = (): React.JSX.Element => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <SafeAreaView className="flex-1 bg-zinc-900">
      <StatusBar backgroundColor="transparent" barStyle="light-content" translucent />
      <Slot />
    </SafeAreaView>
  );
};

export default Layout;

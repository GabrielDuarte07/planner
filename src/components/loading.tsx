import React from "react";
import { ActivityIndicator } from "react-native";

const Loading = (): React.JSX.Element => {
  return (
    <ActivityIndicator className="flex-1 bg-zinc-900 text-lime-300 justify-center items-center" />
  );
};

export default Loading;

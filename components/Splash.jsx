import React from "react";
import { Image, View } from "react-native";

const Splash = () => {
  return (
    <View className="flex justify-center h-full items-center bg-[#000000]">
      <Image source={require("../assets/images/Splash.png")} />
    </View>
  );
};

export default Splash;

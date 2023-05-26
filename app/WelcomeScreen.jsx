import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const WelcomeScreen = () => {
  return (
    <View className="bg-[#F3E7E1] h-full">
      <View className="flex justify-center items-center mt-20">
        <Image source={require("../assets/images/4th.png")} />
      </View>

      <View className="flex justify-center items-center mt-20">
        <Text className="w-[367px] text-4xl font-bold text-center">
          Woohoo! Welcome to the Zivvi squad!
        </Text>
        <Text className="w-[258px] text-xs mt-6 text-center">
          Let's get lit and create some epic stuff!
        </Text>
      </View>

      <TouchableOpacity className=" flex justify-center items-center mt-20">
        <Link
          href="/Home"
          className={`py-4 px-16 w-[330px] bg-[#000000] text-[#FFFFFF] font-bold active:bg-[#464548] text-center rounded-lg text-2xl`}
        >
          Get Started
        </Link>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

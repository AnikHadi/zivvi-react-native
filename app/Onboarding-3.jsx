import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Onboarding_3 = () => {
  return (
    <View className="bg-[#F3E7E1] h-full">
      <View className="flex flex-row justify-around">
        <View className="w-[150px] border-2 border-solid border-[#00000032]" />
        <View className="w-[150px] border-2 border-solid border-[#00000032]" />
        <View className="w-[150px] border-2 border-solid border-[#000000]" />
      </View>
      <View className="flex justify-center items-center mt-10 ">
        <Image source={require("../assets/images/3rd.png")} />
      </View>

      <View className="flex justify-center items-center mt-10">
        <Text className="w-[266px] text-[29px] font-bold text-center">
          Create Unique, Buzzworthy Pitches with Ease
        </Text>
        <Text className="w-[344px] text-xs mt-3 text-center">
          Stand out with our Templates for crafting best pitches.
        </Text>
      </View>

      <View className="flex justify-center items-center">
        <TouchableOpacity className=" flex justify-center items-center">
          <Link
            href="/WelcomeScreen"
            className={`py-4 px-16 mt-20 w-[330px] bg-[#000000] text-[#FFFFFF] font-bold active:bg-[#464548] text-center rounded-lg text-2xl`}
          >
            Next
          </Link>
        </TouchableOpacity>
        <TouchableOpacity className=" flex justify-center items-center">
          <Link
            href="/WelcomeScreen"
            className={`  mt-4  text-[#000000] font-bold active:bg-[#464548] text-center rounded-lg text-base`}
          >
            Skip
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding_3;

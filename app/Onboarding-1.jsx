import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Onboarding_1 = () => {
  return (
    <View className="bg-[#D1F7CB] h-full">
      <View className="flex flex-row justify-around">
        <View className="w-[150px] border-2 border-solid border-[#000000]" />
        <View className="w-[150px] border-2 border-solid border-[#00000032]" />
        <View className="w-[150px] border-2 border-solid border-[#00000032]" />
      </View>
      <View className="flex justify-center items-center mt-[-25px] ">
        <Image source={require("../assets/images/1st.png")} />
      </View>

      <View className="flex justify-center items-center ">
        <Text className="w-[308px] text-[29px] font-bold text-center">
          Effortlessly Connect with Your Perfect Tribe and Vibe
        </Text>
        <Text className="w-[344px] text-xs text-center">
          Match your style with brands and influencers seamlessly
        </Text>
      </View>

      <View className="flex justify-center items-center ">
        <TouchableOpacity className=" flex justify-center items-center">
          <Link
            href="/Onboarding-2"
            className={` py-4 px-16 mt-11 w-[330px] bg-[#000000] text-[#FFFFFF] font-bold active:bg-[#464548] text-center rounded-lg text-2xl`}
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

export default Onboarding_1;

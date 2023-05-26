import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Onboarding_2 = () => {
  return (
    <View className="bg-[#D6C4EE] h-full">
      <View className="flex flex-row justify-around">
        <View className="w-[150px] border-2 border-solid border-[#00000032]" />
        <View className="w-[150px] border-2 border-solid border-[#000000]" />

        <View className="w-[150px] border-2 border-solid border-[#00000032]" />
      </View>

      <View className="mt-[18px] flex justify-center items-center ">
        <Text className="w-[318px] text-[29px] font-bold text-center">
          Seamlessly Manage Collaborations and Boost Your Success
        </Text>
        <Text className=" mt-7 w-[353px] text-xs text-center">
          Organize partnerships, invoices, and payments.
        </Text>
      </View>

      <View className="flex justify-center items-center mt-20 ">
        <Image source={require("../assets/images/2nd.png")} />
      </View>

      <View className="flex justify-center items-center ">
        <TouchableOpacity className=" flex justify-center items-center">
          <Link
            href="/Onboarding-3"
            className={` py-4 px-16 mt-11 w-[330px] bg-[#000000] text-[#FFFFFF] font-bold active:bg-[#464548] text-center rounded-lg text-2xl`}
          >
            Next
          </Link>
        </TouchableOpacity>
        <TouchableOpacity className=" flex justify-center items-center">
          <Link
            href="/WelcomeScreen"
            className={` mt-4  text-[#000000] font-bold active:bg-[#464548] text-center rounded-lg text-base`}
          >
            Skip
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding_2;

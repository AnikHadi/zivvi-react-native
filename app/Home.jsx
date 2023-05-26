import React from "react";
import { Text, View } from "react-native";

const Home = () => {
  return (
    <View className="bg-[#F3E7E1] h-full">
      <View className="flex justify-center items-center mt-20"></View>

      <View className="flex justify-center items-center mt-20">
        <Text className="w-[367px] text-4xl font-bold text-center">
          Woohoo! Welcome to the Zivvi squad!
        </Text>
        <Text className="w-[258px] text-2xl mt-40 text-center font-extrabold">
          This is Home Screen Page
        </Text>
      </View>
    </View>
  );
};

export default Home;

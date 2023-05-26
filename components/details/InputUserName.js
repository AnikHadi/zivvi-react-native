import { useState } from "react";
import { Link } from "expo-router";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const InputUserName = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  // const { userName, setUserName } = useContext(GlobalContext);

  const handleUserName = () => {
    setUserName(name);
  };

  return (
    // relative
    <ScrollView>
      <View className="flex justify-center items-center mt-[70px]">
        <Text className="mb-[34px] font-normal text-4xl text-center">
          Zivvi
        </Text>
        <Text className="font-bold text-lg w-[251px] text-center mb-[10px]">
          Next, create your username
        </Text>

        <TextInput
          className="w-[312px] h-[67px] font-extrabold text-[40px] text-center"
          value={name}
          onChangeText={setName}
          placeholder="Your username"
        />
      </View>

      <View className="flex justify-center items-center">
        <Text className="mt-[193px] w-[190px] font-medium text-center">
          Your username is unique You can always change it later
        </Text>
      </View>

      <TouchableOpacity
        className=" flex justify-center items-center"
        disabled={!name && true}
        onPress={handleUserName}
      >
        <Link
          href="/Onboarding-1"
          className={`${
            name ? "bg-[#CF0A0A]" : "bg-[#A0A0A0]"
          } py-4 px-16 mt-4  text-[#FFFFFF] font-bold active:bg-[#464548] text-center w-[330px]  rounded-lg text-2xl`}
        >
          Continue
        </Link>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default InputUserName;

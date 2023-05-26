import { Link } from "expo-router";
import { useContext } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { GlobalContext } from "../../Global/Context";

const InputName = () => {
  // const [name, setName] = useState("");
  const { name, setName } = useContext(GlobalContext);

  const handleName = () => {
    console.warn(name);
  };

  return (
    // relative
    <ScrollView>
      <View className="flex justify-center items-center mt-[70px] ">
        <Text className="mb-[34px] font-normal text-4xl text-center">
          Zivvi
        </Text>
        <Text className="font-bold text-lg mb-[10px]">
          Let’s get Started, what’s your name?
        </Text>
        <TextInput
          className="w-[263px] h-[67px] font-extrabold text-5xl"
          onChangeText={(text) => setName(text)}
          placeholder="Your name"
        />
      </View>

      <TouchableOpacity
        className=" flex justify-center items-center"
        disabled={!name && true}
        onPress={handleName}
      >
        <Link
          href={`/GetDOB?name=${name}`}
          className={`${
            name ? "bg-[#CF0A0A]" : "bg-[#565658]"
          } py-4 px-16 text-[#FFFFFF] font-bold active:bg-[#464548] mt-[400px]  text-center w-[330px]  rounded-lg text-2xl`}
        >
          Continue
        </Link>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default InputName;

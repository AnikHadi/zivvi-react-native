import { Link } from "expo-router";
import { useContext, useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { GlobalContext } from "../../Global/Context";

const InputPhone = () => {
  const [code, setCode] = useState("");
  const { phone, setPhone } = useContext(GlobalContext);
  const [isValidNumber, setIsValidNumber] = useState("");
  const [isValid, setIsValid] = useState(true);

  const checkValidNumber = (num) => {
    // Remove any non-numeric characters
    const number = num.replace(/[^0-9]/g, "");

    setIsValidNumber(number);

    // Validate the number length
    if (number.length <= 10) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handlePhoneNumber = () => {
    if (isValid) {
      if (isValidNumber.length >= 10) {
        // Set the input value
        setPhone(isValidNumber);
      } else {
        console.warn("Please enter number");
      }
    } else {
      console.warn("Please enter number");
    }
  };

  return (
    // relative
    <ScrollView>
      <View className="flex justify-center items-center mt-[70px]">
        <Text className="mb-[34px] font-normal text-4xl text-center">
          Zivvi
        </Text>
        <Text className="font-bold text-lg w-[240px] text-center mb-[10px]">
          Create your account using your phone number
        </Text>
        <View className="flex flex-row">
          <TextInput
            className="flex justify-center items-center w-[70px] h-[44px] rounded-3xl font-bold text-xs border-2  border-solid border-[#464548] p-2 my-auto mr-2  "
            keyboardType="numeric"
            onChangeText={(text) => setCode(text)}
            placeholder="🇧🇩 +880"
          />
          <TextInput
            className="w-[300px] h-[67px] font-extrabold text-5xl"
            value={isValidNumber}
            keyboardType="numeric"
            onChangeText={checkValidNumber}
            placeholder="Your Phone"
          />
        </View>
        {!isValid && (
          <Text style={{ color: "red" }}>
            Number length should be 10 digits or less
          </Text>
        )}
      </View>

      <View className="flex justify-center items-center">
        <Text className="mt-[193px] w-[279px] font-medium text-center">
          By tapping "Continue", you agree to our Privacy Policy and
          Terms of Service.
        </Text>
      </View>
      <TouchableOpacity
        className=" flex justify-center items-center"
        disabled={(!isValidNumber && true) || (!isValid && true)}
        onPress={handlePhoneNumber}
      >
        <Link
          href="/GetOTP"
          className={`${
            isValidNumber
              ? isValid
                ? "bg-[#CF0A0A]"
                : "bg-[#565658]"
              : "bg-[#565658]"
          } py-4 px-16 mt-3  text-[#FFFFFF] font-bold active:bg-[#464548] text-center w-[330px]  rounded-lg text-2xl`}
        >
          Continue
        </Link>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default InputPhone;

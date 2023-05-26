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

const InputOTP = () => {
  const { phone } = useContext(GlobalContext);
  const [OTPNumber, setOTPNumber] = useState(0);
  const [isValidOTP, setIsValidOTP] = useState("");
  const [isValid, setIsValid] = useState(true);

  const checkValidOTP = (num) => {
    // Remove any non-numeric characters
    const number = num.replace(/[^0-9]/g, "");

    setIsValidOTP(number);

    // Validate the number length
    if (number.length <= 6) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleOTPNumber = () => {
    if (isValid) {
      if (isValidOTP.length >= 6) {
        // Set the input value
        setOTPNumber(isValidOTP);
        console.log(isValidOTP);
      } else {
        console.warn("Please enter OTP number");
      }
    } else {
      console.warn("Please enter OTP number");
    }
  };

  return (
    // relative
    <ScrollView>
      <View className="flex justify-center items-center mt-[70px]">
        <Text className="mb-[34px] font-normal text-4xl text-center">
          Zivvi
        </Text>
        <Text className="font-bold text-lg w-[336px] text-center mb-[10px]">
          Enter the code we sent to {phone}
        </Text>

        <TextInput
          className="w-[198px] h-[67px] font-extrabold text-5xl text-center"
          value={isValidOTP}
          keyboardType="numeric"
          onChangeText={checkValidOTP}
          placeholder="......"
        />

        {!isValid && (
          <Text style={{ color: "red" }}>OTP length should be 6 digits.</Text>
        )}
      </View>

      <View className="flex justify-center items-center">
        <Text className="mt-[193px] w-[279px] font-medium text-center">
          Change the phone number
        </Text>
      </View>
      <TouchableOpacity
        className=" flex justify-center items-center"
        disabled={(!isValidOTP && true) || (!isValid && true)}
        onPress={handleOTPNumber}
      >
        <Link
          href="/GetUserName"
          className={`${
            isValidOTP
              ? isValid
                ? "bg-[#CF0A0A]"
                : "bg-[#565658]"
              : "bg-[#565658]"
          } py-4 px-16 mt-4  text-[#FFFFFF] font-bold active:bg-[#464548] text-center w-[330px]  rounded-lg text-2xl`}
        >
          {isValidOTP
            ? OTPNumber
              ? "Checking"
              : "Verify"
            : `Resend in ${45}s`}
        </Link>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default InputOTP;

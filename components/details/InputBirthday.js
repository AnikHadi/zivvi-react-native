import { useContext, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { GlobalContext } from "../../Global/Context";
import { Link, useSearchParams } from "expo-router";

const InputBirthday = () => {
  // const { DOB, setDOB } = useContext(GlobalContext);
  const [DOB, setDOB] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  // const { name } = useContext(GlobalContext);
  const { name } = useSearchParams();

  const toggleDatepicker = () => {
    setDatePickerVisibility(!isDatePickerVisible);
  };

  const handleDatePicker = (date) => {
    const dt = new Date(date).toLocaleDateString().split("/");
    console.log(dt);
    setDOB({
      day: dt[1],
      month: dt[0],
      year: dt[2],
    });
    console.log(date);
    toggleDatepicker();
  };

  const handleDate = () => {
    console.warn(DOB);
  };

  // if (DOB) {
  //   console.log(DOB);
  // }

  return (
    <>
      <View className="flex justify-center items-center mt-[70px]">
        <Text className="mb-[34px] font-normal text-4xl text-center">
          Zivvi
        </Text>
        <Text className="font-bold text-lg mb-[10px]">
          Hi {name}, when’s your birthday?
        </Text>

        <TouchableOpacity className=" mt-3" onPress={toggleDatepicker}>
          <View className="flex flex-row gap-y-3.5 ">
            <Text
              className={`${DOB ? "text-gray-900" : "text-gray-500"}
              text-5xl p-1 h-20 font-extrabold`}
            >
              {DOB ? DOB.day : "DD"}
            </Text>
            <Text
              className={`${DOB ? "text-gray-900" : "text-gray-500"}
              text-5xl p-1 h-20 font-extrabold`}
            >
              {DOB ? DOB.month : "MM"}
            </Text>
            <Text
              className={`${DOB ? "text-gray-900" : "text-gray-500"}
              text-5xl p-1 h-20 font-extrabold`}
            >
              {DOB ? DOB.year : "YYYY"}
            </Text>
          </View>
        </TouchableOpacity>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDatePicker}
          onCancel={toggleDatepicker}
        />
      </View>

      <TouchableOpacity
        className=" flex justify-center items-center"
        disabled={!DOB && true}
        onPress={handleDate}
      >
        <Text className="mt-[600px] w-[197px] font-medium text-center">
          Only Make sure you’re old enough to use Zivvi
        </Text>
        <Link
          href="/GetPhone"
          className={`${
            DOB ? "bg-[#CF0A0A]" : "bg-[#565658]"
          } py-4 px-16 mt-4 text-[#FFFFFF] font-bold active:bg-[#464548] text-center w-[330px]  rounded-lg text-2xl`}
        >
          Continue
        </Link>
      </TouchableOpacity>
    </>
  );
};

export default InputBirthday;

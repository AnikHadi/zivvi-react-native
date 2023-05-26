import { Stack, useRouter } from "expo-router";
import { SafeAreaView } from "react-native";
import { GlobalProvider } from "../Global/Context";
import GetName from "./GetName";
// import Splash from "../components/Splash";
// import WelcomeScreen from "../components/WelcomeScreen";
// import Onboarding_3 from "../components/Onboarding-3";
// import Onboarding_2 from "../components/Onboarding-2";
// import Onboarding_1 from "../components/Onboarding-1";
// import GetUserName from "../components/common/GetUserName";
// import GetOTP from "../components/common/GetOTP";
// import GetPhone from "../components/common/GetPhone";

// import GetDOB from "../components/common/GetDOB";

const Home = () => {
  const router = useRouter();

  return (
    <GlobalProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <Stack.Screen
          options={{
            headerShadowVisible: false,
            headerTitle: "",
          }}
        ></Stack.Screen>

        <GetName />
        {/* <GetDOB /> */}
        {/* <GetPhone /> */}
        {/* <GetOTP /> */}
        {/* <GetUserName /> */}
        {/* <Onboarding_1 /> */}
        {/* <Onboarding_2 /> */}
        {/* <Onboarding_3 /> */}
        {/* <WelcomeScreen /> */}
        {/* <Splash /> */}
      </SafeAreaView>
    </GlobalProvider>
  );
};

export default Home;

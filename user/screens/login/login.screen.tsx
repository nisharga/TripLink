import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { windowHeight } from "@/themes/app.constant";
import AuthContainer from "@/utils/container/auth-container";
import styles from "./styles";
import Images from "@/utils/images";
import SignInText from "@/components/login/signin.text";
import PhoneNumberInput from "@/components/login/phone-number.input";
import Button from "@/components/common/button";
import { useToast } from "react-native-toast-notifications";
import { external } from "@/styles/external.style";
import { router } from "expo-router";

const LoginScreen = () => {
  const [phone_number, setphone_number] = useState("");
  const [loading, setloading] = useState(false);
  const [countryCode, setCountryCode] = useState("+880");
  const toast = useToast();
  const handleSubmit = async () => {
    if (phone_number === "" || countryCode === "") {
      toast.show("Please fill the fields!", {
        placement: "bottom",
      });
    } else {
      console.log(countryCode, phone_number);
    }
  };
  return (
    <AuthContainer
      topSpace={windowHeight(150)}
      imageShow={true}
      container={
        <View>
          <View>
            <View>
              <Image style={styles.transformLine} source={Images.line} />
              <SignInText />
              <View style={[external.mt_25, external.Pb_10]}>
                <PhoneNumberInput
                  phone_number={phone_number}
                  setphone_number={setphone_number}
                  countryCode={countryCode}
                  setCountryCode={setCountryCode}
                />
                <View style={[external.mt_25, external.Pb_15]}>
                  <Button
                    title="Get Otp"
                    onPress={() => router.push("/(routes)/otp-verification")}
                    // disabled={loading}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      }
    />
  );
};

export default LoginScreen;

import React from "react";
import { View, Text, Image } from "react-native";
import Logo from "@/assets/logo.png";
import Bg from "@/assets/bg.png";
import Input from "@/components/Input";
import {
  MapPin,
  Calendar as IconCalendar,
  Settings2,
  UserRoundPlus,
  ArrowRight,
} from "lucide-react-native";
import { colors } from "@/styles/colors";
import Button from "@/components/Button";

enum StepForm {
  TRIP_DETAILS = 1,
  ADD_EMAIL = 2,
}

const Index = (): React.JSX.Element => {
  const [stepForm, setStepForm] = React.useState(StepForm.TRIP_DETAILS);

  const handleNextStepForm = () => {
    if (stepForm === StepForm.TRIP_DETAILS) {
      return setStepForm(StepForm.ADD_EMAIL);
    }

    return setStepForm(StepForm.TRIP_DETAILS);
  };

  return (
    <View className="flex-1 justify-center items-center px-5">
      <Image source={Logo} className="h-8" resizeMode="contain" />

      <Image source={Bg} className="absolute" />

      <Text className="text-zinc-400 font-regular text-center text-lg mt-3">
        Convide seus amigos e planeje sua{"\n"}próxima viagem
      </Text>

      <View className="w-full bg-zinc-900 p-4 rounded-xl my-8 border border-zinc-800">
        <Input>
          <MapPin size={20} color={colors.zinc[400]} />
          <Input.field
            placeholder="Para onde?"
            editable={stepForm === StepForm.TRIP_DETAILS}
          />
        </Input>

        <Input>
          <IconCalendar size={20} color={colors.zinc[400]} />
          <Input.field
            placeholder="Quando?"
            editable={stepForm === StepForm.TRIP_DETAILS}
          />
        </Input>

        {stepForm === StepForm.ADD_EMAIL && (
          <>
            <View className="border-b py-3 border-zinc-800">
              <Button
                variant="secondary"
                onPress={() => setStepForm(StepForm.TRIP_DETAILS)}
              >
                <Button.title>Alterar local/data</Button.title>
                <Settings2 size={20} color={colors.zinc[200]} />
              </Button>
            </View>

            <Input>
              <UserRoundPlus size={20} color={colors.zinc[400]} />
              <Input.field placeholder="Quem estará na viagem?" />
            </Input>
          </>
        )}

        <Button onPress={handleNextStepForm}>
          <Button.title>
            {stepForm === StepForm.TRIP_DETAILS ? "Continuar" : "Confirmar Viagem"}
          </Button.title>
          <ArrowRight size={20} color={colors.lime[950]} />
        </Button>
      </View>

      <Text className="text-zinc-500 font-regular text-center text-base">
        Ao planejar sua viagem com a plann.er você automaticamente concorda com nossos{" "}
        <Text className="text-zinc-300 underline">
          termos de uso e políticas de privacidade
        </Text>
      </Text>
    </View>
  );
};

export default Index;

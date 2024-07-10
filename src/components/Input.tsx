import React from "react";
import { TextInput, TextInputProps, View, Platform } from "react-native";
import clsx from "clsx";
import { colors } from "@/styles/colors";

type VariantTypes = "primary" | "secondary" | "tertiary";

type InputProps = {
  children: React.ReactNode;
  variants?: VariantTypes;
};

const Input = ({ children, variants = "primary" }: InputProps): React.JSX.Element => {
  return (
    <View
      className={clsx("w-full h-16 flex-row items-center gap-2", {
        "h-14 px-4 rounded-lg border border-zinc-900": variants === "primary",
        "bg-zinc-900": variants === "secondary",
        "bg-zinc-800": variants === "tertiary",
      })}
    >
      {children}
    </View>
  );
};

const Field = ({ ...rest }: TextInputProps): React.JSX.Element => {
  return (
    <TextInput
      {...rest}
      className="flex-1 text-zinc-900 text-lg font-regular"
      placeholderTextColor={colors.zinc[400]}
      cursorColor={colors.zinc[100]}
      selectionColor={Platform.OS === "ios" ? colors.zinc[100] : undefined}
    />
  );
};

Input.field = Field;

export default Input;

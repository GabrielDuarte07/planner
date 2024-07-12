import clsx from "clsx";
import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  TextProps,
  ActivityIndicator,
} from "react-native";

type Variants = "primary" | "secondary";

type ButtonProps = TouchableOpacityProps & {
  variant?: Variants;
  isLoading?: boolean;
  className?: string;
};

const ThemeButtonContext = React.createContext<{ variant?: Variants }>({});

const Button = ({
  variant = "primary",
  isLoading = false,
  className,
  children,
  ...rest
}: ButtonProps): React.JSX.Element => {
  return (
    <TouchableOpacity
      className={clsx(
        "w-full h-11 flex-row items-center justify-center rounded-lg gap-2",
        {
          "bg-lime-300": variant === "primary",
          "bg-zinc-800": variant === "secondary",
        },
        className,
      )}
      activeOpacity={0.7}
      disabled={isLoading}
      {...rest}
    >
      <ThemeButtonContext.Provider value={{ variant }}>
        {isLoading ? <ActivityIndicator className="text-lime-900" /> : children}
      </ThemeButtonContext.Provider>
    </TouchableOpacity>
  );
};

const Title = ({ children }: TextProps): React.JSX.Element => {
  const { variant } = React.useContext(ThemeButtonContext);
  return (
    <Text
      className={clsx("text-base font-semibold", {
        "text-lime-900": variant === "primary",
        "text-zinc-200": variant === "secondary",
      })}
    >
      {children}
    </Text>
  );
};

Button.title = Title;

export default Button;

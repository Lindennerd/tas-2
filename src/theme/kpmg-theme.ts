import type { InputStylesType } from "@material-tailwind/react";
import type { ButtonStyleTypes } from "@material-tailwind/react";

const inputStyles: InputStylesType = {
  defaultProps: {
    colors: "primary",
  },
  valid: {
    colors: ["primary"],
  },
  styles: {
    base: {
      input: {},
    },
  },
};

const buttonStyles: ButtonStyleTypes = {
  defaultProps: {
    color: "primary",
  },
  valid: {
    colors: ["primary"],
  },
  styles: {
    variants: {
      filled: {
        primary: {
          background: "bg-primary",
          color: "text-white",
        },
      },
      outlined: {
        primary: {
          border: "border border-primary",
          color: "text-primary",
        },
      },
      gradient: {
        primary: {
          background: "bg-primary",
          color: "text-white",
        },
      },
      text: {
        primary: {
          color: "text-primary",
        },
      },
    },
  },
};

const kpmgTheme = {
  colors: {
    primary: {
      DEFAULT: "#3f51b5",
    },
  },

  input: inputStyles,
  button: buttonStyles,
};

export default kpmgTheme;

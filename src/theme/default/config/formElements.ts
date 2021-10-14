import { colors } from "../colors";

export default {
  errors: {
    errorBorderColor: colors.red.base,
  },
  input: {
    placeholderColor: "#737373",
    borderHoverColor: colors.blue.base,
    inputBorderColor: colors.gray.light,
    background: colors.white,
    iconColor: colors.gray.darker,
  },
  radioButtonGroup: {
    normalBackground: colors.gray.lighter,
    normalFontColor: colors.black,
    selectedBackground: colors.blue.base,
    selectedFontColor: colors.white,
    borderColor: colors.gray.light,
  },
  multiSelect: {
    hover: colors.gray.lighter,
  },
  checkbox: {
    input: {
      background: colors.blue.base,
      borderColor: "#cccccc",
      shadowColor: "#0e59bb1a",
    },
  },
  generalError: {
    borderColor: colors.red.base,
    background: colors.red.lightest,
  },
};
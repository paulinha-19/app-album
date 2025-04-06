import { Text, StyleSheet } from "react-native";

interface InputMessageErrorProps {
  message?: string;
}

export function InputMessageError({ message }: InputMessageErrorProps) {
  if (!message) return null;

  return <Text style={[styles.error]}>{message}</Text>;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 12,
    paddingLeft: 9,
    textAlign: "right"
  },
});

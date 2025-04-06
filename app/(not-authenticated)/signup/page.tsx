import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpType } from "@/types/index";
import { signupSchema } from "@/schemas/index";
import { useAuth, useTogglePassword } from "@/hooks/index";
import { FormInput } from "@/components";

export default function SignUpScreen() {
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { onRegister } = useAuth();

  const { showPassword,
    showConfirmPassword,
    togglePassword,
    toggleConfirmPassword } = useTogglePassword();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
    reset,
  } = useForm<SignUpType>({
    mode: "onChange",
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      image: null,
    },
    resolver: zodResolver(signupSchema),
  });

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) return;
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const file = {
        uri: result.assets[0].uri,
        type: result.assets[0].type || "image/jpeg",
        size: result.assets[0].fileSize || 100000,
        name: result.assets[0].fileName || "image.jpg"
      }
      setSelectedImage(file.uri);
      setValue("image", [file], { shouldValidate: true });
    }
  };

  const onSubmit = (data: SignUpType) => {
    console.log("data", data)
    setLoading(true);
    setLoading(false);
    router.replace("/(not-authenticated)/signin/page");
    reset();
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      >
        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
          <View style={styles.formContainer}>
            <TouchableOpacity style={styles.avatarWrapper} onPress={pickImage}>
              {selectedImage ? (
                <Image
                  source={{ uri: selectedImage }}
                  style={styles.avatar}
                />
              ) : (
                <View style={styles.avatarPlaceholder}>
                  <Ionicons name="person" size={70} color="#999" />
                </View>
              )}
              <Text style={styles.insertPhotoText}>Inserir foto</Text>
            </TouchableOpacity>
            <FormInput
              label="Nome"
              name="name"
              placeholder="Digite seu nome"
              error={errors.name?.message}
              required={true}
              control={control}
            />
            <FormInput
              label="Nome do usuário"
              name="username"
              placeholder="Digite o nome do usuário"
              error={errors.username?.message}
              required={true}
              control={control}
              paddingTopLabel={20}
            />
            <FormInput
              label="Email"
              name="email"
              placeholder="Digite seu email"
              error={errors.email?.message}
              required={true}
              control={control}
              paddingTopLabel={20}
            />
            <FormInput
              label="Senha"
              name="password"
              placeholder="Mínimo de 6 caracteres"
              error={errors.password?.message}
              secureTextEntry={!showPassword}
              required={true}
              control={control}
              iconRight={
                <Ionicons
                  name={showPassword ? "eye-outline" : "eye-off-outline"}
                  size={24}
                  onPress={togglePassword}
                />
              }
              paddingTopLabel={20}
            />
            <FormInput
              label="Confirmação da senha"
              name="confirmPassword"
              placeholder="Mínimo de 6 caracteres"
              secureTextEntry={!showConfirmPassword}
              error={errors.confirmPassword?.message}
              required={true}
              control={control}
              iconRight={
                <Ionicons
                  name={showConfirmPassword ? "eye-outline" : "eye-off-outline"}
                  size={24}
                  onPress={toggleConfirmPassword}
                />
              }
              paddingTopLabel={20}
            />
            <TouchableOpacity
              disabled={!isValid || loading}
              style={[
                styles.buttonSubmit,
                { backgroundColor: isValid ? "#D1349B" : "#EC9FD4" },
              ]}
              onPress={handleSubmit(onSubmit)}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.textButtonSubmit}>CRIAR CONTA</Text>
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scroll: {
    padding: 24,
    alignItems: "center",
  },
  formContainer: {
    width: "85%",
    backgroundColor: "transparent",
    marginTop: 10
  },
  title: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
  },
  avatarWrapper: {
    alignItems: "center",
    marginBottom: 15,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  avatarPlaceholder: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
  insertPhotoText: {
    color: "#4AACB3",
    marginTop: 8,
    fontSize: 20,
    fontWeight: "600"
  },
  buttonSubmit: {
    marginTop: 30,
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  textButtonSubmit: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 17
  },
});

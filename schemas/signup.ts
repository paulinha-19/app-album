import { z } from "zod";

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

const signupSchema = z.object({
  image: z
    .any()
    .optional()
    .refine(
      (files) => {
        if (!files || !files[0]) return true; // if there is no image
        return files[0].size <= 1024 * 1024 * 15;
      },
      { message: "O tamanho máximo da imagem é de 15MB" }
    )
    .refine(
      (files) => {
        if (!files || !files[0]) return true; // if there is no image
        return ACCEPTED_IMAGE_TYPES.includes(files[0].type);
      },
      { message: "Apenas os formatos .jpg, .jpeg, e .png são suportados" }
    ),
  name: z.string().min(1, "Nome é obrigatório"),
  username: z.string().min(2, "O usuário deve ter pelo menos 2 caracteres").max(32, "O usuário deve ter no máximo 32 caracteres"),
  email: z.string().email("Insira um email válido"),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres').max(32, "A senha deve ter no máximo 32 caracteres"),
  confirmPassword: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres').max(32, "A senha deve ter no máximo 32 caracteres"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Senhas diferentes",
  path: ['confirmPassword'],
});

export default signupSchema;

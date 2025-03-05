import * as yup from 'yup';

export const createUserSchema = yup.object({
  email: yup.string().email('Debe ser un email válido').required(),
  password: yup.string().min(6, 'Mínimo 6 caracteres').required(),
});

export class CreateUserDto {
  email: string;
  password: string;
}

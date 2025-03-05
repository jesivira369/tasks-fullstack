import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().email('Debe ser un email válido').required(),
  password: yup.string().required(),
});

export class LoginDto {
  email: string;
  password: string;
}

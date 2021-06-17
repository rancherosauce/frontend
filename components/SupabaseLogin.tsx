import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  toast,
  useToast,
} from "@chakra-ui/react";
import { useAuth } from "./AuthContext/AuthContext";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function SupabaseLogin() {
  const { signIn } = useAuth();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(values: any) {
    await signIn(values);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ThemeSwitcher />
      <FormControl isInvalid={errors.email}>
        <FormLabel htmlFor="email">Email Address</FormLabel>
        <Input
          id="email"
          type="email"
          w="20rem"
          {...register("email", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
}

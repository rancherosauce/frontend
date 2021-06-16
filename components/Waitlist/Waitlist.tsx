import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { handleWaitlistSignup } from "./handleWaitlistSignup";

export default function Waitlist() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(handleWaitlistSignup)}>
      <FormControl isInvalid={errors.email}>
        <FormLabel htmlFor="email">Email Address</FormLabel>
        <Input
          id="email"
          placeholder="becca@gmail.com"
          {...register("email", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} isLoading={isSubmitting} type="submit">
        🏄‍♂️ Get Notifieds
      </Button>
    </form>
  );
}

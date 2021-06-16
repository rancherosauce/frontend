import { WaitlistSignupFormData } from "./types";
import { supabase } from "utils/supabase";

export async function handleWaitlistSignup({ email }: WaitlistSignupFormData) {
  const availableEmails = await (
    await supabase.from("early_signup").select("*")
  ).data.map((u: any) => u.email);

  if (!availableEmails.includes(email)) {
    try {
      return await supabase.from("early_signup").insert({ email });
    } catch (e) {
      console.log(e);
    }
  } else {
    alert("the fuck");
  }
}

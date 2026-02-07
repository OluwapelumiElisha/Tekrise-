"use client"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";




// 1. Define your Validation Schema with Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  reason: z.string().min(1, { message: "Please select a reason for contact." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy.",
  }),
});

// Infer the type from the schema automatically
type ContactFormValues = z.infer<typeof formSchema>;

export const UseContact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 2. Initialize the Form Hook
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      reason: "", 
      message: "",
      terms: false,
    },
  });

  // 3. The Professional onSubmit (Receives DATA, not Event)
  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);

    try {
      console.log("Validated Data Submitted:", data);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      alert(`Success! Message sent by ${data.name}`);
      form.reset(); 
    } catch (error) {
      console.error("Submission error", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return {
    form,
    onSubmit,
    isSubmitting
  }
};
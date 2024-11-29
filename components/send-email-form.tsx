"use client";
import { z } from "zod";
import { useState } from "react";
import { Button } from "./ui/button";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { CircleCheck } from "lucide-react";
import { Form, FormMessage } from "./ui/form";
import { CustomFormField } from "./form-field";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Unesite ime i prezime",
  }),
  email: z.string().min(2, {
    message: "Unesite email.",
  }),
  message: z.string().min(2, {
    message: "Unesite poruku.",
  }),
});

export const SendEmailForm = () => {
  const [successMsg, setSuccessMsg] = useState("");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const serviceId = "service_5u6v6j4";
  const templateId = "template_x1rhv7b";
  const publicKey = "9xmUOq6i3da0wD83c";

  const templateParams = {
    from_name: form.getValues("name"),
    from_email: form.getValues("email"),
    to_name: "KBK Mornar Split",
    message: form.getValues("message"),
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    emailjs
      .send(serviceId, templateId, templateParams, {
        publicKey,
      })
      .then(
        () => {
          setSuccessMsg("Poruka je uspješno poslana.");
          form.reset();
        },
        (error) => {
          form.setError("message", {
            type: "manual",
            message: "Došlo je do greške. Pokušajte ponovno.",
          });
        }
      );
  }

  const { isSubmitting } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <CustomFormField
          name="name"
          label="Ime i Prezime"
          placeholder="Unesite ime i prezime"
        />
        <CustomFormField
          name="email"
          label="Email"
          placeholder="Unesite email"
        />
        <CustomFormField
          name="message"
          label="Poruka"
          placeholder="Unesite poruku"
          isTextArea
        />
        <Button
          type="submit"
          className="w-full bg-[#e08639] text-white"
          variant="outline"
          disabled={isSubmitting}
        >
          Pošalji
        </Button>
        <FormMessage>
          {successMsg && (
            <p className="text-green-700 flex flex-row space-x-3 items-center">
              <CircleCheck className="h-4 w-4 mr-2" /> {successMsg}
            </p>
          )}
        </FormMessage>
      </form>
    </Form>
  );
};

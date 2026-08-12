import { z } from "zod";

const phoneRegex = /^\+?[0-9]{9,15}$/;

const phoneField = z
  .string()
  .trim()
  .min(1, "Phone number is required.")
  .transform((v) => v.replace(/[\s-]/g, ""))
  .pipe(z.string().regex(phoneRegex, "Enter a valid phone number, e.g. 0712 345 678."));

const nameField = z
  .string()
  .trim()
  .min(2, "Please enter your full name.")
  .max(100, "Name is too long.");

const emailField = z.string().trim().min(1, "Email address is required.").email("Enter a valid email address.");

export const appointmentSchema = z.object({
  fullName: nameField,
  phone: phoneField,
  email: emailField,
  service: z.string().min(1, "Please select a service."),
  preferredDate: z
    .string()
    .min(1, "Please select a preferred date.")
    .refine((value) => {
      const selected = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selected >= today;
    }, "Preferred date cannot be in the past."),
  preferredTime: z.string().min(1, "Please select a preferred time."),
  message: z.string().max(1000, "Message is too long.").optional(),
});

export type AppointmentSchema = z.infer<typeof appointmentSchema>;

export const contactSchema = z.object({
  fullName: nameField,
  phone: phoneField,
  email: emailField,
  subject: z.string().trim().min(2, "Please enter a subject.").max(150, "Subject is too long."),
  message: z.string().trim().min(10, "Please enter a message of at least 10 characters.").max(1500, "Message is too long."),
});

export type ContactSchema = z.infer<typeof contactSchema>;

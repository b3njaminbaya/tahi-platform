import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send, AlertTriangle } from "lucide-react";
import { FormField } from "@/components/forms/FormField";
import { inputClasses } from "@/components/forms/inputStyles";
import { Button } from "@/components/ui/Button";
import { contactSchema, type ContactSchema } from "@/lib/validation";
import { submitContactMessage, SubmissionError } from "@/lib/submissionService";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: { fullName: "", phone: "", email: "", subject: "", message: "" },
  });

  async function onSubmit(values: ContactSchema) {
    setStatus("idle");
    try {
      await submitContactMessage(values);
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      if (!(err instanceof SubmissionError)) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-lg border border-primary-200 bg-primary-50 px-6 py-12 text-center"
      >
        <CheckCircle2 className="h-10 w-10 text-primary-600" aria-hidden="true" />
        <h2 className="text-xl text-primary-900">Message sent</h2>
        <p className="max-w-sm text-sm text-primary-800">
          Thank you for reaching out — we've received your message and will get back to you soon.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {status === "error" ? (
        <div role="alert" className="flex items-start gap-2.5 rounded-md border border-error-200 bg-red-50 px-4 py-3 text-sm text-error-600">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Something went wrong sending your message. Please try again, or reach us on WhatsApp instead.</span>
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField id="fullName" label="Full Name" required error={errors.fullName?.message}>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            className={inputClasses}
            aria-invalid={Boolean(errors.fullName) || undefined}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            {...register("fullName")}
          />
        </FormField>

        <FormField id="phone" label="Phone Number" required hint="e.g. 0712 345 678" error={errors.phone?.message}>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className={inputClasses}
            aria-invalid={Boolean(errors.phone) || undefined}
            aria-describedby={[errors.phone ? "phone-error" : null, "phone-hint"].filter(Boolean).join(" ") || undefined}
            {...register("phone")}
          />
        </FormField>
      </div>

      <FormField id="email" label="Email Address" required error={errors.email?.message}>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className={inputClasses}
          aria-invalid={Boolean(errors.email) || undefined}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email")}
        />
      </FormField>

      <FormField id="subject" label="Subject" required error={errors.subject?.message}>
        <input
          id="subject"
          type="text"
          className={inputClasses}
          aria-invalid={Boolean(errors.subject) || undefined}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          {...register("subject")}
        />
      </FormField>

      <FormField id="message" label="Message" required error={errors.message?.message}>
        <textarea
          id="message"
          rows={5}
          className={inputClasses}
          aria-invalid={Boolean(errors.message) || undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
      </FormField>

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-5 w-5" aria-hidden="true" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}

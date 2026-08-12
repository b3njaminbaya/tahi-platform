import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send, AlertTriangle } from "lucide-react";
import { FormField } from "@/components/forms/FormField";
import { inputClasses } from "@/components/forms/inputStyles";
import { Button } from "@/components/ui/Button";
import { appointmentSchema, type AppointmentSchema } from "@/lib/validation";
import { submitAppointmentRequest, SubmissionError } from "@/lib/submissionService";
import { services } from "@/config/services";
import { getWhatsAppUrl, whatsAppMessages } from "@/lib/whatsapp";

interface AppointmentFormProps {
  defaultService?: string;
}

export function AppointmentForm({ defaultService }: AppointmentFormProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentSchema>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      service: defaultService ?? "",
      preferredDate: "",
      preferredTime: "",
      message: "",
    },
  });

  async function onSubmit(values: AppointmentSchema) {
    setStatus("idle");
    try {
      await submitAppointmentRequest(values);
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
        <h2 className="text-xl text-primary-900">Request received</h2>
        <p className="max-w-sm text-sm text-primary-800">
          Thank you — your appointment request has been captured. We'll follow up with you by phone or email to
          confirm the details. For a faster response, you can also message us directly on WhatsApp.
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Button variant="outline" onClick={() => setStatus("idle")}>
            Submit another request
          </Button>
          <a
            href={getWhatsAppUrl(whatsAppMessages.appointment)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1fb757]"
          >
            Message us on WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {status === "error" ? (
        <div role="alert" className="flex items-start gap-2.5 rounded-md border border-error-200 bg-red-50 px-4 py-3 text-sm text-error-600">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Something went wrong submitting your request. Please try again, or reach us on WhatsApp instead.</span>
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

      <FormField id="service" label="Service" required error={errors.service?.message}>
        <select
          id="service"
          className={inputClasses}
          defaultValue={defaultService ?? ""}
          aria-invalid={Boolean(errors.service) || undefined}
          aria-describedby={errors.service ? "service-error" : undefined}
          {...register("service")}
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.name}>
              {service.name}
            </option>
          ))}
        </select>
      </FormField>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField id="preferredDate" label="Preferred Date" required error={errors.preferredDate?.message}>
          <input
            id="preferredDate"
            type="date"
            className={inputClasses}
            aria-invalid={Boolean(errors.preferredDate) || undefined}
            aria-describedby={errors.preferredDate ? "preferredDate-error" : undefined}
            {...register("preferredDate")}
          />
        </FormField>

        <FormField id="preferredTime" label="Preferred Time" required error={errors.preferredTime?.message}>
          <input
            id="preferredTime"
            type="time"
            className={inputClasses}
            aria-invalid={Boolean(errors.preferredTime) || undefined}
            aria-describedby={errors.preferredTime ? "preferredTime-error" : undefined}
            {...register("preferredTime")}
          />
        </FormField>
      </div>

      <FormField id="message" label="Additional Message" hint="Anything else that would help us prepare for your appointment." error={errors.message?.message}>
        <textarea
          id="message"
          rows={4}
          className={inputClasses}
          aria-describedby="message-hint"
          {...register("message")}
        />
      </FormField>

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Submitting…
          </>
        ) : (
          <>
            <Send className="h-5 w-5" aria-hidden="true" />
            Request Appointment
          </>
        )}
      </Button>

      <p className="text-xs text-neutral-500">
        This form does not connect to a live booking system yet. Your request is captured for our team to follow up
        with you directly — it is not an automatic confirmation.
      </p>
    </form>
  );
}

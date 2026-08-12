import type { AppointmentFormValues, ContactFormValues } from "@/types";

/**
 * SUBMISSION SERVICE ABSTRACTION
 * ------------------------------------------------------------
 * No backend has been chosen yet for this project. This module
 * is the ONLY place that knows how a form submission is
 * delivered — every form calls these functions instead of
 * talking to a transport directly.
 *
 * Current behavior: logs the payload locally and resolves
 * successfully after a short simulated delay. Nothing is sent
 * anywhere and nothing is persisted.
 *
 * To connect a real backend, replace the body of each function
 * below with a call to your chosen transport, for example:
 *
 *   - Email:     POST to an email API (e.g. Resend, SendGrid) from
 *                a serverless function — never call an email
 *                provider directly from the browser with a secret key.
 *   - Supabase:  supabase.from('appointments').insert(payload)
 *   - Firebase:  addDoc(collection(db, 'appointments'), payload)
 *   - Custom API: fetch(`${import.meta.env.VITE_API_URL}/appointments`, { method: 'POST', body: ... })
 *
 * Keep the function signatures the same so no form component
 * needs to change.
 */

export class SubmissionError extends Error {}

const SIMULATED_LATENCY_MS = 900;

export async function submitAppointmentRequest(values: AppointmentFormValues): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, SIMULATED_LATENCY_MS));

  // eslint-disable-next-line no-console
  console.info("[submissionService] Appointment request captured (no backend connected yet):", values);
}

export async function submitContactMessage(values: ContactFormValues): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, SIMULATED_LATENCY_MS));

  // eslint-disable-next-line no-console
  console.info("[submissionService] Contact message captured (no backend connected yet):", values);
}

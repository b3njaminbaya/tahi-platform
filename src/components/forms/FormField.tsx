import type { ReactNode } from "react";
import { AlertCircle } from "lucide-react";

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
}

/**
 * Label + error/hint wrapper. The input passed as `children` is
 * responsible for its own id/aria-describedby/aria-invalid —
 * matching the ids this component derives (`${id}-hint`,
 * `${id}-error`) — since react-hook-form's `register` needs to
 * own those props directly on the input.
 */
export function FormField({ id, label, error, hint, required, children }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-neutral-800">
        {label}
        {required ? (
          <span className="text-error-600" aria-hidden="true">
            {" "}
            *
          </span>
        ) : (
          <span className="ml-1 font-normal text-neutral-400">(optional)</span>
        )}
      </label>
      {hint ? (
        <p id={`${id}-hint`} className="mb-1.5 text-xs text-neutral-500">
          {hint}
        </p>
      ) : null}
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1.5 flex items-center gap-1.5 text-sm text-error-600">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      ) : null}
    </div>
  );
}

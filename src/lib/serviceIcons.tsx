import { HeartPulse, Activity, Apple, TestTube, Stethoscope, HandHeart, MessagesSquare, type LucideIcon } from "lucide-react";

export const serviceIcons: Record<string, LucideIcon> = {
  "nursing-care": HeartPulse,
  physiotherapy: Activity,
  nutrition: Apple,
  "laboratory-services": TestTube,
  "doctor-appointments": Stethoscope,
  "palliative-care": HandHeart,
  counseling: MessagesSquare,
};

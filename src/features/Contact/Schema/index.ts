import { z } from "zod";

import {
  RegExpMatcher,
  englishDataset,
  englishRecommendedTransformers,
} from "obscenity";

const matcher = new RegExpMatcher({
  ...englishDataset.build(),
  ...englishRecommendedTransformers,
});

export const contactSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .refine((val) => !matcher.hasMatch(val), {
      message: "Keep it clean!",
    }),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .refine((val) => !matcher.hasMatch(val), {
      message: "Tone it down!",
    }),
  email: z.string().email("Invalid email address"),
  message: z
    .string()
    .min(1, "Message is required")
    .refine((val) => !matcher.hasMatch(val), {
      message:
        "Hey, let's keep the conversation polite! No spicy language here.",
    }),
});

export type ContactFormData = z.infer<typeof contactSchema>;

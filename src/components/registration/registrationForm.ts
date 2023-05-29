import * as z from "zod";

export const categories = ["Heren", "Dames"] as const;
export const subCategoriesMale = [
  "U12 Jongens",
  "U14 Jongens",
  "U16 Jongens",
  "U18 + Seniors",
] as const;
export const subCategoriesFemale = [
  "U12 Meisjes",
  "U14 Meisjes",
  "U16 Meisjes",
  "U18 + Dames",
] as const;

export const registrationForm = z.object({
  category: z.enum(categories),
  subCategory: z.union([z.enum(subCategoriesMale), z.enum(subCategoriesFemale)]),
  name: z.string(),
  captain: z.object({
    name: z.string(),
    phone: z.string(),
    email: z.string().email(),
    birthday: z.string(),
    isPlayer: z.boolean(),
  }),
  players: z.object({ name: z.string(), birthday: z.string() }).array(),
});

export type TRegistrationForm = z.infer<typeof registrationForm>;

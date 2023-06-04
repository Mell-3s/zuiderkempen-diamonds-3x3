import * as z from "zod";

const subCategoriesMale = ["U12 Jongens", "U14 Jongens", "U16 Jongens", "U18 + Seniors"] as const;
const subCategoriesFemale = ["U12 Meisjes", "U14 Meisjes", "U16 Meisjes", "U18 + Dames"] as const;
export const categoriesTabs = [
  {
    category: "Jongens",
    subCategories: subCategoriesMale,
  },
  {
    category: "Dames",
    subCategories: subCategoriesFemale,
  },
];

export const registrationForm = z.object({
  category: z.enum([...subCategoriesMale, ...subCategoriesFemale]),
  name: z.string().min(3),
  captain: z.object({
    name: z.string().min(3),
    email: z.string().email(),
    birthday: z.string().min(3),
  }),
  players: z
    .object({ name: z.string().min(3), birthday: z.string().min(3) })
    .array()
    .min(4)
    .max(4),
});

export type TRegistrationForm = z.infer<typeof registrationForm>;

import emailjs from "@emailjs/browser";
import * as z from "zod";

function printPlayers(players: TPlayers): string {
  let message = "";
  players.forEach((player, i) => (message += `${i + 1}) ${player.name}, ${player.birthday}\n`));
  return message;
}

export function sendMail(form: TRegistrationForm) {
  return emailjs.send(
    "service_opovhpk",
    "template_eiqhlnc",
    {
      name: form.name,
      category: form.category,
      captain_name: form.captain.name,
      captain_email: form.captain.email,
      captain_birthday: form.captain.birthday,
      players: printPlayers(form.players),
    },
    "ZodAGtnrV4h9QOjTT",
  );
}

const subCategoriesMale = [
  "U12 Jongens (2012-2013)",
  "U14 Jongens (2010-2011)",
  "U16 Jongens (2008-2009)",
  "U18 + Seniors",
] as const;
const subCategoriesFemale = [
  "U12 Meisjes (2012-2013)",
  "U14 Meisjes (2010-2011)",
  "U16 Meisjes (2008-2009)",
  "U18 + Dames",
] as const;
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

const players = z
  .object({ name: z.string().min(3), birthday: z.string().min(3) })
  .array()
  .min(3)
  .max(4);

type TPlayers = z.infer<typeof players>;

export const registrationForm = z.object({
  category: z.enum([...subCategoriesMale, ...subCategoriesFemale]),
  name: z.string().min(3),
  captain: z.object({
    name: z.string().min(3),
    email: z.string().email(),
    birthday: z.string().min(3),
  }),
  players,
});

export type TRegistrationForm = z.infer<typeof registrationForm>;

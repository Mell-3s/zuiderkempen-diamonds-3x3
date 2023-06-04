import emailjs from "@emailjs/browser";
import * as z from "zod";

function printPlayers(players: TPlayers): string {
  let message = "";
  players.forEach((player, i) => (message += `${i}) ${player.name}, ${player.birthday} `));
  return message;
}

export function sendMail(form: TRegistrationForm) {
  emailjs
    .send(
      "service_it2al0t",
      "template_dp1wurc",
      {
        name: form.name,
        category: form.category,
        "captain.name": form.captain.name,
        "captain.email": form.captain.email,
        "captain.birthday": form.captain.birthday,
        players: printPlayers(form.players),
      },
      "ZodAGtnrV4h9QOjTT",
    )
    .then(() => window.alert("Uw inschrijving is verzonden!"))
    .catch(() =>
      window.alert("Het is niet gelukt om uw inschrijving te versturen, probeer later opnieuw!"),
    );
}

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

const players = z
  .object({ name: z.string().min(3), birthday: z.string().min(3) })
  .array()
  .min(4)
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

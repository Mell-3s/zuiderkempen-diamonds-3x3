import * as z from 'zod';

export const categories = ['U12 Jongens', 'U14 Jongens', 'U16 Jongens', 'U18 + Seniors'] as const;

export const registrationForm = z.object({
  category: z.enum(categories),
  name: z.string().min(3, { message: 'Naam moet minstens 3 karakters lang zijn' }),
  captain: z.object({
    name: z.string().min(3, { message: 'Naam moet minstens 3 karakters lang zijn' }),
    phone: z.string().min(1, { message: 'GSM nummer is verplicht' }),
    email: z.string().email({ message: 'Dit is geen geldige email' }),
  }),
  players: z
    .object({
      name: z.string().min(3, { message: 'Naam moet minstens 3 karakters lang zijn' }),
      birthday: z.string().min(1, { message: 'Geboortedatum is verplicht' }),
    })
    .array()
    .min(2, { message: 'Je moet minstens 2 andere teamleden hebben' }),
});

export type TRegistrationForm = z.infer<typeof registrationForm>;

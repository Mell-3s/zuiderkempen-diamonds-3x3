import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useMutation } from "react-query";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Input,
  Radio,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";

import { Succeeded } from "..";
import { categoriesTabs, registrationForm, sendMail, TRegistrationForm } from "./registrationForm";

function Registration() {
  const [succeeded, setSucceeded] = useState<boolean>(false);
  const {
    handleSubmit,
    register,
    setValue,
    control,
    formState: { errors },
    watch,
  } = useForm<TRegistrationForm>({
    resolver: zodResolver(registrationForm),
  });
  const { fields, append } = useFieldArray({
    control,
    name: "players",
  });
  const { isLoading, mutate } = useMutation("sendMail", sendMail, {
    onError: () => {
      window.alert("Het is niet gelukt om uw inschrijving te versturen, probeer later opnieuw!");
    },
    onSuccess: () => setSucceeded(true),
  });

  return (
    <section className="container p-8">
      {succeeded ? (
        <Succeeded />
      ) : (
        <>
          <h3 className="text-2xl font-bold text-red-500">Team details</h3>
          <form onSubmit={handleSubmit(form => mutate(form))}>
            <h4 className="mb-4 mt-8 text-xl font-bold">Categorie</h4>
            <Tabs value={categoriesTabs[0].category}>
              <TabsHeader>
                {categoriesTabs.map(({ category }) => (
                  <Tab key={category} value={category}>
                    {category}
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody>
                {categoriesTabs.map(({ category, subCategories }) => (
                  <TabPanel key={category} value={category}>
                    <div className="flex flex-col justify-between md:flex-row">
                      {subCategories.map(subCategory => (
                        <Radio
                          label={subCategory}
                          color="red"
                          id={subCategory}
                          key={subCategory}
                          name="category"
                          onChange={() => setValue("category", subCategory)}
                        />
                      ))}
                    </div>
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
            <h4 className="mb-4 mt-8 text-xl font-bold">Team naam</h4>
            <Input
              label="Volledige naam van het team"
              color="red"
              error={!!errors?.name}
              {...register("name")}
            />
            <h4 className="mt-8 text-xl font-bold">Aanspreekpunt / Captain </h4>
            <p>Het aanspreekpunt/captain van het team zal alle verdere communicatie ontvangen.</p>
            <div className="mt-4 flex flex-col gap-4 md:flex-row">
              <Input
                label="Volledige naam"
                color="red"
                error={!!errors?.name}
                {...register("captain.name")}
              />
              <Input
                label="Email"
                color="red"
                type="email"
                error={!!errors?.captain?.email}
                {...register("captain.email")}
              />
              <Input
                type="date"
                label="Geboortedatum"
                color="red"
                error={!!errors?.captain?.birthday}
                {...register("captain.birthday")}
              />
            </div>
            <h4 className="mt-8 text-xl font-bold">Spelers</h4>
            <p>
              Gelieven alle spelers van het team in te vullen. Het team moet minstens bestaan uit 3
              spelers en maximum uit 4.
            </p>
            <p className="mb-4">
              Als het aanspreekpunt/captain ook een speler is van het team gelieven deze dan ook
              hier nog in te vullen.
            </p>
            <div>
              {fields.map((_, i) => (
                <div
                  key={`player-${i}`}
                  className="mb-4 flex flex-col gap-4 bg-gray-100 p-4 md:flex-row"
                >
                  <Input
                    label="Volledige naam"
                    color="red"
                    error={!!errors?.players?.[i]?.name}
                    {...register(`players.${i}.name`)}
                  />
                  <Input
                    type="date"
                    label="Geboortedatum"
                    color="red"
                    error={!!errors?.players?.[i]?.birthday}
                    {...register(`players.${i}.birthday`)}
                  />
                </div>
              ))}
            </div>
            <Button
              color="red"
              variant="outlined"
              onClick={() => append({ birthday: "", name: "" })}
              disabled={fields.length >= 4 || isLoading}
              className="w-full md:w-auto"
            >
              Speler toevoegen
            </Button>
            <hr className="my-8" />
            <div className="flex flex-col justify-between md:flex-row">
              <div>
                <span className="font-bold text-red-500">Categorie:</span>
                <span className="ml-2">{watch("category") ?? "/"}</span>
              </div>
              <div>
                <span className="font-bold text-red-500">Aantal deelnemers:</span>
                <span className="ml-2">{watch("players")?.length}</span>
              </div>
              <div>
                <span className="font-bold text-red-500">Inschrijving:</span>
                <span className="ml-2">&euro;15</span>
              </div>
              <Button color="red" type="submit" className="mt-4 md:m-0">
                Inschrijven
              </Button>
            </div>
          </form>
        </>
      )}
    </section>
  );
}

export default Registration;

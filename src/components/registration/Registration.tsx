import { useState } from "react";

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

import { categoriesTabs } from "./registrationForm";

function Registration() {
  const [playerCount, setPlayerCount] = useState<number>(0);

  return (
    <section className="container p-8">
      <h3 className="text-2xl font-bold text-red-500">Team details</h3>
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
                    name="subCategory"
                    id={subCategory}
                    key={subCategory}
                  />
                ))}
              </div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
      <h4 className="mb-4 mt-8 text-xl font-bold">Team naam</h4>
      <Input label="Volledige naam van het team" color="red" />
      <h4 className="mt-8 text-xl font-bold">Aanspreekpunt / Captain </h4>
      <p>Het aanspreekpunt van het team zal alle verdere communicatie ontvangen.</p>
      <div className="mt-4 flex flex-col gap-4 md:flex-row">
        <Input label="Volledige naam" color="red" />
        <Input label="Email" color="red" type="email" />
        <Input type="date" label="Geboortedatum" color="red" />
      </div>
      <h4 className="mt-8 text-xl font-bold">Spelers</h4>
      <p>
        Gelieven alle spelers van het team in te vullen. Het team moet minstens bestaan uit 3
        spelers en maximum uit 4.
      </p>
      <p className="mb-4">
        Als het aanspreekpunt ook een speler is van het team gelieven deze dan ook hier nog in te
        vullen.
      </p>
      <div>
        {Array.from(Array(playerCount), (_, i) => (
          <div key={`player-${i}`} className="mb-4 flex flex-col gap-4 bg-gray-100 p-4 md:flex-row">
            <Input label="Volledige naam" color="red" />
            <Input type="date" label="Geboortedatum" color="red" />
          </div>
        ))}
      </div>
      <Button
        color="red"
        variant="outlined"
        onClick={() => setPlayerCount(prevState => ++prevState)}
        disabled={playerCount >= 4}
      >
        Speler toevoegen
      </Button>
    </section>
  );
}

export default Registration;

function Intro() {
  return (
    <section className="container flex flex-col p-8 md:flex-row">
      <div>
        <h2 className="text-3xl font-bold">Wat kan je verwachten?</h2>
        <hr className="my-2 w-16 rounded border-y-4 border-red-500" />
        <p>
          Op zaterdag 1 juli organiseert Zuiderkempen Diamonds hun eerste 3X3 tornooi in het
          Sportpark Joris Verhaegen te Hulshout. Ben jij de nieuwe Thibaut Vervoort of Julie Vanloo?
          Schrijf je dan snel in door onderstaande invulformulier in te vullen! Verdere informatie
          ontvang je via het opgegeven emailadres.
        </p>
      </div>
      <img src="/logo.jpg" alt="Logo Zuiderkempen Diamonds" width={200} className="self-center" />
    </section>
  );
}

export default Intro;

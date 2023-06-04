function Footer() {
  return (
    <footer className="bg-black">
      <div className="container p-8">
        <h2 className="text-3xl font-bold text-white"> Algemene info</h2>
        <hr className="my-2 w-16 rounded border-y-4 border-red-500" />
        <p className="text-white">
          Het tornooi gaat door in het Sportpark Joris Verhaegen te Hulshout (Industriepark 3, 2235
          Hulshout). Naast veel sportplezier zal er ook een hamburgerkraam aanwezig zijn alsook een
          springkasteel. De winnaar van het tornooi ontvangt een mooie prijs!
        </p>
        <hr className="my-4" />
        <p className="text-xs text-white">Copyright &copy; DIVIME</p>
      </div>
    </footer>
  );
}

export default Footer;

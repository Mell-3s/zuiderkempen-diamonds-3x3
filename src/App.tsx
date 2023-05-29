import { Footer, Header, Intro } from "./components";

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <hr className="container" />
      </main>
      <Footer />
    </>
  );
}

export default App;

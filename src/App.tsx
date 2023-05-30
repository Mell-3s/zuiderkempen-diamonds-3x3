import { Footer, Header, Intro, Registration } from "./components";

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <hr className="container" />
        <Registration />
      </main>
      <Footer />
    </>
  );
}

export default App;

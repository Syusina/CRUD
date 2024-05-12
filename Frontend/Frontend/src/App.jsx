import Header from "./components/Header";
import FormData from './components/FormData';
import ListOfResult from './components/ListOfResult';
import Footer from './components/Footer';
import "./styles/App.css";

function App() {

  return (
    <>
     <Header />
     <main>
      <FormData />
      <ListOfResult />
     </main>
     <Footer />
    </>
  )
}

export default App;

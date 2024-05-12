import FormData from '../components/FormData';
import ListOfResult from '../components/ListOfResult';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from "../components/Header";

function RouteData() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div>
        <FormData />
        <button onClick={() => navigate("/")}>Go back</button>
      </div>
    </>
  )
}

export default RouteData;

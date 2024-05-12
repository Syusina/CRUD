import { useNavigate } from 'react-router-dom';

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <>
      <h1>This page not found</h1>
      <button onClick={() => navigate("/")}>Go back</button>
    </>
  )
}

export default ErrorPage;

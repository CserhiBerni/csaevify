import {
  useNavigate,
  isRouteErrorResponse,
  useRouteError,
} from "react-router-dom";
import errorImage from '../../images/error-image.gif'
import './ErrorPage.css'

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError() as Error;

  if (!isRouteErrorResponse(error)) {
    return null;
  }

  return (
    <div className="error-page">
      <h1>Nem várt hiba történt!</h1>
      <p>{error.data}</p>
      <img src={errorImage} alt="error-image" />
      <button onClick={() => navigate("/")}>Vissza</button>
    </div>
  );
};

export default ErrorPage;

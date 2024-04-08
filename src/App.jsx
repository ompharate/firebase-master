import { UserAuth } from "./context/AuthContext";
import NonUserRoutes from "./routes/NonUserRoutes.jsx";
import UserRoutes from "./routes/UserRoutes.jsx";
function App() {
  const { isLoggedOut } = UserAuth();
  return <div>{isLoggedOut ? <NonUserRoutes /> : <UserRoutes />}</div>;
}

export default App;

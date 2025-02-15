import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
import { isTokenActive } from "../utils/helper";


const withAuthRedirect =
  (RenderComponent, NavigateComponent) =>
  ({ to, replace, ...props }) => {
    // const { token } = useContext(AuthContext);

    return true ? (
      <RenderComponent {...props} />
    ) : (
      <NavigateComponent {...{ to, replace }} />
    );
  };

export default withAuthRedirect;

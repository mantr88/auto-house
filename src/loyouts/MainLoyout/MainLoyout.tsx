import { Outlet } from "react-router-dom";
import { Container } from "./MainLoyout.styled";
import { Navigation } from "../Navigation/Navigation";
import { GlobalStyle } from "../../services/GlobalStyle";

const MainLayout = () => {
  return (
    <Container>
      <Navigation />
      <Outlet />
      <GlobalStyle />
    </Container>
  );
};

export default MainLayout;

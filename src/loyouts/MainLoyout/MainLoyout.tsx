import { Outlet } from "react-router-dom";
import { Container } from "./MainLoyout.styled";
import { Navigation } from "../Navigation/Navigation";

const MainLayout = () => {
  return (
    <Container>
      <Navigation />
      <Outlet />
    </Container>
  );
};

export default MainLayout;

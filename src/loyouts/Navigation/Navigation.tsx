import { Header, Link } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <Header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
    </Header>
  );
};

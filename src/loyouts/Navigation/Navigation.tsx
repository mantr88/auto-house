import { Header, Link } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <Header>
      <nav>
        <Link to="/auto-house/">Home</Link>
        <Link to="/auto-house/catalog">Catalog</Link>
        <Link to="/auto-house/favorites">Favorites</Link>
      </nav>
    </Header>
  );
};

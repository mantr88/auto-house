import { ContentContainer, Image } from "./NotFound.styled";

function NotFound() {
  return (
    <ContentContainer>
      <h2>No favorited cars</h2>
      <Image
        src="https://media.istockphoto.com/id/1186972461/photo/generic-white-car-isolated-on-white-background.jpg?s=170667a&w=0&k=20&c=YBXP60_tIGgrs4LRT6oS64PYFlqBhN1Pqeh6heV9UFs="
        width="528px"
      />
    </ContentContainer>
  );
}

export default NotFound;

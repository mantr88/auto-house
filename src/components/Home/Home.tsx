import { Link } from "react-router-dom";
import Asistance from "../../ui/Icons/Asistance";
import Documents from "../../ui/Icons/Documents";
import GoodCar from "../../ui/Icons/GoodCar";
import PriceIcon from "../../ui/Icons/PriceIcon";
import {
  Hero,
  HeroTitle,
  HeroText,
  Text,
  TextContainer,
  TextWrap,
  Title,
  TopImg,
  DescriptionSection,
  Advantages,
  AdvTitle,
  AdvList,
  AdvItem,
  ItemTitle,
  ItemText,
  GoLink,
} from "./Home.styles";

function HomeMain() {
  return (
    <div>
      <Hero>
        <TextContainer>
          <HeroTitle>
            Cars <br />
            for your pleasure on the road
          </HeroTitle>
          <HeroText>
            With our cars, you will get an unsurpassed travel experience and
            excellent service that will not leave you indifferent to our company
          </HeroText>
        </TextContainer>
      </Hero>
      <DescriptionSection>
        <TopImg src="https://media.istockphoto.com/id/1344954298/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B5%D0%BC%D1%8C%D1%8F-%D1%81-%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%BE%D0%B9-%D0%B2-%D0%BC%D0%B0%D1%88%D0%B8%D0%BD%D0%B5.jpg?s=612x612&w=0&k=20&c=PcM7TQxYuDovwHUKnvLv3nCXTeuB6VJDHMWxCWRX3IQ=" />
        <TextWrap>
          <Title>Car rental is reliable, comfortable and profitable!</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sed
            nulla at illo corporis placeat beatae accusantium, hic perferendis
            sequi vel ratione molestiae debitis corrupti impedit, ab pariatur
            odio laudantium. Velit minima sapiente, excepturi maxime dolores
            saepe expedita vitae cupiditate ab! Incidunt nemo velit ducimus
            blanditiis nostrum. Ad deserunt enim expedita provident doloremque
            esse optio nihil. Corrupti quibusdam, eaque necessitatibus suscipit,
            consectetur eum laudantium consequatur nulla voluptatem, nostrum
            molestias? Tempore recusandae qui dignissimos, fuga maxime corporis,
            laborum voluptas quam, eveniet nam voluptatem. Quo incidunt
            excepturi quibusdam eius, adipisci iusto quasi architecto dolores
            sed quae facilis explicabo nulla ?
          </Text>
        </TextWrap>
      </DescriptionSection>
      <Advantages>
        <AdvTitle>Five reasons to rent a car from us:</AdvTitle>
        <AdvList>
          <AdvItem>
            <PriceIcon />
            <ItemTitle>Affordable prices</ItemTitle>
            <ItemText>Car rental with us it's always profitable</ItemText>
          </AdvItem>
          <AdvItem>
            <Documents />
            <ItemTitle>Minimal bureaucracy</ItemTitle>
            <ItemText>Minimum documents for rent</ItemText>
          </AdvItem>
          <AdvItem>
            <Asistance />
            <ItemTitle>Assistance</ItemTitle>
            <ItemText>Support on the road 24 hours a day</ItemText>
          </AdvItem>
          <AdvItem>
            <GoodCar />
            <ItemTitle>Technically good cars</ItemTitle>
            <ItemText>Our cars pass regular technical inspection</ItemText>
          </AdvItem>
          <AdvItem>
            <Documents />
            <ItemTitle>Free delivery to the client</ItemTitle>
            <ItemText>When renting for more than 2 days</ItemText>
          </AdvItem>
        </AdvList>
      </Advantages>
      <GoLink>
        <Link to={"/auto-house/catalog"}>Go to rent a car!</Link>
      </GoLink>
    </div>
  );
}

export default HomeMain;

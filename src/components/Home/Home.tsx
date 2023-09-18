import { Hero, Text, TextWrap, Title, TopImg, TopSection } from "./Home.styles";

function HomeMain() {
  return (
    <div>
      <TopSection>
        <Hero />
        <TopImg src="https://media.istockphoto.com/id/1344954298/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B5%D0%BC%D1%8C%D1%8F-%D1%81-%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%BE%D0%B9-%D0%B2-%D0%BC%D0%B0%D1%88%D0%B8%D0%BD%D0%B5.jpg?s=612x612&w=0&k=20&c=PcM7TQxYuDovwHUKnvLv3nCXTeuB6VJDHMWxCWRX3IQ=" />
        <TextWrap>
          <Title>Car rental is reliable, comfortable and profitable!</Title>
          <Text>
            Rent for a business meeting, for vacation, in case of car repair and
            simply for comfortable movement at any time. You can choose and book
            a car for the desired period online, at any convenient time from a
            few hours to several months.
          </Text>
        </TextWrap>
      </TopSection>
    </div>
  );
}

export default HomeMain;

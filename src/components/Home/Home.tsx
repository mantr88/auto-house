import { Text, TextWrap, Title, TopImg, TopSection } from "./Home.styles";

function HomeMain() {
  return (
    <div>
      <TopSection>
        <TopImg src="https://auto-time.com.ua/wp-content/uploads/2021/04/ride.png" />
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

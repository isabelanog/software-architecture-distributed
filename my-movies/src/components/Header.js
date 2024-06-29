import { HeaderContainer } from "../style/HeaderContainer";
import { Title } from "../style/Title";
import { MainMenu } from "./MainMenu";

export const Header = () => (
  <HeaderContainer>
    <Title>The most popular movies from The Movie Database API</Title>

    <MainMenu />
  </HeaderContainer>
);

import styled from 'styled-components/macro';
import { Header } from './Header';
import { Container } from 'components';
import { Intro } from './Intro';

export const MainBanner = () => (
    <StyledMainBanner>
        <Container>
            <Header />
            <Intro />
        </Container>
    </StyledMainBanner>
);

const StyledMainBanner = styled.section`
    height: 100vh;
`;

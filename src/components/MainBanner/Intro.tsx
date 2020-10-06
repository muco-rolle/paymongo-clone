import { Grid, Text } from '@geist-ui/react';
import { Container } from 'next/app';
import styled from 'styled-components/macro';

export const Intro = () => (
    <StyledIntro>
        <Container>
            <Grid.Container gap={2} justify="center">
                <Grid xs={12} className="intro-img">
                    <img src="/images/intro.png" alt="paymongo payments" />
                </Grid>
                <Grid xs={12} className="intro-text">
                    <Text h1>
                        <span>Get paid online</span> <br />
                        <span>without the hassle</span>
                    </Text>

                    <Text p size="1.25rem">
                        PayMongo makes it easy for you to run an online
                        business. We help you get paid by your customers, any
                        time and anywhere.
                    </Text>

                    <button>Get started for free</button>
                </Grid>
            </Grid.Container>
        </Container>
    </StyledIntro>
);

const StyledIntro = styled.div`
    .intro-img {
        margin-top: -105px;
        img {
            max-width: 450px;
            z-index: -1;
        }
    }

    .intro-text {
        align-self: center;
    }
`;

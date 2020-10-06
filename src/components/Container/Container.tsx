import styled from 'styled-components/macro';
import { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
}
export const Container = ({ children }: ContainerProps) => (
    <StyledContainer>{children}</StyledContainer>
);

const StyledContainer = styled.div`
    max-width: 1025px;
    margin: 0 auto;
`;

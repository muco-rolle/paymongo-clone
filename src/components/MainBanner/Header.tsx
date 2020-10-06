import NextLink from 'next/link';
import styled from 'styled-components/macro';
import { color, size } from 'utils/theme';

export const Header = () => (
    <StyledHeader>
        <div className="logo-container">
            <NextLink href="/">
                <a>
                    <img src="/images/logo.png" alt="mongopay" />
                </a>
            </NextLink>
        </div>

        <nav>
            <ul>
                <li>
                    <NextLink href="/features">
                        <a>Features</a>
                    </NextLink>
                </li>

                <li>
                    <NextLink href="/pricing">
                        <a>Pricing</a>
                    </NextLink>
                </li>

                <li>
                    <NextLink href="/developers">
                        <a>Developers</a>
                    </NextLink>
                </li>
            </ul>
        </nav>
    </StyledHeader>
);

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: ${size(16)} ${size(5)};

    .logo-container {
        z-index: 10;
        img {
            display: inline-block;
            max-width: 260px;
        }
    }

    ul {
        display: flex;

        li {
            &::before {
                display: none;
            }

            &:not(:last-child) {
                margin-right: 40px;
            }
        }

        li a {
            color: ${color('success')};
            font-weight: 500;
        }
    }
`;

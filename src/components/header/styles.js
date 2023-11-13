import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({ theme }) => css`

        width: 100%;
        height: 70px;
        background-color: ${theme.colors.primary};
        display: flex;
        align-items: center;
        padding: ${theme.spacings.small};
        justify-content: space-between;
        h1 {
            color: ${theme.colors.white}}
        }

        div {
            color: #333;
            small {
                font-weight: ${theme.font.bold};
            }
        }
              
    `}
`;

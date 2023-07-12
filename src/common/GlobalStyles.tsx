import { Global, css } from "@emotion/react";

export const GlobalStyles = () => (
  <Global
    styles={css`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: Noto Sans CJK KR, -apple-system, BlinkMacSystemFont, SUIT,
        Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
        Helvetica Neue, sans-serif;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      * {
        box-sizing: border-box;
      }
    `}
  />
);

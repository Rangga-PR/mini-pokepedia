import { Global, css } from '@emotion/react';

export const globalStyles = (
  <Global
    styles={css`
      @font-face {
        font-family: Press-Start-2P;
        src: url('/font/PressStart2P-Regular.ttf');
        font-display: swap;
      }

      @font-face {
        font-family: Roboto;
        src: url('/font/Roboto-Light.ttf');
        font-display: swap;
      }

      @font-face {
        font-family: Roboto;
        src: url('/font/Roboto-Bold.ttf');
        font-weight: bold;
        font-display: swap;
      }

      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto', -apple-system, BlinkMacSystemFont, Segoe UI,
          Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
          Helvetica Neue, sans-serif;
      }

      a {
        color: inherit;
        text-decoration: none;
      }
    `}
  />
);

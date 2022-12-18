import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <script src="http://localhost:3001/build/mainComponent.js" />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

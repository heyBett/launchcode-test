import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Wet Bat Dashboard" />
        <meta property="og:description" content="Wet Bat Dashboard" />
        <meta property="og:site_name" content="Wet Bat Dashboard" />
        <meta property="og:url" content="https://wetbat-test.vercel.app" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />

        <meta charSet="utf-8" />
        <meta name="description" content="Wet Bat Dashboard"></meta>
        <meta name="keywords" content="Wet Bat" />
        <meta
          name="author"
          content="Luiz Bett - UX Engineer at Copa Design California"
        />
      </Head>
      <body>
        <Main></Main>
        <NextScript />
      </body>
    </Html>
  );
}

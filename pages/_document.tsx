import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="scroll-smooth">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
          integrity="sha512-1cK78a1o+ht2JcaW6g8OXYwqpev9+6GqOkz9xmBN9iUUhIndKtxwILGWYOSibOKjLsEdjyjZvYDq/cZwNeak0w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <meta
          name="keywords"
          content="Next, NextJS, React, JavaScript, Personal site, Sahab Ul Ferdous, Portfolio"
        ></meta>
        <meta
          name="description"
          content="Personal portfolio website of Sahab Ul Ferdous"
        ></meta>
        <meta name="author" content="Sahab Ul Ferdous"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

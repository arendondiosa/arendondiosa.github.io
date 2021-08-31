import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta property="og:title" content="" />
          <meta property="og:image" content="" />
          <meta property="og:url" content="" />
          <meta property="og:site_name" content="" />
          <meta property="og:description" content="" />
          <meta name="twitter:title" content="" />
          <meta name="twitter:image" content="" />
          <meta name="twitter:url" content="" />
          <meta name="twitter:card" content="" />

          <link
            href="https://fonts.googleapis.com/css?family=Space+Mono"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Kaushan+Script"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

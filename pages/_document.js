import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

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

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap"
            rel="stylesheet"
          />

          <script defer src="assets/fontawesome/js/all.min.js"></script>

          <link
            id="theme-style"
            rel="stylesheet"
            href="assets/css/theme-1.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="assets/plugins/popper.min.js"></script>
          <script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;

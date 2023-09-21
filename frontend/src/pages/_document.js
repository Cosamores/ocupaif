import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";  // Import the Script component

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Load the Google Tag Manager script */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-WXYZ7W0SWY"
            strategy="afterInteractive"
          />
          {/* Load your custom analytics script */}
          <Script src="/analytics.js" strategy="afterInteractive" defer />
        </Head>
        <body>
          <Main />
          <div id="modal-root"></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

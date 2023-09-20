import Document, { Html, Head, Main, NextScript } from "next/document";

function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        <script
          async 
          type="next/script"
          src="https://www.googletagmanager.com/gtag/js?id=G-WXYZ7W0SWY"
        ></script>
        <script src="/analytics.js" defer></script>
      </Head>
      <body>
        <Main />
        <div id="modal-root"></div>
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = Document.getInitialProps;
MyDocument.renderDocument = Document.renderDocument;

export default MyDocument;

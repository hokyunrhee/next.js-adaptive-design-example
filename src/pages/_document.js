import Document, { Html, Head, Main, NextScript } from "next/document";
import { mobileDetect } from "../utils/mobile-detect";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, isMobile: mobileDetect(ctx.req) };
  }
  render() {
    const { isMobile } = this.props;

    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
        {isMobile ? (
          <script src="https://pay.naver.com/customer/js/mobile/naverPayButton.js" />
        ) : (
          <script src="https://pay.naver.com/customer/js/naverPayButton.js" />
        )}
      </Html>
    );
  }
}

export default MyDocument;

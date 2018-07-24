import Document, {Head, Main, NextScript} from 'next/document'

export default class CustomDocument extends Document {
  static async getInitProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render() {
    return (
      <html>
        <Head>
          <style>
            {`
              body{margin: 0}
            `}
          </style>
        </Head>
        <Main />
        <NextScript />
      </html>
    )
  }
}

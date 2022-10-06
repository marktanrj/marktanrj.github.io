import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

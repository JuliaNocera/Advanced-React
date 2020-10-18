import Head from 'next/head'

/* 
  All the tags you'd normally put in the Head tag of a document can go here
  To update the doc head, we use this <Head>{metadata}</Head> component from next.js
*/

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/static/favicon.png" />
    <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
    <title>Sick Fits!</title>
  </Head>
)

export default Meta


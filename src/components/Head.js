import React from "react";
import Helmet from "react-helmet";


const Head = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>MKTLR = Marketing + Web Development</title>
      
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png?v=8j8Enaex5O"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png?v=8j8Enaex5O"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png?v=8j8Enaex5O"/>
      <link rel="manifest" href="/manifest.webmanifest?v=8j8Enaex5O"/>
      <link rel="mask-icon" href="/icons/safari-pinned-tab.svg?v=8j8Enaex5O" color="#5bbad5"/>
      <link rel="shortcut icon" href="/icons/favicon.ico?v=8j8Enaex5O"/>
      <meta name="apple-mobile-web-app-title" content="MKTLR"/>
      <meta name="application-name" content="MKTLR"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="theme-color" content="#ffffff"/>
    </Helmet>
    );
};

export default Head;
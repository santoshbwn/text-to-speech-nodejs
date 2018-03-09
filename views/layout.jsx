import React from 'react';
import PropTypes from 'prop-types';
import { Header, Jumbotron } from 'watson-react-components';

// eslint-disable-next-line
const DESCRIPTION = 'This section reads out the product names obtained from the search results in ikea.com, out of which customers can select one or will have options to add more filters or naviagte back';

function Layout(props) {
  return (
    <html lang="en">
      <head>
        <title>Text-To-Speech - Ikea For All</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:title" content="Ikea For All" />
        <meta name="og:description" content={DESCRIPTION} />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon-96x96.png" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <link rel="stylesheet" href="/css/watson-react-components.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <Header
          mainBreadcrumbs="Text to Speech"
          mainBreadcrumbsUrl="https://www.ibm.com/watson/services/text-to-speech/"
          subBreadcrumbs="Ikea For All"
          subBreadcrumbsUrl="https://text-to-speech-demo.mybluemix.net"
        />
        <div id="root">
          {props.children}
        </div>
        <script type="text/javascript" src="js/bundle.js" />
        { props.bluemixAnalytics ? <script type="text/javascript" src="js/analytics.js" /> : null }
      </body>
    </html>
  );
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  bluemixAnalytics: PropTypes.bool.isRequired,
};

export default Layout;

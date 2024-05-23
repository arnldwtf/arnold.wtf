import { Helmet } from 'react-helmet-async';

const APP_NAME = 'arnoldwtf';

const Meta = () => {
  return (
    <Helmet>
      <title>arnold.wtf</title>
      <meta name='description' content='Starter website for arnold.wtf' />

      <meta name='application-name' content={APP_NAME} />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta name='apple-mobile-web-app-title' content={APP_NAME} />
      <meta name='format-detection' content='telephone=no' />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='theme-color' content='#FFFFFF' />

      <link rel='shortcut icon' href='/assets/glasses.gif' />
    </Helmet>
  );
};

export default Meta;

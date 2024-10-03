import Head from 'next/head';
import PropTypes from 'prop-types';

const AppHead = ({ title, description, keyword, image }) => (
  <Head>
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="keywords"
      content={`Jugunu Singh, web developer, portfolio, frontend developer, web developer, frontend enginer, Jugunu Singh, medan, Jugunu Singh portfolio, software enginer, ${keyword}`}
    />
    <link rel="shortcut icon" href="https://firebasestorage.googleapis.com/v0/b/portfolio-website-b268e.appspot.com/o/WhatsApp%20Image%202024-09-24%20at%2014.04.13.jpeg?alt=media&token=2354f327-79dd-4af2-a905-573aa9023509" type="image/x-icon" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/manifest.json" />
    <meta name="theme-color" content="#FFFFFF" />
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta
      name="google-site-verification"
      content="x_NCP81pzq_UseKnMEM1WLiZnzW-zbT8uW-qbscQUJM"
    />
  </Head>
);

AppHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keyword: PropTypes.string,
  image: PropTypes.string,
};

AppHead.defaultProps = {
  title: 'Jugunu.tech',
  description:
    'I am a student from Indonesia, who focuses on web development, especially frontend web development.',
  keyword: '',
  image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-website-b268e.appspot.com/o/WhatsApp%20Image%202024-09-24%20at%2014.04.13.jpeg?alt=media&token=2354f327-79dd-4af2-a905-573aa9023509',
};

export default AppHead;

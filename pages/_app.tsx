import '../styles/css/bootstrap.min.css';
import '../styles/css/tobii.min.css';
import '../styles/css/tiny-slider.css';
import '../styles/css/materialdesignicons.min.css';
import '../styles/css/swiper.min.css';
import '../styles/css/style.css';
import '../styles/css/style.min.css';
import '../styles/css/animate.css';
import Script from 'next/script';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* {env === 'production' ?? (
        <> */}
          {/* Global site tag (gtag.js) - Google Analytics */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-LHEWDEN345"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LHEWDEN345');
        `}
          </Script>
        {/* </>
      )} */}
      <Component {...pageProps} />
    </>
  );
}

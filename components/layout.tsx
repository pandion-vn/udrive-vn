import { WithChildren } from '@/types/shared';
import { Meta } from '@/types/seo';
import Head from 'next/head';
import Footer from './footer';
import Header from './header';

interface LayoutProps extends WithChildren {
  meta?: Meta;
}

const Layout = ({ meta, children }: LayoutProps) => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>{meta?.title ?? "Udrive.vn"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={meta?.description ?? "Any thing by car"} />
        <meta name="keywords" content={meta?.keywords ?? "Car, vehicle"} />
        <meta name="author" content="udrive.vn" />
        <meta name="email" content="info@pandion.vn" />
        <meta name="website" content="https://udrive.vn" />
        <meta name="version" content="v1.0.0" />
      </Head>
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;

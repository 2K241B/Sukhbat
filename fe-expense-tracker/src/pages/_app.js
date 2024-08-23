import Layout from '@/components/Layout';
import '@/styles/globals.css';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const Routes = ['/dashboard', '/records'];
  const isRoutes = Routes.includes(router.pathname);
  return isRoutes ? (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) : (
    <Component {...pageProps} />
  );
}

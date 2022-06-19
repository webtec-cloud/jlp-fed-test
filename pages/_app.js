import Layout from "../components/layout/layout";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout type="neitherworld">
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

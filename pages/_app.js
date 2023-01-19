import "antd/dist/antd.css";
import "../public/css/styles.css";
import '../public/css/navbar.css'
import '../public/css/hero.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "../context";
import 'tailwindcss/tailwind.css';
import { Layout } from "../components";


function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Layout>
      <ToastContainer position="top-center" />
      <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;

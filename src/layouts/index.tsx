import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import Footer from "./Footer";
import Header from "./Header";
import styles from './index.less'
import { Outlet } from 'umi';
import {UserProvider} from "./UserProvider";
function getLibrary(provider: any) {
  const library = new Web3Provider(provider)
  library.pollingInterval = 8000
  return library
}
const BasicLayout = () => {
  return <UserProvider >
    <div className={styles.main}>
      <Header />
      <div style={{flex:'1 1 auto'}}>
        <Outlet />
      </div>
      <Footer />
    </div>
  </UserProvider>



}
export default BasicLayout;

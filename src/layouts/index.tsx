import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import Footer from "./Footer";
import Header from "./Header";
import styles from './index.less'
import { Outlet } from 'umi';
import { UserProvider } from "./UserProvider";
import { SettingOutlined } from "@ant-design/icons";
import LogoBlue from '@/assets/logoblue.svg'

function getLibrary(provider: any) {
  const library = new Web3Provider(provider)
  library.pollingInterval = 8000
  return library
}
const BasicLayout = () => {
  return <UserProvider >
    <div className={styles.main}>
      <Header />
      <div style={{ display:'flex',flexDirection:'row'}}>
          {/* Left */}
          <div className={styles.nav} style={{width:'72px',background:'#E0E0E0',padding:'20px'}}>
              <img src='/icon.svg'/>
              {/* <SettingOutlined style={{fontSize:'35px'}} /> */}
          </div>
          <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  </UserProvider>



}
export default BasicLayout;

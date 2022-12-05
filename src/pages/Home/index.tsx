import Wallet from "@/assets/wallet.png";
import Chat from "@/assets/chat.png";
import Dis from "@/assets/dis.jpg";
import { ReactComponent as LogoSVG } from '/public/logo.svg';

import FloatDiv from "./abc";
import Banner from './Banner';
import Footer from './Footer';
import styles from './index.less';
export default function IndexPage() {
  return (
    <div>
      <Banner />
      <div className='flex bg1'>
        <div className='item'>
          <img src={Wallet} />
          <div className={styles.text}>
            <h1>Keep your assets in the safest place</h1>
            <p>The users own their digital assets. Nobody including the project can take over their assets in Base Smart Contract Wallet.</p>
          </div>
        </div>
      </div>
      <div className='flex bg2'>
        <FloatDiv>
          <div className='item'>
            <div className={styles.text}>
              <h1>Chat directly to a wallet address</h1>
              <p>Blockchain instant messenger connected by wallets address is a fashionable tool for communication between users.</p>
            </div>
            <img src={Chat} />
          </div>
        </FloatDiv>

      </div>
      <div className='flex bg1'>
        <FloatDiv>
          <div className='item'>
            <img src={Chat} />
            <div className={styles.text}>
              <h1>Create a smart group to generate a DAO</h1>
              <p>The users as DAO members can interoperate with the smart group by their own wallets.</p>
            </div>
          </div>
        </FloatDiv>
      </div>
      <div className='flex bg2'>
        <FloatDiv>
          <div className='item'>
            <div className={styles.text}>
              <h1>Own the interchain social data in the decentralized storage</h1>
              <p>The users own their social data stored in IPFS during and after the interchain communication.</p>
            </div>
            <img src={Dis} />
          </div>
        </FloatDiv>
      </div>
      <div className='bg3'>
        <div className={styles.footer}>
          <LogoSVG />
          <Footer />
        </div>
      </div>
    </div>
  );
}

import { useEffect, useRef } from 'react';
import styles from './index.less';

const Phone = () => {
  return (
    <div className={styles.banner}>
      <div className="phone">
        <div className="phone-back">
          <div className="phone-left-side">
            <div className="phone-antena"></div>
            <div className="phone-button top"></div>
            <div className="phone-button"></div>
            <div className="phone-button bottom"></div>
            <div className="phone-antena bottom"></div>
          </div>
          <div className="phone-bottom">
            <div className="phone-antena"></div>
            <div className="bottom-speaker">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="phone-screw">
              <div></div>
            </div>
            <div className="phone-charger"></div>
            <div className="phone-screw right">
              <div></div>
            </div>
            <div className="bottom-speaker right">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="phone-antena right"></div>
          </div>
        </div>
        <div className="phone-screen"></div>
        <div className="phone-display">
          <div className="phone-notch">
            <div className="phone-speaker"></div>
          </div>
          <div className="display-content">
            <div className="notifications-bar">
              <div className="time">9:41</div>
              <div className="range"></div>
              <div className="wifi"></div>
              <div className="battery"></div>
            </div>
            <div className="nav">
              <div className="messages"></div>
              <div className="phone-number">+7 (999) 222-22-22</div>
              <div className="menu"></div>
            </div>
            <div className="current-plan">
              <div className="plan">
                <div>
                  <div className="plan-header">CURRENT PLAN</div>
                  <div className="plan-price">
                    <span>$</span>29.95
                  </div>
                </div>
                <div className="plan-date">
                  <div>JAN 28TH</div>
                  <div>FEB 28TH</div>
                </div>
              </div>
              <div className="text-question">
                You spend $20 over traffic last month.
                <br />
                Do you want to change plan?
              </div>
            </div>
            <div className="plan-box">
              <div className="plan-options">
                <div>
                  <div>
                    15<span>GB</span>
                  </div>
                  <div>Internet</div>
                </div>
                <div>
                  <div>
                    1500<span>Mins</span>
                  </div>
                  <div>Within Russia</div>
                </div>
              </div>
              <div className="plan-text">
                <strong>Free calls</strong> within the network
              </div>
              <a className="change-plan" href="">
                Change plan
              </a>
            </div>
            <div className="plan-list">
              <div className="plan-limit">
                <div className="limit-text">
                  <div>
                    <strong>$3</strong>
                    <span>Until February 28</span>
                  </div>
                  <span className="limit-subtext">Unlimited Apps</span>
                </div>
                <div className="limit-icon"></div>
              </div>
              <div className="plan-limit">
                <div className="limit-text">
                  <div>
                    <strong>$0.15</strong>
                    <span>Per SMS</span>
                  </div>
                  <span className="limit-subtext">
                    Remove the limit for $1.5
                  </span>
                </div>
                <div className="limit-icon upgrade"></div>
              </div>
            </div>
            <div className="bottom-icons">
              <div className="chart">
                <div></div>
              </div>
              <div className="eye">
                <div></div>
              </div>
              <div className="equalizer">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="home-button"></div>
          </div>
        </div>
        <div className="phone-reflections">
          <div className="reflection-1"></div>
          <div className="reflection-2"></div>
          <div className="reflection-3"></div>
          <div className="reflection-4"></div>
          <div className="reflection-5"></div>
          <div className="reflection-6"></div>
          <div className="reflection-7"></div>
        </div>
      </div>
    </div>
  );
};

export default Phone;

import React from "react";

import IconApple from "./assets/apple.svg";
import IconAndroid from "./assets/robot.svg";
import IconFacebook from "./assets/facebook.svg";
import imageTikTok from "./assets/tiktok.svg";
import IconTwitter from "./assets/twitter.svg";
import IconPinterest from "./assets/pinterest.svg";
import IconInstagram from "./assets/instagram.svg";


import styles from "./PageFooter.module.scss";

const PageFooter = () => {

  return (
    <div className={styles.wrapper} data-testid="page-footer">
      <footer className={styles.container}>
        <section className={styles.install}>
            <button className={styles.button}>
              <img
                src={IconApple}
                className={styles.buttonIOS}
              />
            </button>
          
            <button className={styles.button}>
              <img
                src={IconAndroid}
                className={styles.buttonAndroid}
              />
            </button>
        </section>

        <section className={styles.social}>
          <ul>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={IconInstagram}
                  alt="Instagram"
                  width="22"
                  height="22"
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={IconFacebook} alt="Facebook" width="22" height="22" />
              </a>
            </li>

            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={IconTwitter} alt="Twitter" width="27" height="22" />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={imageTikTok} alt="TikTok" width="18" height="22" />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={IconPinterest}
                  alt="Pinterest"
                  width="22"
                  height="22"
                />
              </a>
            </li>
          </ul>
        </section>

        
        <section className={styles.contacts}>
          <ul>
            <li>
              <a href="#">
                Advertising Enquiries
              </a>
            </li>
            <li>
              <a href="#">
                Press Enquiries
              </a>
            </li>
            <li>
              <a href="#">
                Something else?
              </a>
            </li>
          </ul>
        </section>
        
        <section className={styles.links}>
          <div>
            <ul>
              <li>
                <a href="#">
                  About us
                </a>
              </li>
              <li>
                <a href="#">
                  Blog
                </a>
              </li>
              <li>
                <a href="#">
                  Medical Review
                </a>
              </li>

              <li>
                <a href="#">
                  Guidelines
                </a>
              </li>

            
              <li>
                <a href="#">
                  Offers
                </a>
              </li>
            
            
              <li>
                <a href="#">
                  Start Her
                </a>
              </li>
            

              <li>
                <a href="#">
                    Shop
                </a>
              </li>

              <li>
                <a href="#">
                  Peanut News
                </a>
              </li>

              <li>
                <a href="#">
                  Careers
                </a>
              </li>

              <li>
                <a href="#">
                  Terms
                </a>
              </li>
              <li>
                <a href="#">
                  Privacy
                </a>
              </li>

              <li>
                <a href="#">
                  Sitemap
                </a>
              </li>

              <li>
                <a href="#">
                  Download
                </a>
              </li>

              <li>
                <a href="#">
                  Due Date Calculator
                </a>
              </li>

              <li>
                <a href="#">
                  Chinese Gender Predictor
                </a>
              </li>

              <li>
                <a href="#">
                  Ovulation Calculator
                </a>
              </li>

              <li>&nbsp;</li>
            </ul>
          </div>
        </section>
        
        <section className={styles.language}>
          <ul>
            <li>
              <a href="#" className={styles.selected}>
                English
              </a>
            </li>
            <li>
              <a href="#">
                Spanish
              </a>
            </li>
          </ul>
        </section>

        <section className={styles.copyright}>
          <div>&copy; {new Date().getFullYear()} Peanut</div>
        </section>
      </footer>
    </div>
  );
};

export default PageFooter;

// import React from 'react'
// import css from './Footer.module.css'
// import Logo from '../../assets/logo.png'
// import {
//     InboxIcon,
//     PhoneIcon,
//     LocationMarkerIcon,
//     LoginIcon,
//     UsersIcon,
//     LinkIcon
// } from "@heroicons/react/outline"

// const Footer = () => {
//   return (
//     <div className={cFooterWrapper}>
//         <hr />
//         <div className={css.cFooter}>
//             <img src={Logo} alt="img" />
//             <span>UrbanStyle</span>
//         </div>
//         <div className={css.block}>
//             <div className={css.detail}>
//                 <span>Contact US</span>
//                 <span className={css.pngLine}>
//                     <LocationMarkerIcon className={css.icon}/>
//                     <div>
//                         <h4>Contact Us</h4>
//                         <p>1234 Main Street,</p>
//                         <p>Suite 567,</p>
//                         <p>Springfield, IL 62704</p>
//                         <p>United States</p>
//                         <p>Phone: +1 (555) 123-4567</p>
//                         <p>Email: info@example.com</p>
//                     </div>
//                 </span>
//             </div>
//         </div>
//     </div>

//   )
// }

// export default Footer

import React from 'react';
import css from './Footer.module.css';
import Logo from '../../assets/logo.png';
import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UsersIcon,
    LinkIcon
} from "@heroicons/react/outline";

const Footer = () => {
  return (
    <div id='six' className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="logo" />
          <span>UrbanStyle</span>
        </div>
        
        {/* Contact Us Section */}
        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact Us</span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>111 North Avenue, Orlando, FL 32801</span>
            </span>
            <span className={css.pngLine}>
              <PhoneIcon className={css.icon} />
              <a href="tel:352-306-4415">352-306-4415</a>
            </span>
            <span className={css.pngLine}>
              <InboxIcon className={css.icon} />
              <a href="mailto:support@.com">support@urbanstyle.com</a>
            </span>
          </div>
        </div>

        {/* Account Section */}
        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.icon} />
              Sign In
            </span>
          </div>
        </div>

        {/* Company Section */}
        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <UsersIcon className={css.icon} />
              <a href="/about">
                <p>About Us</p>
              </a>
            </span>
          </div>
        </div>

        {/* Resources Section */}
        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <LinkIcon className={css.icon} />
              <p>Safety Privacy & Terms</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// import React, { useState } from "react";
// import "./Header.css";
// import logo from "../../pic/logo.png";
// const Header = () => {
//   window.addEventListener("scroll", function () {
//     const header = document.querySelector(".header");
//     header.classList.toggle("active", window.scrollY > 100);
//   });

//   const [Mobile, setMobile] = useState(false);
//   return (
//     <>
//       <header className="header">
//         <div className="nav container d_flex">
//           <div className="logo">
//             <img src={logo} alt="" />
//           </div>
//           <div className="navlink">
//             <ul
//               className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"}
//               onClick={() => setMobile(false)}
//             >
//               <li>
//                 <a href="#home">home</a>
//               </li>
//               <li>
//                 <a href="#">link1</a>
//               </li>
//               <li>
//                 <a href="#">link2</a>
//               </li>
//               <li>
//                 <a href="#">link3</a>
//               </li>
//               <li>
//                 <a href="#">link4</a>
//               </li>
//             </ul>
//             <button className="toggle" onClick={() => setMobile(!Mobile)}>
//               {Mobile ? (
//                 <i class="fas fa-window-close close"></i>
//               ) : (
//                 <i class="fas fa-bars open"></i>
//               )}
//             </button>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;
import React, { useState } from "react";
import "./Header.css";
import Logo from "../../pic/logo1.png";

const Header = () => {
  const [toggle, showMenu] = useState(false);
  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href="#home" className="nav__logo">
          <img src={Logo} alt="" />
        </a>

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#resume" className="nav__link">
                  <i class="fas fa-road"></i>
                  <span> Chặng Đường</span>
                </a>
              </li>
              <li className="nav__item">
                <a href="#program" className="nav__link">
                  <i class="fas fa-newspaper"></i>
                  <span> Hoạt Động</span>
                </a>
              </li>
              <li className="nav__item">
                <a href="#activities" className="nav__link">
                  <i class="fas fa-calendar-day"></i>
                  <span> Kỷ Niệm</span>
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i class="fas fa-comments"></i>
                  <span> Liên hệ</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="nav__footer">
          <a
            href="https://www.facebook.com/profile.php?id=100029148483179"
            target="_blank"
          >
            <span className="copyright">huy26122000.</span>
          </a>
        </div>
      </aside>
      <div
        className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
        onClick={() => showMenu(!toggle)}
      >
        <i class="fas fa-bars"></i>
      </div>
    </>
  );
};

export default Header;

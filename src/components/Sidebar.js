import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/img/svg/logo.svg";
import Profile from "../assets/img/svg/Profile.svg";
import HomeIcon from "../components/Icons/HomeIcon";
import ClipboardIcon from "../components/Icons/ClipboardIcon";
import BarchartIcon from "../components/Icons/BarchartIcon";
import CommentIcon from "../components/Icons/CommentIcon";
import MessageIcon from "../components/Icons/MessageIcon";
import UserTwoIcon from "./Icons/UserTwoIcon.js";
import UserIcon from "../components/Icons/UserIcon";
import SettingIcon from "../components/Icons/SettingIcon";
import FaqIcon from "../components/Icons/FaqIcon";
import { ChevronsRightIcon } from "lucide-react";

const Sidebar = ({ isExpanded, toggleSidebar }) => {
  const navItems = [
    { icon: HomeIcon, link: "/home" },
    { icon: ClipboardIcon, link: "/clipboard" },
    { icon: BarchartIcon, link: "/barchart" },
    { icon: CommentIcon, link: "/comment" },
    { icon: MessageIcon, link: "/message" },
    { icon: UserIcon, link: "/user" },
    { icon: UserTwoIcon, link: "/user" },
    { icon: SettingIcon, link: "/setting" },
    { icon: FaqIcon, link: "/faq" },
  ];

  return (
    <div className="positon-relative">
      <div className={`sidebar-wrapper ${isExpanded ? "expanded" : ""}`}>
        <div className="sidebar-toggle-icon" onClick={toggleSidebar}>
        <ChevronsRightIcon />
      </div>
        <div>
          <div className="sidebar-logo">
            <Link to="/">
              <img className="img-fluid" src={Logo} alt="logo" />
            </Link>
          </div>

          <div className="sidebar-nav-menu">
            {navItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div className="nav-logo" key={index}>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    {({ isActive }) => <Icon active={isActive} />}
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
        <div className="sidebr-profile">
          <Link to="/">
            <img className="img-fluid" src={Profile} alt="profile" />
          </Link>
        </div>
      </div>
       
    </div>
  );
};

export default Sidebar;

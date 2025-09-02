import SpotifyIcon from "../../assets/header/spotify.svg?react";
import HomeIcon from "../../assets/header/home.svg?react";
import SearchIcon from "../../assets/header/search.svg?react";
import BrowseIcon from "../../assets/header/browse.svg?react";
import DownloadIcon from "../../assets/header/download.svg?react";
import BellIcon from "../../assets/header/notification-bell.svg?react";
import FriendsIcon from "../../assets/header/friends.svg?react";

import ProfilePic from "../../assets/sanji.jpg";

import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <SpotifyIcon />

      <nav className={styles.navBar}>
        <button type="button" className={styles.homeBtn}>
          <HomeIcon />
        </button>

        <div className={styles.optionsContainer}>
          <button type="button" className={styles.searchBtn}>
            <SearchIcon />
          </button>

          <input type="text" className={styles.searchInput} />

          <div className={styles.browseContainer}>
            <div className={styles.divider} />

            <button type="button" className={styles.browseBtn}>
              <BrowseIcon />
            </button>
          </div>
        </div>
      </nav>

      <div className={styles.otherOptionsContainer}>
        <button type="button" className={styles.premiumBtn}>
          Explore Premium
        </button>

        <button type="button" className={styles.downloadBtn}>
          <DownloadIcon />
          Install App
        </button>

        <button type="button" className={styles.notificationBtn}>
          <BellIcon />
        </button>

        <button type="button" className={styles.friendsBtn}>
          <FriendsIcon />
        </button>

        <button type="button" className={styles.profileBtn}>
          <img
            src={ProfilePic}
            alt="profile picture"
            className={styles.profilePic}
          />
        </button>
      </div>
    </header>
  );
}

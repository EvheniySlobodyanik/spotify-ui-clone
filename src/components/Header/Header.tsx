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
      <a
        href="https://open.spotify.com/"
        className={styles.spotifyLink}
        aria-label="Open Spotify homepage"
        tabIndex={-1}
      >
        <SpotifyIcon aria-hidden="true" />
      </a>

      <button type="button" className={styles.homeBtn} aria-label="Home">
        <HomeIcon aria-hidden="true" />
      </button>

      <nav className={styles.navBar} aria-label="Main navigation">
        <div className={styles.optionsContainer}>
          <button
            type="button"
            className={styles.searchBtn}
            aria-label="Search"
            tabIndex={-1}
          >
            <SearchIcon aria-hidden="true" />
          </button>

          <input
            type="text"
            className={styles.searchInput}
            placeholder="What do you want to play?"
            aria-label="Search input"
          />

          <div className={styles.divider} />

          <button
            type="button"
            className={styles.browseBtn}
            aria-label="Browse"
          >
            <BrowseIcon aria-hidden="true" />
          </button>
        </div>
      </nav>

      <div
        className={styles.otherOptionsContainer}
        role="group"
        aria-label="User options"
      >
        <button
          type="button"
          className={styles.premiumBtn}
          aria-label="Explore Premium"
        >
          Explore Premium
        </button>

        <button
          type="button"
          className={styles.downloadBtn}
          aria-label="Install App"
        >
          <DownloadIcon aria-hidden="true" />
          Install App
        </button>

        <button
          type="button"
          className={styles.notificationBtn}
          aria-label="Notifications"
        >
          <BellIcon aria-hidden="true" />
        </button>

        <button
          type="button"
          className={styles.friendsBtn}
          aria-label="Friends activity"
        >
          <FriendsIcon aria-hidden="true" />
        </button>

        <button
          type="button"
          className={styles.profileBtn}
          aria-label="Open profile menu"
        >
          <img
            src={ProfilePic}
            alt="Your profile picture"
            className={styles.profilePic}
          />
        </button>
      </div>
    </header>
  );
}

import PlusIcon from "../../assets/sidebar/plus.svg?react";

import styles from "./Sidebar.module.scss";

export function Sidebar() {
  return (
    <aside className={styles.sidebar} aria-label="Your library sidebar">
      <div className={styles.header}>
        <h2 className={styles.heading}>Your Library</h2>

        <button type="button" className={styles.createBtn}>
          <PlusIcon aria-hidden="true" />
          Create
        </button>
      </div>

      <article
        className={styles.playlistArticle}
        aria-labelledby="playlist-heading"
      >
        <h3 className={styles.playlistHeading}>Create your first playlist</h3>
        <p className={styles.playlistPara}>It's easy, we'll help you</p>

        <button type="button" className={styles.playlistBtn}>
          Create playlist
        </button>
      </article>

      <article
        className={styles.podcastsArticle}
        aria-labelledby="podcasts-heading"
      >
        <h3 className={styles.podcastsHeading}>
          Let's find some podcasts to follow
        </h3>
        <p className={styles.podcastsPara}>
          We'll keep you updated on new episodes
        </p>

        <button type="button" className={styles.podcastsBtn}>
          Browse podcasts
        </button>
      </article>
    </aside>
  );
}

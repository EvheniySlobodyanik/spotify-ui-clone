import PlusIcon from "../../assets/sidebar/plus.svg?react";

import styles from "./Sidebar.module.scss";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <h1 className={styles.heading}>Your Library</h1>

        <button type="button" className={styles.createBtn}>
          <PlusIcon />
          Create
        </button>
      </div>

      <article className={styles.playlistArticle}>
        <h2 className={styles.playlistHeading}>Create your first playlist</h2>
        <p className={styles.playlistPara}>It's easy, we'll help you</p>

        <button type="button" className={styles.playlistBtn}>
          Create playlist
        </button>
      </article>

      <article className={styles.podcastsArticle}>
        <h2 className={styles.podcastsHeading}>
          Let's find some podcasts to follow
        </h2>
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

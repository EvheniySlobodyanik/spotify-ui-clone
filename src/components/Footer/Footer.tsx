import ConnectDeviceIcon from "../../assets/footer/connect-device.svg?react";
import FullscreenIcon from "../../assets/footer/fullscreen.svg?react";
import MixIcon from "../../assets/footer/mix.svg?react";
import PauseIcon from "../../assets/footer/pause.svg?react";
import QueueIcon from "../../assets/footer/queue.svg?react";
import RepeatIcon from "../../assets/footer/repeat.svg?react";
import SkipBackIcon from "../../assets/footer/skip-back.svg?react";
import SkipForwardIcon from "../../assets/footer/skip-forward.svg?react";
import SoundIcon from "../../assets/footer/sound.svg?react";
import SquareIcon from "../../assets/footer/square-icon.svg?react";

import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftContainer}></div>

      <div className={styles.centerContainer}>
        <div className={styles.centerTopContainer}>
          <button type="button" className={styles.mixBtn}>
            <MixIcon />
          </button>

          <button type="button" className={styles.skipBackBtn}>
            <SkipBackIcon />
          </button>

          <button type="button" className={styles.pauseBtn}>
            <PauseIcon />
          </button>

          <button type="button" className={styles.skipForwardBtn}>
            <SkipForwardIcon />
          </button>

          <button type="button" className={styles.repeatBtn}>
            <RepeatIcon />
          </button>
        </div>

        <div className={styles.centerBottomContainer}>
          <span className={styles.leftTimer}>-:--</span>

          <input type="range" className={styles.inputSongDuration} />

          <span className={styles.rightTimer}>-:--</span>
        </div>
      </div>

      <div className={styles.rightContainer}>
        <button type="button" className={styles.squareBtn}>
          <SquareIcon />
        </button>

        <button type="button">
          <QueueIcon className={styles.queueBtn} />
        </button>

        <button type="button" className={styles.connectDeviceBtn}>
          <ConnectDeviceIcon />
        </button>

        <div className={styles.soundContainer}>
          <button type="button" className={styles.soundBtn}>
            <SoundIcon />
          </button>

          <input type="range" className={styles.inputSoundChanger} />
        </div>

        <button type="button" className={styles.fullscreenBtn}>
          <FullscreenIcon />
        </button>
      </div>
    </footer>
  );
}

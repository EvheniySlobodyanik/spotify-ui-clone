import SpotifyIcon from "../../assets/header/spotify.svg?react";
import HomeIcon from "../../assets/header/home.svg?react";
import SearchIcon from "../../assets/header/search.svg?react";
import BrowseIcon from "../../assets/header/browse.svg?react";
import DownloadIcon from "../../assets/header/download.svg?react";
import BellIcon from "../../assets/header/notification-bell.svg?react";
import FriendsIcon from "../../assets/header/friends.svg?react";

import ProfilePic from "../../assets/sanji.jpg";

export function Header() {
  return (
    <header id="header">
      <SpotifyIcon />

      <nav>
        <button>
          <HomeIcon />
        </button>

        <div>
          <SearchIcon />

          <input type="text" />

          <div>
            <div className="divider" />
            <BrowseIcon />
          </div>
        </div>
      </nav>

      <div>
        <button>Explore Premium</button>

        <button>
          <DownloadIcon />
          Install App
        </button>

        <button>
          <BellIcon />
        </button>

        <button>
          <FriendsIcon />
        </button>

        <button>
          <img src={ProfilePic} alt="profile picture" />
        </button>
      </div>
    </header>
  );
}

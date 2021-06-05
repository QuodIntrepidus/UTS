import * as React from "react"
import { Link } from "gatsby"
import { useState } from 'react';
import Sound from 'react-sound';
import UTSaudio from "../audio/bg_sound.mp3";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const [isPlaying, setIsPlaying] = useState(false);
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
    <div>
      <input type="checkbox" id="toggle" onClick={() => setIsPlaying(!isPlaying)}></input>
      <Sound 
          url={UTSaudio}
          playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
          loop = {true}
          volume={20}
        />
      <label for="toggle">
        <div class="mute-con">
          <div class="mute-line"></div>
          <div class="mute-line"></div>
          <div class="mute-line"></div>
          <div class="mute-line"></div>
          <div class="mute-line"></div>
          <div class="mute-line"></div>
          <div class="mute-line"></div>
          <div class="mute-line"></div>
          <div class="mute-line"></div>
          <div class="mute-line"></div>
          <div class="mute-line"></div>
          <div class="mute-line"></div>
          <div class="mute-line"></div>
          <div class="mute-line"></div>
          <div class="mute-line"></div>
        </div>
      </label>
    </div>
      <div className="bg-parallax">
      <div class="night">
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
</div>
      </div>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout

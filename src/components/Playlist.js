import React from 'react';
import './Playlist.css';
import SpotifyPlayer from './SpotifyPlayer';
import SpotifyCode from '../assets/images/spotify_playlist_5sFGjozjPMtvNq7MI3ojfu.svg';

export function LogosSpotifyIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}><path fill="#2e7a3c" d="M128 0C57.308 0 0 57.309 0 128c0 70.696 57.309 128 128 128c70.697 0 128-57.304 128-128C256 57.314 198.697.007 127.998.007zm58.699 184.614c-2.293 3.76-7.215 4.952-10.975 2.644c-30.053-18.357-67.885-22.515-112.44-12.335a7.98 7.98 0 0 1-9.552-6.007a7.97 7.97 0 0 1 6-9.553c48.76-11.14 90.583-6.344 124.323 14.276c3.76 2.308 4.952 7.215 2.644 10.975m15.667-34.853c-2.89 4.695-9.034 6.178-13.726 3.289c-34.406-21.148-86.853-27.273-127.548-14.92c-5.278 1.594-10.852-1.38-12.454-6.649c-1.59-5.278 1.386-10.842 6.655-12.446c46.485-14.106 104.275-7.273 143.787 17.007c4.692 2.89 6.175 9.034 3.286 13.72zm1.345-36.293C162.457 88.964 94.394 86.71 55.007 98.666c-6.325 1.918-13.014-1.653-14.93-7.978c-1.917-6.328 1.65-13.012 7.98-14.935C93.27 62.027 168.434 64.68 215.929 92.876c5.702 3.376 7.566 10.724 4.188 16.405c-3.362 5.69-10.73 7.565-16.4 4.187z"/></svg>
  )
}

function Playlist() {
  const embedCode = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/5sFGjozjPMtvNq7MI3ojfu?utm_source=generator&theme=0" width="100%" height="352px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;

  const spotifyCoop = () => {
    window.open('https://open.spotify.com/playlist/5sFGjozjPMtvNq7MI3ojfu?si=7a9b289245a940c4&pt=cfa5cad5bba67111b4e2147e20a9295d', '_blank');
  };

  return (
    <div className='details-container'>
      <div className="details-point">
        <LogosSpotifyIcon className="details-icon-spotify"/>
        <h2 className="details-title">Playlist</h2>
        <p className="details-description">
        Chceš nám pomoct vytvořit playlist na naši svatbu? Přidej své oblíbené skladby a&nbsp;poděl se s&nbsp;námi o&nbsp;svůj hudební vkus.
        </p>
        <button onClick={spotifyCoop} className="buttons">Připojit se</button>
      </div>
      <div className="details-point">
        <div className="spotify-player">
          <div className="spotify-code-wrap">
            <img src={SpotifyCode} alt="Spotify Code" className="spotify-code" />
          </div>
          <SpotifyPlayer embedCode={embedCode} style={{ width: '200px' }}/>
        </div>
      </div>
    </div>
  );
}

export default Playlist;

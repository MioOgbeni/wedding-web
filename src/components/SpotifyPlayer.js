import React from 'react';

const SpotifyPlayer = ({ embedCode }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: embedCode }}
    />
  );
};

export default SpotifyPlayer;

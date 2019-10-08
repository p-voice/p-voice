import React, { useState } from 'react';
import APlayer from 'aplayer';

import 'aplayer/dist/APlayer.min.css';
import { useLifeCycle, useInstanceVar } from '../common/hooks';

function Player(props) {
  
  const [ demo, setDemo ] = useState(+new Date());

  const [ init, setInit ] = useInstanceVar(true);

  useLifeCycle({
    didMount() {
      console.log('>>> didMount');

      console.log('>>> init:', init);

      setInit(false);

      const ap = new APlayer({
        container: document.getElementById('player'),
        mini: false,
        autoplay: false,
        theme: '#FADFA3',
        loop: 'all',
        order: 'random',
        preload: 'auto',
        volume: 0.7,
        mutex: true,
        listFolded: false,
        listMaxHeight: 90,
        lrcType: 3,
        audio: [
          {
            name: 'name1',
            artist: 'artist1',
            url: 'url1.mp3',
            cover: 'cover1.jpg',
            lrc: 'lrc1.lrc',
            theme: '#ebd0c2'
          },
          {
            name: 'name2',
            artist: 'artist2',
            url: 'url2.mp3',
            cover: 'cover2.jpg',
            lrc: 'lrc2.lrc',
            theme: '#46718b'
          }
        ]
      });
    },
    willUnmount() {
      console.log('>>> unmount')
    },
    didMountAndWillUnmount: [
      {
        didMount() {
          console.log('>>> listen event');
        },
        willUnmount() {
          console.log('>>> destroy event');
        }
      }
    ],
    didUpdate() {
      console.log('>>> did update')
      console.log('>>> init:', init);
    }
  });

  return (
    <div>
      haha: {demo}
      <div id="player"></div>
      <button onClick={() => setDemo(+new Date())}>Demo</button>
    </div>
  );
}

export default Player;

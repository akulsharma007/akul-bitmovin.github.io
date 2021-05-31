import React, { useEffect, useRef, useState } from 'react';

// Modularised
import { Player } from 'bitmovin-player/modules/bitmovinplayer-core.prod';
import EngineBitmovinModule from 'bitmovin-player/modules/bitmovinplayer-engine-bitmovin.prod';
import MseRendererModule from 'bitmovin-player/modules/bitmovinplayer-mserenderer.prod';
import HlsModule from 'bitmovin-player/modules/bitmovinplayer-hls.prod';
import DashModule from 'bitmovin-player/modules/bitmovinplayer-dash.prod';
import AbrModule from 'bitmovin-player/modules/bitmovinplayer-abr.prod';
import XmlModule from 'bitmovin-player/modules/bitmovinplayer-xml.prod';
import ContainerTSModule from 'bitmovin-player/modules/bitmovinplayer-container-ts.prod';
import ContainerMp4Module from 'bitmovin-player/modules/bitmovinplayer-container-mp4.prod';
import SubtitlesModule from 'bitmovin-player/modules/bitmovinplayer-subtitles.prod';
import SubtitlesWebVTT from 'bitmovin-player/modules/bitmovinplayer-subtitles-vtt.prod';
import SubtitlesCEA608Module from 'bitmovin-player/modules/bitmovinplayer-subtitles-cea608.prod';
import PolyfillModule from 'bitmovin-player/modules/bitmovinplayer-polyfill.prod';
import StyleModule from 'bitmovin-player/modules/bitmovinplayer-style.prod';
import Thumbnail from 'bitmovin-player/modules/bitmovinplayer-thumbnail.prod';
import VRModule from 'bitmovin-player/modules/bitmovinplayer-vr.prod';
import EngineBitmovinNativeModule from 'bitmovin-player/modules/bitmovinplayer-engine-native.prod';
// Bundled
// import { Player } from 'bitmovin-player';

import { UIFactory } from 'bitmovin-player/bitmovinplayer-ui';
import 'bitmovin-player/bitmovinplayer-ui.css';
import './App.css';

// Modularised addition to reduce bundle size (have tested it as well)
Player.addModule(EngineBitmovinModule);
Player.addModule(MseRendererModule); // Media source extensions is a JavaScript API that lets you build streams for playback from segments of video.
Player.addModule(HlsModule);
Player.addModule(XmlModule);
Player.addModule(DashModule);
Player.addModule(AbrModule);
Player.addModule(ContainerTSModule);
Player.addModule(ContainerMp4Module);
Player.addModule(SubtitlesModule);
Player.addModule(SubtitlesCEA608Module);
Player.addModule(PolyfillModule);
Player.addModule(StyleModule);

//below two mandatory for thumbnail
Player.addModule(Thumbnail);
Player.addModule(SubtitlesWebVTT);

// for safari support
Player.addModule(EngineBitmovinNativeModule);

//for vr support
Player.addModule(VRModule);

function App() {
  const videoPlayer = useRef(null);
  const playerContainer = useRef(null);
  const playerSwitch = useRef(null);
  const [showTranscripts, setShowTranscripts] = useState(false);
  let player = useRef(null);
  let availableRepresentations = useRef([]);
  const transcriptJson = {
    "jobName": "SampleTranscriptionJob",
    "accountId": "164582809694",
    "results": {
      "transcripts": [
        {
          "transcript": "Yeah. Mhm. The ocean floor rises five miles to the shores of what people call the seven mile miracle. Thank you, mother. What would it be like to be born on this island? To grow up on these shores? To witness this water? Every day, you're about to meet someone who did one heart for sure. Three years from one day we made turned along with my day you spend with. Mhm, mm hmm. A a film about john john Florence."
        }
      ],
      "items": [
        {
          "start_time": "7.14",
          "end_time": "7.34",
          "alternatives": [
            {
              "confidence": "0.703",
              "content": "Yeah"
            }
          ],
          "type": "pronunciation"
        },
        {
          "alternatives": [
            {
              "confidence": "0.0",
              "content": "."
            }
          ],
          "type": "punctuation"
        },
        {
          "start_time": "7.74",
          "end_time": "8.06",
          "alternatives": [
            {
              "confidence": "0.607",
              "content": "Mhm"
            }
          ],
          "type": "pronunciation"
        },
        {
          "alternatives": [
            {
              "confidence": "0.0",
              "content": "."
            }
          ],
          "type": "punctuation"
        },
        {
          "start_time": "9.34",
          "end_time": "10.14",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "The"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "10.14",
          "end_time": "10.51",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "ocean"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "10.51",
          "end_time": "10.96",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "floor"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "10.96",
          "end_time": "11.4",
          "alternatives": [
            {
              "confidence": "0.986",
              "content": "rises"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "11.4",
          "end_time": "11.84",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "five"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "11.85",
          "end_time": "12.3",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "miles"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "12.3",
          "end_time": "12.43",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "to"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "12.43",
          "end_time": "12.55",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "the"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "12.55",
          "end_time": "13.04",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "shores"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "13.04",
          "end_time": "13.17",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "of"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "13.17",
          "end_time": "13.37",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "what"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "13.38",
          "end_time": "13.68",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "people"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "13.68",
          "end_time": "14.16",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "call"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "14.17",
          "end_time": "14.73",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "the"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "14.73",
          "end_time": "15.12",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "seven"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "15.12",
          "end_time": "15.49",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "mile"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "15.49",
          "end_time": "19.66",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "miracle"
            }
          ],
          "type": "pronunciation"
        },
        {
          "alternatives": [
            {
              "confidence": "0.0",
              "content": "."
            }
          ],
          "type": "punctuation"
        },
        {
          "start_time": "20.04",
          "end_time": "20.4",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "Thank"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "20.4",
          "end_time": "20.52",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "you"
            }
          ],
          "type": "pronunciation"
        },
        {
          "alternatives": [
            {
              "confidence": "0.0",
              "content": ","
            }
          ],
          "type": "punctuation"
        },
        {
          "start_time": "20.52",
          "end_time": "20.91",
          "alternatives": [
            {
              "confidence": "0.67",
              "content": "mother"
            }
          ],
          "type": "pronunciation"
        },
        {
          "alternatives": [
            {
              "confidence": "0.0",
              "content": "."
            }
          ],
          "type": "punctuation"
        },
        {
          "start_time": "22.77",
          "end_time": "25.82",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "What"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "25.82",
          "end_time": "25.98",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "would"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "25.98",
          "end_time": "26.07",
          "alternatives": [
            {
              "confidence": "0.998",
              "content": "it"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "26.08",
          "end_time": "26.27",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "be"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "26.27",
          "end_time": "26.87",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "like"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "26.88",
          "end_time": "27.04",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "to"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "27.04",
          "end_time": "27.17",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "be"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "27.17",
          "end_time": "27.69",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "born"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "27.7",
          "end_time": "27.9",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "on"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "27.9",
          "end_time": "28.13",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "this"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "28.13",
          "end_time": "29.4",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "island"
            }
          ],
          "type": "pronunciation"
        },
        {
          "alternatives": [
            {
              "confidence": "0.0",
              "content": "?"
            }
          ],
          "type": "punctuation"
        },
        {
          "start_time": "29.46",
          "end_time": "32.12",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "To"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "32.13",
          "end_time": "32.44",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "grow"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "32.44",
          "end_time": "32.72",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "up"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "32.72",
          "end_time": "32.87",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "on"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "32.87",
          "end_time": "33.1",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "these"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "33.1",
          "end_time": "34.39",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "shores"
            }
          ],
          "type": "pronunciation"
        },
        {
          "alternatives": [
            {
              "confidence": "0.0",
              "content": "?"
            }
          ],
          "type": "punctuation"
        },
        {
          "start_time": "35.76",
          "end_time": "38.07",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "To"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "38.08",
          "end_time": "38.64",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "witness"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "38.64",
          "end_time": "38.85",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "this"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "38.85",
          "end_time": "39.41",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "water"
            }
          ],
          "type": "pronunciation"
        },
        {
          "alternatives": [
            {
              "confidence": "0.0",
              "content": "?"
            }
          ],
          "type": "punctuation"
        },
        {
          "start_time": "39.42",
          "end_time": "39.85",
          "alternatives": [
            {
              "confidence": "0.96",
              "content": "Every"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "39.85",
          "end_time": "41.67",
          "alternatives": [
            {
              "confidence": "0.96",
              "content": "day"
            }
          ],
          "type": "pronunciation"
        },
        {
          "alternatives": [
            {
              "confidence": "0.0",
              "content": ","
            }
          ],
          "type": "punctuation"
        },
        {
          "start_time": "42.14",
          "end_time": "43.8",
          "alternatives": [
            {
              "confidence": "0.997",
              "content": "you're"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "43.8",
          "end_time": "44.11",
          "alternatives": [
            {
              "confidence": "0.997",
              "content": "about"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "44.11",
          "end_time": "44.2",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "to"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "44.2",
          "end_time": "44.41",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "meet"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "44.41",
          "end_time": "44.77",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "someone"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "44.78",
          "end_time": "44.96",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "who"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "44.97",
          "end_time": "45.49",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "did"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "72.54",
          "end_time": "73.38",
          "alternatives": [
            {
              "confidence": "0.995",
              "content": "one"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "73.95",
          "end_time": "74.84",
          "alternatives": [
            {
              "confidence": "0.749",
              "content": "heart"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "74.85",
          "end_time": "75.4",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "for"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "75.4",
          "end_time": "77.36",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "sure"
            }
          ],
          "type": "pronunciation"
        },
        {
          "alternatives": [
            {
              "confidence": "0.0",
              "content": "."
            }
          ],
          "type": "punctuation"
        },
        {
          "start_time": "77.84",
          "end_time": "78.38",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "Three"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "78.39",
          "end_time": "79.51",
          "alternatives": [
            {
              "confidence": "0.954",
              "content": "years"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "79.51",
          "end_time": "80.36",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "from"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "84.74",
          "end_time": "85.38",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "one"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "85.38",
          "end_time": "85.77",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "day"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "85.77",
          "end_time": "86.08",
          "alternatives": [
            {
              "confidence": "0.934",
              "content": "we"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "86.08",
          "end_time": "86.63",
          "alternatives": [
            {
              "confidence": "0.893",
              "content": "made"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "91.04",
          "end_time": "91.5",
          "alternatives": [
            {
              "confidence": "0.793",
              "content": "turned"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "91.5",
          "end_time": "92.15",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "along"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "92.15",
          "end_time": "92.67",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "with"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "92.68",
          "end_time": "93.14",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "my"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "93.15",
          "end_time": "94.34",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "day"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "96.04",
          "end_time": "96.18",
          "alternatives": [
            {
              "confidence": "0.215",
              "content": "you"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "96.18",
          "end_time": "96.61",
          "alternatives": [
            {
              "confidence": "0.309",
              "content": "spend"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "108.74",
          "end_time": "108.94",
          "alternatives": [
            {
              "confidence": "0.463",
              "content": "with"
            }
          ],
          "type": "pronunciation"
        },
        {
          "alternatives": [
            {
              "confidence": "0.0",
              "content": "."
            }
          ],
          "type": "punctuation"
        },
        {
          "start_time": "117.14",
          "end_time": "117.65",
          "alternatives": [
            {
              "confidence": "0.499",
              "content": "Mhm"
            }
          ],
          "type": "pronunciation"
        },
        {
          "alternatives": [
            {
              "confidence": "0.0",
              "content": ","
            }
          ],
          "type": "punctuation"
        },
        {
          "start_time": "118.04",
          "end_time": "118.3",
          "alternatives": [
            {
              "confidence": "0.035",
              "content": "mm"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "118.3",
          "end_time": "118.59",
          "alternatives": [
            {
              "confidence": "0.031",
              "content": "hmm"
            }
          ],
          "type": "pronunciation"
        },
        {
          "alternatives": [
            {
              "confidence": "0.0",
              "content": "."
            }
          ],
          "type": "punctuation"
        },
        {
          "start_time": "124.15",
          "end_time": "133.81",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "A"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "138.4",
          "end_time": "166.3",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "a"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "166.31",
          "end_time": "166.79",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "film"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "166.8",
          "end_time": "167.47",
          "alternatives": [
            {
              "confidence": "1.0",
              "content": "about"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "167.48",
          "end_time": "167.79",
          "alternatives": [
            {
              "confidence": "0.999",
              "content": "john"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "167.79",
          "end_time": "168.08",
          "alternatives": [
            {
              "confidence": "0.999",
              "content": "john"
            }
          ],
          "type": "pronunciation"
        },
        {
          "start_time": "168.09",
          "end_time": "168.71",
          "alternatives": [
            {
              "confidence": "0.919",
              "content": "Florence"
            }
          ],
          "type": "pronunciation"
        },
        {
          "alternatives": [
            {
              "confidence": "0.0",
              "content": "."
            }
          ],
          "type": "punctuation"
        }
      ]
    },
    "status": "COMPLETED"
  };
  useEffect(() => {
    let resizeTimeout = -1;
    const playerConfig = {
      key: '261ac372-a93d-40b3-8a8f-c96b0cd2a1fd',
      remotecontrol: {
        type: 'googlecast',
      },
      events: {
        playerresized: (ev) => {
          // if (
          //   document.querySelector('.player-switch').classList.contains('fixed-player')
          // ) {
          //   clearTimeout(resizeTimeout);
          //   resizeTimeout = setTimeout(function () {
          //       document.querySelector(".player-container").style.height = (ev.height.substr(0, ev.height.indexOf('px')) - 2) + "px";
          //     },
          //     250
          //   )
          //   ;
          // }
        },
        paused: (ev) => {
          console.log(ev);
        },
        timechanged: (ev) => {
          const timeToCheck = Math.ceil(ev.time);
          let observer = new IntersectionObserver((entries) => {
            const filtered = entries.filter(entry => entry.target.getAttribute('roundedofftime') == timeToCheck);
            if (filtered[filtered.length - 1]) {
              if (filtered[filtered.length - 1].isIntersecting === false) {
                filtered[filtered.length - 1].target.scrollIntoView({ behavior: "smooth" });
              }
            }
          }, { root: document.getElementById("transcripts"), rootMargin: '0px', threshold: 1.0 });
          const transcript = document.querySelectorAll('.transcript');
          transcript.forEach(t => observer.observe(t));
        },
        viewmodechanged: (ev) => {
          console.log(ev);
        },
        playbackfinished: (ev) => {
          console.log(ev);
          switchSource(1, "series");
        }
      },
      // for explicit preloading and adaptive representation demo
      adaptation: {
        desktop: {
          preload: true,
          onVideoAdaptation: (param) => {
            for (let i = 0; i < availableRepresentations.current.length; i++) {
              if (availableRepresentations.current[i].id === param.suggested) {
                console.log('Curr Rep: ' + availableRepresentations.current[i].bitrate / 1000 + 'kbps');
              }
            }
          }
        },
        mobile: {
          preload: true,
          onVideoAdaptation: (param) => {
            for (let i = 0; i < availableRepresentations.current.length; i++) {
              if (availableRepresentations.current[i].id === param.suggested) {
                console.log('Curr Rep: ' + availableRepresentations.current[i].bitrate / 1000 + 'kbps');
              }
            }
          },
        }
      },
      // for autoplay and muted on like functionalities at initial on load
      // playback: {
      //   autoplay: true,
      //   muted: true
      // }
    };

    player.current = new Player(videoPlayer.current, playerConfig);
    UIFactory.buildDefaultUI(player.current);
    switchSource(1);
    // window.onscroll = adjustPlayer;
    window.addEventListener('scroll', adjustPlayer);

    return () => {
      window.removeEventListener('scroll', adjustPlayer);
    }
  }, []);

  const switchSource = (sourceId, mode = "single") => {
    let source;
    switch (sourceId) {
      case 1:
        source = {
          title: "Test Video 1",
          description: "Test Description 1",
          //defines file to load based on bandwidth and resolution
          dash: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
          hls: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
          // progressive: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/MI201109210084_mpeg-4_hd_high_1080p25_10mbits.mp4',
          // initial thumbnail
          poster: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/poster.jpg',
          //thumbnail for seeked video
          thumbnailTrack: {
            url: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/thumbnails/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.vtt'
          },
          // custom video quality labels
          labeling: {
            dash: {
              qualities: getQualityLabels
            },
            hls: {
              qualities: getQualityLabels
            }
          },
          markers: [
            { time: 69, title: 'Marker 1n' },
            { time: 188, duration: 11, title: 'Marker 2 with duration' },
          ],
        }
        break;
      case 2:
        source = {
          title: "Test Video 2",
          description: "Test Description 2",
          //Multi audio track support and subtitles using vtt files mentioned in dash file
          // dash: 'https://bitmovin-a.akamaihd.net/content/sintel/sintel.mpd',
          hls: 'https://bitmovin-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
          poster: 'https://bitmovin-a.akamaihd.net/content/sintel/poster.png',

          // custom video quality labels
          labeling: {
            dash: {
              qualities: getQualityLabels
            },
            hls: {
              qualities: getQualityLabels
            }
          }
        };
        break;
      case 3:
        source = {
          title: "Test Video 3",
          description: "Custom Generated",
          // dash: 'http://s3.amazonaws.com/bitmovin-poc/path/bitmovin-poc/manifest.mpd',
          hls: 'http://s3.amazonaws.com/bitmovin-poc/path/bitmovin-poc/manifest.m3u8',
          // poster: 'https://bitmovin-a.akamaihd.net/content/sintel/poster.png',

          // custom video quality labels
          labeling: {
            dash: {
              qualities: getQualityLabels
            },
            hls: {
              qualities: getQualityLabels
            }
          }
        }
        break;
      case 4:
        source = {
          dash:
            'https://bitmovin-a.akamaihd.net/content/playhouse-vr/mpds/105560.mpd',
          hls:
            'https://bitmovin.com/player-content/playhouse-vr/m3u8s/105560.m3u8',
          progressive:
            'https://bitmovin.com/player-content/playhouse-vr/progressive.mp4',
          poster:
            'https://bitmovin-a.akamaihd.net/content/playhouse-vr/poster.jpg',
          vr: {
            startupMode: '2d',
            startPosition: 180,
          }
        };
        break;
      case 5:
        source = {
          title: "Test Video 1",
          description: "Test Description 1",
          hls: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
          poster: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/poster.jpg',
          thumbnailTrack: {
            url: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/thumbnails/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.vtt'
          },
        };
        break;
    }
    player.current.load(source).then(() => {
      console.log('Successfully loaded source');
      availableRepresentations.current = player.current.getAvailableVideoQualities();
      // const container = document.querySelector(".player-container");
      // let playerHeight = document.getElementById('player').offsetHeight;
      // if (container.offsetHeight <= playerHeight) {
      //   container.height = playerHeight + "px";
      if (sourceId === 5) {
        player.current.seek(45);
      }
      if (mode === "series") {
        player.current.play()
      }
      // }
    }, () => {
      console.log('Error while loading source');
    });
  }

  const adjustPlayer = () => {
    const container = playerContainer.current;
    const lowerEdge = container.getBoundingClientRect().top + container.offsetHeight;
    const switchToMinPlayerPos = lowerEdge - (window.innerHeight / 3);
    const currentScrollPos = document.body.scrollTop || document.documentElement.scrollTop;

    if (currentScrollPos > switchToMinPlayerPos) {
      playerSwitch.current.classList.add('fixed-player');
    } else {
      playerSwitch.current.classList.remove('fixed-player');
    }
  }

  const getQualityLabels = (data) => {
    let result = "";
    switch (data.height) {
      case 1080:
        result = '1080p HD';
        break;
      default:
        result = data.height
    }
    return result;
  }

  const transcriptMapping = () => {
    // const result = transcriptJson.results.transcripts[0].transcript.split(/([.,?!])/);
    // console.log(result);
    const items = transcriptJson.results.items;
    const parsedJson = [];
    let interimObj = { content: "", endTime: "0" };
    for (let i = 0; i < items.length; i++) {
      interimObj.content = interimObj.content + items[i].alternatives[0].content;
      if (i !== items.length - 1 && !items[i + 1].alternatives[0].content.match(/[.,?!]/)) {
        interimObj.content = interimObj.content + " ";
      }
      if (items[i].alternatives[0].content.match(/[.,?!]/)) {
        interimObj.endTime = items[i - 1].end_time;
        parsedJson.push({ ...interimObj });
        interimObj = { content: "", endTime: "0" };
      }
    }
    console.log(parsedJson);
    return parsedJson.map(ele => (
      <span className="transcript" roundedofftime={parseInt(ele.endTime)} id={ele.endTime} key={ele.endTime}>{ele.content}</span>
    ));
  }

  return (
    <div className="App">
      <div className="player-transcript-wrapper" style={showTranscripts ? { display: 'flex' } : { display: 'block' }}>
        <div className="player-container" ref={playerContainer} style={{ height: "600px" }}>
          <div className="player-switch" ref={playerSwitch}>
            {/* used id here to have avoid using !important in css and have higher specificity */}
            <div ref={videoPlayer} id="player"></div>
          </div>
        </div>
        <div id="transcripts" style={showTranscripts ? { display: 'block' } : { display: 'none' }}>
          {transcriptMapping()}
        </div>
      </div>
      <br />
      <div>
        Switching between videos to show optimized video switching:-
        <br />
        <br />
        <button onClick={() => switchSource(1)}>Video 1</button>
        <button onClick={() => switchSource(2)}>Video 2</button>
        <button onClick={() => switchSource(3)}>Video 3 - custom generated</button>
        <button onClick={() => switchSource(4)}>Video 4 - VR video</button>
        <button onClick={() => switchSource(5)}>Video 5 - Starting from 45th second </button>
      </div>
      <br />
      <div>
        <button onClick={() => player.current.seek(5)}>Seeking to 5 secs</button>
      </div>
      <br />
      <button onClick={() => setShowTranscripts(true)}>Enable Transcripts</button>
    </div>
  );
}

export default App;
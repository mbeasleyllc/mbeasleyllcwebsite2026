
import { useEffect, useRef } from "react";
import Head from "next/head";

declare global {
  interface Window {
    JitsiMeetExternalAPI: any;
  }
}

interface VideoConferenceProps {
  roomName?: string;
  displayName?: string;
  jwt?: string;
}

export default function VideoConference({ 
  roomName = "vpaas-magic-cookie-ba26581eb6884f1a90e42caa388e90c9/SampleAppFeministSheltersSufferNewly",
  displayName = "Guest",
  jwt
}: VideoConferenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<any>(null);

  useEffect(() => {
    const initializeJitsi = () => {
      if (window.JitsiMeetExternalAPI && containerRef.current) {
        const options: any = {
          roomName: roomName,
          parentNode: containerRef.current,
          userInfo: {
            displayName: displayName
          },
          configOverwrite: {
            startWithAudioMuted: true,
            startWithVideoMuted: false,
            enableWelcomePage: false,
            prejoinPageEnabled: false
          },
          interfaceConfigOverwrite: {
            TOOLBAR_BUTTONS: [
              'microphone', 'camera', 'closedcaptions', 'desktop', 'fullscreen',
              'fodeviceselection', 'hangup', 'profile', 'chat', 'recording',
              'livestreaming', 'etherpad', 'sharedvideo', 'settings', 'raisehand',
              'videoquality', 'filmstrip', 'invite', 'feedback', 'stats', 'shortcuts',
              'tileview', 'videobackgroundblur', 'download', 'help', 'mute-everyone'
            ]
          }
        };

        if (jwt) {
          options.jwt = jwt;
        }

        apiRef.current = new window.JitsiMeetExternalAPI("8x8.vc", options);

        apiRef.current.addEventListener('readyToClose', () => {
          apiRef.current?.dispose();
        });
      }
    };

    if (window.JitsiMeetExternalAPI) {
      initializeJitsi();
    } else {
      const checkJitsi = setInterval(() => {
        if (window.JitsiMeetExternalAPI) {
          clearInterval(checkJitsi);
          initializeJitsi();
        }
      }, 100);

      return () => clearInterval(checkJitsi);
    }

    return () => {
      if (apiRef.current) {
        apiRef.current.dispose();
      }
    };
  }, [roomName, displayName, jwt]);

  return (
    <>
      <Head>
        <script 
          src="https://8x8.vc/vpaas-magic-cookie-ba26581eb6884f1a90e42caa388e90c9/external_api.js" 
          async 
        />
      </Head>
      <div 
        ref={containerRef} 
        className="w-full h-full min-h-screen"
        id="jaas-container"
      />
    </>
  );
}

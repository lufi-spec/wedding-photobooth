import { useEffect, useRef } from "react";
import musicFile from "../assets/wedding.mp3";

function MusicPlayer({ playing }) {

  const audioRef = useRef(null);

  useEffect(() => {

    if (audioRef.current) {

      if (playing) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }

    }

  }, [playing]);



  useEffect(() => {

    const handleVisibility = () => {

      if (document.hidden) {

        audioRef.current.pause();

      } else {

        if (playing) {
          audioRef.current.play();
        }

      }

    };

    document.addEventListener(
      "visibilitychange",
      handleVisibility
    );

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibility
      );
    };

  }, [playing]);



  return (
    <audio
      ref={audioRef}
      src={musicFile}
      loop
    />
  );
}

export default MusicPlayer;
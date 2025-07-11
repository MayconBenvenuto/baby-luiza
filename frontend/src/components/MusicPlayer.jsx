import React, { useEffect, useRef, useState } from "react";
import { Music, VolumeX, Volume2 } from "lucide-react";
import { Button } from "./ui/button";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Tentar tocar música automaticamente quando o componente montar
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.log("Autoplay blocked by browser:", error);
        // Autoplay foi bloqueado pelo navegador, o usuário precisará clicar
      }
    };

    // Delay para garantir que o áudio esteja carregado
    const timer = setTimeout(playAudio, 1000);
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <audio
        ref={audioRef}
        loop
        onEnded={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        {/* Usando uma URL de música infantil gratuita */}
        <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" type="audio/wav" />
        <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3" type="audio/mpeg" />
        Seu navegador não suporta o elemento audio.
      </audio>
      
      <Button
        variant="secondary"
        size="icon"
        onClick={togglePlay}
        className="bg-white/80 backdrop-blur-sm hover:bg-white/90 shadow-lg"
      >
        {isPlaying ? <Music className="w-4 h-4 text-pink-600" /> : <Music className="w-4 h-4 text-gray-600" />}
      </Button>
      
      <Button
        variant="secondary"
        size="icon"
        onClick={toggleMute}
        className="bg-white/80 backdrop-blur-sm hover:bg-white/90 shadow-lg"
      >
        {isMuted ? <VolumeX className="w-4 h-4 text-gray-600" /> : <Volume2 className="w-4 h-4 text-pink-600" />}
      </Button>
    </div>
  );
};

export default MusicPlayer;
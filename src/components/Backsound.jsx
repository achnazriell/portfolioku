import { useState, useRef, useEffect } from "react";
// Ikon speaker (opsional, bisa pakai text atau icon library seperti react-icons)
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa"; 

const Backsound = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Coba play otomatis saat web dibuka
    const attemptPlay = async () => {
      try {
        if (audioRef.current) {
          audioRef.current.volume = 0.5; // Set volume 50% (biar ga kaget)
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.log("Autoplay diblokir oleh browser, menunggu interaksi user.");
        setIsPlaying(false);
      }
    };

    attemptPlay();
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Element Audio Tersembunyi */}
      <audio 
        ref={audioRef} 
        src="/song.mp3" 
        loop // Agar lagu berulang terus
      />

      {/* Tombol Kontrol Floating */}
      <button
        onClick={toggleAudio}
        className={`p-3 rounded-full shadow-lg transition-all duration-300 ${
          isPlaying 
            ? "bg-yellow-500 hover:bg-yellow-600 text-white animate-pulse" // Efek visual saat nyala
            : "bg-gray-700 hover:bg-gray-600 text-gray-300"
        }`}
        aria-label="Toggle music"
      >
        {isPlaying ? (
           // Ganti dengan text "ON" jika tidak pakai react-icons
           <FaVolumeUp size={20} /> 
        ) : (
           // Ganti dengan text "OFF" jika tidak pakai react-icons
           <FaVolumeMute size={20} />
        )}
      </button>
    </div>
  );
};

export default Backsound;
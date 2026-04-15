import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function App() {
  const audioRef = useRef(null);
  const [started, setStarted] = useState(false);

  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const handleStart = () => {
    audioRef.current.play();
    setStarted(true);
  };
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (started) {
      setTimeout(() => setStep(1), 500);   // line 1
      setTimeout(() => setStep(2), 1500);  // line 2
      setTimeout(() => setStep(3), 2500);  // line 3
      setTimeout(() => setStep(4), 3500);  // button
    }
  }, [started]);

  return (
  <div
    className={`relative w-full h-screen overflow-hidden flex items-center justify-center transition-all duration-1000 ${
      isTransitioning ? "opacity-0 scale-110 blur-sm" : "opacity-100 scale-100"
    }`}
  >
    {/* Background */}
    <div className="absolute inset-0 bg-black"></div>

    <div
      className="absolute inset-0 bg-contain bg-center bg-no-repeat scale-95 animate-[zoom_15s_linear_infinite]"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 backdrop-blur-[4px]" />

    {/* Content */}
    <div className="relative z-10 flex items-center justify-center w-full px-4 text-white">

      <div className="backdrop-blur-md bg-white/10 border border-white/20 
                      rounded-2xl px-8 py-10 shadow-2xl space-y-4 
                      max-w-lg w-full mx-auto 
                      flex flex-col items-center text-center">

        {!started && (
          <button
            onClick={handleStart}
            className="px-10 py-4 bg-white text-black rounded-full text-lg 
                       hover:scale-110 transition duration-300"
          >
            Play
          </button>
        )}

        {started && (
          <>
            {step >= 1 && (
              <p className="text-3xl md:text-4xl font-[Playfair_Display]">
                I didn’t expect anything from you..
              </p>
            )}

            {step >= 2 && (
              <p className="text-lg opacity-80 font-[Poppins]">
                but meeting you changed something in me.
              </p>
            )}

            {step >= 3 && (
              <p className="text-md opacity-60 animate-fadeIn">
                This is for you ❤️
              </p>
            )}

            {step >= 4 && (
              <button
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    navigate("/letter");
                  }, 1000);
                }}
                className="mt-6 px-8 py-3 rounded-full 
                           bg-white/90 text-black font-medium tracking-wide
                           shadow-lg backdrop-blur-md
                           hover:scale-110 hover:bg-white transition duration-300 
                           animate-slideUp animate-float"
              >
                Your Puchki ∞
              </button>
            )}
          </>
        )}
      </div>
    </div>

    {/* Grain Layer */}
    <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay">
      <img src="/grain.png" className="w-full h-full object-cover" />
    </div>
  </div>
);
}
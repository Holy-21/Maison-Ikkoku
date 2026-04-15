export default function Letter() {
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden">

      {/* Blurred Background Effect */}
      <div
  className="absolute inset-0 bg-cover bg-center animate-fadeIn"
  style={{ backgroundImage: `url('/MI.avif')` }}
/>
{/* Dark Overlay (for readability) */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      {/* A4 Letter Card */}
      <div className="relative w-[210mm] h-[297mm] max-w-[90vw] max-h-[90vh] 
                      rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)]">

        <img
          src="/letter.jpg"
          alt="letter"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
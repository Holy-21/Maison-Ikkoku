export default function Letter() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5e6d3] relative">

      {/* Blurred Background Effect */}
      <div
  className="min-h-screen flex items-center justify-center 
                bg-gradient-to-br from-[#f5e6d3] to-[#e8d5c0]
                animate-fadeIn"
  style={{ backgroundImage: `url('/MI.avif')` }}
/>

      {/* A4 Letter Card */}
      <div className="relative w-[210mm] h-[297mm] max-w-[90vw] max-h-[90vh] 
                      bg-white/30 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)]">

        <img
          src="/letter.jpg"
          alt="letter"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
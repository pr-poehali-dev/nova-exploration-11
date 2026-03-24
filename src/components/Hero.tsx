import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/3b77e30c-3da7-44c4-9cb1-ac5900ebb2c1/files/2350a006-8b03-4302-99cb-46055a80ae4d.jpg"
          alt="Поэзия Серебряного века"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6" style={{textShadow: '0 2px 20px rgba(0,0,0,0.7)'}}>
        <p className="text-xs md:text-sm uppercase tracking-[0.4em] mb-6 opacity-70">Поэзия второй половины XX — начала XXI века</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          БЕЛЛА<br />АХМАДУЛИНА
        </h1>
        <p className="text-base md:text-xl max-w-xl mx-auto opacity-80 font-light leading-relaxed italic">
          «Я завидую ей — молодой, весёлой,<br />беспечной — себе, какою была…»
        </p>
        <div className="mt-12 flex justify-center">
          <div className="w-px h-16 bg-white opacity-40"></div>
        </div>
      </div>
    </div>
  );
}
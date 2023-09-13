import { easeOut, motion } from "framer-motion";

const customParaContenedores = {
  hidden: {
    opacity: 0,
    y: 100,
    transition: { delay: 9, duration: 0.1 }
  },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3, duration: 1.5 }
  })
}



const customParaItems = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    transition: {
      duration: 0.5,
      ease: "easeOut", 
    },
  },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: i,
      ease: [0, 0.71, 0.2, 1.01],
    },
  }),
};


export const Footer = () => (
  <>
    <motion.div 
    variants={customParaContenedores}
    initial="hidden"
    whileInView="show"
    className="flex justify-center items-center bg-[#2e2e2e] mt-12">
      <div className="flex flex-col">
        <h1 className="text-6xl text-white font-bold">¿Cómo usarlo?</h1>
        
        <article className="mt-4 h-auto flex flex-col shadow-xl  bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6]  max-w-sm py-4 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-190 rounded-md">
          <h1 className="font-extrabold text-6xl text-white"></h1>
          <h2 className="font-bold text-white">Los sñores</h2>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id beatae
            repellendus nam! Dolor dignissimos unde, dolore laboriosam atque
            numquam quam.
          </p>
        </article>
      </div>
      <motion.img
        variants={customParaItems}
        initial="hidden"
        whileInView="show"
        custom="1.8"
        src="images/CampoElementos.png"
        alt="Imgen del traductir"
        className="w-1/2"
      />
    </motion.div>
  </>
);

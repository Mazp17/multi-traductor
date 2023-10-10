import { easeOut, motion } from "framer-motion";

const customParaContenedores = {
  hidden: {
    opacity: 0,
    y: 100,
    transition: { delay: 9, duration: 0.1 },
  },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3, duration: 1.5 },
  }),
};

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

export const Uso = () => (
  <>
    <motion.div
      variants={customParaContenedores}
      initial="hidden"
      whileInView="show"
      className="flex justify-center items-center bg-[#111111] mt-12"
    >
      <div className="flex flex-col m-20">
        <h1 className="text-6xl text-white font-bold">¿Cómo usarlo?</h1>
        <p className="text-md mt-8">
          En{" "}
          <span className="font-bold font-2xl">
            <u>MultiTraductor</u>{" "}
          </span>{" "}
          puedes agregar hasta 5 idiomas para recibir una traduccion
          simultaneamente del texto ingresado. <br /> <br />
          Anade el idioma original y despues anade los idiomas a los que los
          quieres traducir y <u></u> presiona traducir para recibir una
          tradccion simultanea.
        </p>
      </div>
      <motion.img
        variants={customParaItems}
        initial="hidden"
        whileInView="show"
        custom="1.8"
        src="images/CampoElementos.png"
        alt="Imgen del traductir"
      />
    </motion.div>
  </>
);

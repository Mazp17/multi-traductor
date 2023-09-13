export const Footer = () => (
  <>
    <div className="flex justify-center items-center bg-[#373737] mt-12">
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
      <img
        src="images/CampoElementos.png"
        alt=""
        className="w-1/2 transition duration-500 hover:scale-105"
      />
    </div>
  </>
);


export const Uso = () => (
  <>
    <section className="flex justify-center items-center bg-[#111111] mt-12">
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
      <img className="w-1/2" src="images/CampoElementos.png" alt="Imagen del traductor" />
    </section>
  </>
);

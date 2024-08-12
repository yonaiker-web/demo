import React, { useState } from "react";
import banner1 from "./assets//Catalogue-pana.svg";
import person1 from "./assets/person1.jpg";
import person2 from "./assets/person2.jpg";
import person3 from "./assets/person3.jpg";
import person4 from "./assets/person4.jpg";
import logo from "./assets/logo (1).png";
import { NavBar } from "./components/NavBar";

function App() {
  const items = [
    {
      title: "Primera Sección",
      content: "Contenido de la primera sección.",
    },
    {
      title: "Segunda Sección",
      content: "Contenido de la segunda sección.",
    },
    {
      title: "Tercera Sección",
      content: "Contenido de la tercera sección.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <NavBar />
      <div className="">
        <div className="bg-gray-600 px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="ps-10 w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-7xl">
                  Best place to choose your
                  <span className="text-blue-500 ">clothes</span>
                </h1>

                <p className="mt-3 text-white text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro beatae error laborum ab amet sunt recusandae? Reiciendis
                  natus perspiciatis optio.
                </p>

                <button className="w-full px-5 py-2 mt-6 text-base tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  Shop Now
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full lg:max-w-3xl"
                src={banner1}
                alt="Catalogue-pana.svg"
              />
            </div>
          </div>
        </div>

        <div class="grid grid-cols-4 gap-4 text-center px-28 py-12">
          <div class=" basis-1/4 bg-blue-500 p-5">
            <p className="text-xl pb-3">Caracteristica uno</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div class=" basis-1/4 border-2 border-blue-500 bg-white p-5">
            <p className="text-xl pb-3">Caracteristica uno</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              praesentium iusto, in voluptatem aperiam ratione.
            </p>
          </div>
          <div class=" basis-1/4 bg-blue-500 p-5">
            <p className="text-xl pb-3">Caracteristica tres</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              excepturi reiciendis enim alias
            </p>
          </div>
          <div class=" basis-1/4 border-2 border-blue-500 bg-white p-5">
            <p className="text-xl pb-3">Caracteristica cuatro</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
              iusto, quidem itaque aut repellat assumenda sequi dolore culpa
              prae
            </p>
          </div>
        </div>

        <div className="bg-gray-100 text-center py-12 px-36">
          <p className="text-2xl pb-4">Por que este Producto?</p>
          <p className="text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
            facere ipsum assumenda accusantium dignissimos neque reprehenderit
            similique eos perspiciatis, magnam quidem beatae, unde perferendis
            commodi magni. Optio ea eius possimus? Necessitatibus, error non
            earum, dolorum eaque ducimus porro dignissimos explicabo nobis
            labore temporibus fuga dolores nemo perspiciatis, debitis et natus!
            Optio laudantium aspernatur voluptate.
          </p>
        </div>

        <div className=" py-12">
          <div className="w-[60%] mx-auto">
            {items.map((item, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex justify-between items-center p-4 bg-blue-500 text-white rounded-md"
                >
                  <span>{item.title}</span>
                  <span>{openIndex === index ? "-" : "+"}</span>
                </button>
                {openIndex === index && (
                  <div className="p-4 bg-gray-100 rounded-md mt-2">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-indigo-700 text-center py-12">
          <p className="text-4xl pb-5 text-gray-200">Equipo</p>
          <p className="text-gray-200 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quae
            dignissimos numquam architecto, expedita deserunt.
          </p>
          <div class="grid grid-cols-4 gap-10 text-center px-28 py-12">
            <div class="flex flex-col  basis-1/4 bg-white p-5 shadow-2xl">
              <div className="m-auto ">
                <img
                  src={person1}
                  alt=""
                  className="rounded-full object-cover h-48 w-48 shadow-2xl "
                />
              </div>
              <div className="py-8">
                <p className="text-xl pb-3">Jhon Wit</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div class="flex flex-col  basis-1/4 bg-white p-5 shadow-2xl">
              <div className="m-auto">
                <img
                  src={person2}
                  alt=""
                  className="rounded-full object-cover h-48 w-48 shadow-2xl"
                />
              </div>
              <div className="py-8">
                <p className="text-xl pb-3">Claudia Albornoz</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div class="flex flex-col  basis-1/4 bg-white p-5 shadow-2xl">
              <div className="m-auto">
                <img
                  src={person3}
                  alt=""
                  className="rounded-full object-cover h-48 w-48 shadow-2xl"
                />
              </div>
              <div className="py-8">
                <p className="text-xl pb-3">Whiny Chacon</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div class="flex flex-col  basis-1/4 bg-white p-5 shadow-2xl">
              <div className="m-auto">
                <img
                  src={person4}
                  alt=""
                  className="rounded-full object-cover h-48 w-48 shadow-2xl"
                />
              </div>
              <div className="py-8">
                <p className="text-xl pb-3">Paola Paredez</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100  py-8">
          <div className="flex flex-row justify-evenly">
            <div className="w-[35%]">
              <div className=" pb-5">
                <p className="text-xl font-semibold">Contactanos</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>

              <form className="">
                <div className="mb-5">
                  <input
                    type="tet"
                    id="email"
                    className="block w-full p-1 border-2 border-gray-400"
                    placeholder="Nombre"
                    required
                  />
                </div>
                <div className="mb-5">
                  <input
                    type="text"
                    className="block w-full p-1 border-2 border-gray-400"
                    placeholder="Correo"
                    required
                  />
                </div>
                <div className="mb-5">
                  <textarea
                    type="text"
                    className="block w-full p-1 border-2 border-gray-400 h-200px"
                    placeholder="Escribe un mensaje"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Enviar
                </button>
              </form>
            </div>

            <div className="">
              <img src={logo} alt="" />
            </div>
          </div>
        </div>

        <div className="bg-indigo-800 py-6 text-center">
          <footer className="text-base  text-gray-200">
            Copyright © 2018{" "}
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;

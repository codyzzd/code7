import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* nav bar */}
      <header className="border-b border-slate-200">
        <nav className="container flex items-center justify-between px-4 py-4 mx-auto lg:px-24">
          <div className="flex items-center space-x-8 logomenu">
            <div className="logo text-2xl font-semibold tracking-[-0.075em]">
              code<span className="text-blue-600">7</span>
            </div>
            <ul className="hidden space-x-8 menu lg:flex">
              <li>
                <a href="#plataforma" className="items-center">
                  Plataforma<i className="fa-solid fa-chevron-down ms-1"></i>
                </a>
              </li>
              <li>
                <a href="#precos">Preços</a>
              </li>
              <li>
                <a href="#cases">Cases</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#recursos">Recursos</a>
              </li>
            </ul>
          </div>

          <div className="space-x-4 buttons">
            <a href="/">Entrar</a>
            <a className="inline-block whitespace-nowrap rounded-sm bg-blue-600 px-6 py-3 font-medium text-white shadow-[0_4px_4px_rgba(8,8,8,0.08),0_6px_12px_rgba(8,8,8,0.12),inset_0_1px_1px_rgba(255,255,255,0.5),inset_0_6px_12px_rgba(255,255,255,0.12)]">
              Começar
            </a>
          </div>
        </nav>
      </header>
      {/* hero section */}
      <section className="py-8 hero lg:py-16">
        <div className="container px-4 mx-auto lg:px-24">
          <div className="w-full md:w-7/12">
            <h1 className="mb-3 text-5xl font-black tracking-tighter md:text-7xl">
              Reiventamos a forma de comunicar
            </h1>
            <h2 className="mb-6">
              Impulsione a comunicação com eficiência, atendendo aos mais altos
              padrões de compliance e segurança.{" "}
              <span className="hidden md:inline">
                Nossas soluções omnichannel e chatbot são projetadas para sua
                tranquilidade e excelência operacional.
              </span>
            </h2>
          </div>
          <button className="whitespace-nowrap rounded-sm bg-blue-600 px-6 py-3 font-medium text-white shadow-[0_4px_4px_rgba(8,8,8,0.08),0_6px_12px_rgba(8,8,8,0.12),inset_0_1px_1px_rgba(255,255,255,0.5),inset_0_6px_12px_rgba(255,255,255,0.12)]">
            Começar
          </button>
        </div>
      </section>
      {/* blog */}
      <section className="py-8 blog lg:py-16">
        <div className="container px-4 mx-auto lg:px-24">
          <h1 className="mb-6 text-2xl font-bold tracking-tighter">
            Fique por dentro
          </h1>
          <div className="flex-col mb-3 space-y-4 posts md:grid md:grid-cols-3 md:gap-4 md:space-y-0">
            <div className="flex space-x-4 post md:flex-col md:space-x-0">
              <div className="grow md:order-2">
                <p className="mb-2 font-bold tracking-tight">
                  Meta anuncia novo modelo de cobrança da API do WhatsApp
                </p>
                <p className="text-sm text-slate-500">15/08/2023 - 10:45</p>
              </div>
              <div className="w-48 h-24 foto bg-clip-padding md:mb-2 md:h-32 md:w-full">
                <img
                  src="https://img.freepik.com/free-photo/abstract-background-with-low-poly-design_1048-8478.jpg?w=1800&t=st=1696987264~exp=1696987864~hmac=eed4b98a4303e206b1b388a7a1de710e21b181d1fa7511187e10873217f30b25"
                  alt=""
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
            <div className="flex space-x-4 post md:flex-col md:space-x-0">
              <div className="grow md:order-2">
                <p className="mb-2 font-bold tracking-tight">
                  Meta anuncia novo modelo de cobrança da API do WhatsApp
                </p>
                <p className="text-sm text-slate-500">15/08/2023 - 10:45</p>
              </div>
              <div className="w-48 h-24 foto bg-clip-padding md:mb-2 md:h-32 md:w-full">
                <img
                  src="https://img.freepik.com/free-photo/abstract-background-with-low-poly-design_1048-8478.jpg?w=1800&t=st=1696987264~exp=1696987864~hmac=eed4b98a4303e206b1b388a7a1de710e21b181d1fa7511187e10873217f30b25"
                  alt=""
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
            <div className="flex space-x-4 post md:flex-col md:space-x-0">
              <div className="grow md:order-2">
                <p className="mb-2 font-bold tracking-tight">
                  Meta anuncia novo modelo de cobrança da API do WhatsApp
                </p>
                <p className="text-sm text-slate-500">15/08/2023 - 10:45</p>
              </div>
              <div className="w-48 h-24 foto bg-clip-padding md:mb-2 md:h-32 md:w-full">
                <img
                  src="https://img.freepik.com/free-photo/abstract-background-with-low-poly-design_1048-8478.jpg?w=1800&t=st=1696987264~exp=1696987864~hmac=eed4b98a4303e206b1b388a7a1de710e21b181d1fa7511187e10873217f30b25"
                  alt=""
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="w-full">
            <a className="mt-3 inline-block min-w-full whitespace-nowrap rounded-sm bg-blue-600 px-6 py-3 text-center font-medium text-white shadow-[0_4px_4px_rgba(8,8,8,0.08),0_6px_12px_rgba(8,8,8,0.12),inset_0_1px_1px_rgba(255,255,255,0.5),inset_0_6px_12px_rgba(255,255,255,0.12)] md:min-w-min">
              Ir para o Blog
            </a>
          </div>
        </div>
      </section>
      {/* slider logo
      <section className="flex justify-start px-4 py-8 overflow-hidden sliderlogo">
        <div className="logoloop flex min-w-full [&_img]:me-16 [&_img]:ms-16">
          <img src="logos/vr.svg" className="svgimg" />
          <img src="logos/intelbras.svg" className="svgimg" />
          <img src="logos/itau.svg" className="svgimg" />
          <img src="logos/magalu.svg" className="svgimg" />
          <img src="logos/renner.svg" className="svgimg" />
          <img src="logos/santander.svg" className="svgimg" />
          <img src="logos/sky.svg" className="svgimg" />
        </div>
        <div className="logoloop flex min-w-full [&_img]:me-16 [&_img]:ms-16">
          <img src="logos/vr.svg" className="svgimg" />
          <img src="logos/intelbras.svg" className="svgimg" />
          <img src="logos/itau.svg" className="svgimg" />
          <img src="logos/magalu.svg" className="svgimg" />
          <img src="logos/renner.svg" className="svgimg" />
          <img src="logos/santander.svg" className="svgimg" />
          <img src="logos/sky.svg" className="svgimg" />
        </div>
      </section>*/}
      {/* depo */}
      <section className="py-8 space-y-4 depo bg-slate-100 md:space-y-0 lg:py-16">
        <div className="container px-4 mx-auto lg:px-24">
          <h1 className="mb-6 text-2xl font-bold tracking-tighter">
            Depoimentos
          </h1>
        </div>
        <div className="[overflow:auto][overflow-x:hidden] flex w-full snap-x gap-4 overflow-x-auto pb-4 lg:px-24">
          <div className="relative p-4 bg-white rounded-md shadow-md ms-24 w-72 shrink-0 snap-start scroll-ml-6 md:ms-16 md:w-96">
            <p className="font-bold tracking-widest uppercase">
              MQ Hair Company
            </p>
            <p className="text-slate-400">Rodrigo Pinhata</p>
            <p className="mt-4">
              Por meio dessa solução, conseguimos agregar mais valor no nosso
              relacionamento com os cooperados, especialmente, em meio a
              pandemia, momento em que houve uma procura maior por atendimento
              nos canais digitais.
            </p>
          </div>
          <div className="relative p-4 bg-white rounded-md shadow-md w-72 shrink-0 snap-start scroll-ml-6 md:w-96">
            <p className="font-bold tracking-widest uppercase">VIACREDI</p>
            <p className="text-slate-400">Guilherme Chiesa</p>
            <p className="mt-4">
              Por meio dessa solução, conseguimos agregar mais valor no nosso
              relacionamento com os cooperados, especialmente, em meio a
              pandemia, momento em que houve uma procura maior por atendimento
              nos canais digitais.
            </p>
          </div>
          <div className="relative p-4 bg-white rounded-md shadow-md me-8 w-72 shrink-0 snap-start scroll-ml-6 md:w-96">
            <p className="font-bold tracking-widest uppercase">
              Clínica Imagem
            </p>
            <p className="text-slate-400">Gabriela Brincas</p>
            <p className="mt-4">
              Por meio dessa solução, conseguimos agregar mais valor no nosso
              relacionamento com os cooperados, especialmente, em meio a
              pandemia, momento em que houve uma procura maior por atendimento
              nos canais digitais.
            </p>
          </div>
        </div>
      </section>

      {/* remember */}
      <section className="py-8 bg-blue-600 lg:py-16">
        <div className="container px-4 mx-auto md:flex md:items-center lg:px-24">
          <div className="textos grow">
            <h1 className="mb-2 text-4xl font-bold tracking-tighter text-white">
              Escale seu atendimento
            </h1>
            <h2 className="mb-6 text-white md:mb-0">
              A plataforma já existe você só não usa ainda.
            </h2>
          </div>
          <a className="inline-block w-full whitespace-nowrap rounded-sm bg-white px-6 py-3 text-center font-medium text-blue-600 shadow-[0_4px_4px_rgba(8,8,8,0.08),0_6px_12px_rgba(8,8,8,0.12),inset_0_1px_1px_rgba(255,255,255,0.5),inset_0_6px_12px_rgba(255,255,255,0.12)] md:h-fit md:w-fit">
            <i className="fa-solid fa-phone me-2"></i>Agende uma Demonstração
          </a>
        </div>
      </section>
      {/* numeros */}
      <section className="py-8 numeros lg:py-16">
        <div className="container px-4 mx-auto lg:px-24">
          <h1 className="mb-6 text-2xl font-bold tracking-tighter">
            Estamos nas top 10 empresas do brasil
          </h1>
          <div className="space-y-4 numeros md:grid md:grid-cols-3 md:gap-x-8 md:space-y-0">
            <div className="infonumber">
              <div className="flex">
                <span className="self-center text-3xl font-bold">+</span>
                <span className="font-bold tracking-tighter text-blue-600 text-8xl">
                  50
                </span>
                <span className="self-end mb-2 text-3xl font-bold ms-1">
                  Bi
                </span>
              </div>
              <p>Conexões entre marcas e consumidores</p>
            </div>
            <div className="infonumber">
              <div className="flex">
                <span className="self-center text-3xl font-bold">+</span>
                <span className="font-bold tracking-tighter text-blue-600 text-8xl">
                  70
                </span>
                <span className="self-end mb-2 text-3xl font-bold ms-1">%</span>
              </div>
              <p>Aumento em novas oportunidades de negócios</p>
            </div>
            <div className="infonumber">
              <div className="flex">
                <span className="self-center text-3xl font-bold">+</span>
                <span className="font-bold tracking-tighter text-blue-600 text-8xl">
                  400
                </span>
                <span className="self-end mb-2 text-3xl font-bold ms-1">
                  Mi
                </span>
              </div>
              <p>Robôs programados para chat e voz</p>
            </div>
          </div>
        </div>
      </section>
      {/* rodape */}
      <footer className="py-8 bg-slate-900 lg:py-16">
        <div className="container px-4 mx-auto space-y-8 text-white lg:px-24">
          <div className="space-y-4 logocode7 md:col-span-4">
            <ul className="">
              <p className="text-2xl font-semibold tracking-[-0.075em]">
                code7
              </p>
              <p className="">Reiventamos a forma de comunicar</p>
            </ul>
            <ul className="flex space-x-4 text-2xl socialmediaicons">
              <li>
                <i className="fa-brands fa-whatsapp"></i>
              </li>
              <li>
                <i className="fa-brands fa-facebook"></i>
              </li>
              <li>
                <i className="fa-brands fa-linkedin"></i>
              </li>
              <li>
                <i className="fa-brands fa-spotify"></i>
              </li>
              <li>
                <i className="fa-brands fa-youtube"></i>
              </li>
              <li>
                <i className="fa-brands fa-instagram"></i>
              </li>
            </ul>
          </div>

          <div className="space-y-8 links md:grid md:grid-cols-3 md:space-y-0">
            <ul className="space-y-2">
              <li className="font-bold tracking-widest uppercase text-slate-500">
                Plataforma
              </li>
              <li>Omni</li>
              <li>Bot</li>
              <li>Journey</li>
              <li>Dialer</li>
              <li>API</li>
            </ul>
            <ul className="space-y-2">
              <li className="font-bold tracking-widest uppercase text-slate-500">
                Recursos
              </li>
              <li>Blog</li>
              <li>Cases</li>
              <li>Materiais ricos</li>
              <li>Code7 Academy</li>
              <li>Integrações</li>
              <li>Central de ajuda</li>
            </ul>
            <ul className="space-y-2">
              <li className="font-bold tracking-widest uppercase text-slate-500">
                Empresa
              </li>
              <li>Quem somos</li>
              <li>Imprensa</li>
              <li>Eventos</li>
              <li>Carreiras</li>
              <li>Fale Conosco</li>
              <li>Mapa do site</li>
              <li>Diversidade e inclusão</li>
            </ul>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 md:col-span-4" />
          <ul className="space-y-2 md:flex md:w-full md:space-x-8 md:space-y-0 md:[&_li]:whitespace-nowrap">
            <li>Termos de uso</li>
            <li>Politica de privacidade</li>
            <li>Politica de cookies</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

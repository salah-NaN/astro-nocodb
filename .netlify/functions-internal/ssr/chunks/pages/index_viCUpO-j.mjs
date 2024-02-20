/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, f as renderComponent } from '../astro_2FWC6Hrt.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$Layout, R as ReceptesController, U as UsuarisController } from './_Id__tkI4dsV_.mjs';

const $$Astro$2 = createAstro();
const $$Recepta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Recepta;
  const { nom, img, descripcio, Id } = Astro2.props.dades;
  return renderTemplate`<!-- <div class=" h-[600px] grid content-between border mb-8 w-1/2 p-6 bg-[#EEE5D3]  hover:bg-[#dbd3c2] duration-300 hover:transition-all w-full "> -->${maybeRenderHead()}<div class="h-fit relative flex flex-col  px-7 pt-7 mx-10 rounded-2xl
md:h-[800px]
shadow-2xl bg-[#fbded0]/85 hover:bg-[#d2baad]  duration-400 ease-linear hover:transition-all"> <img class="w-full mb-5 rounded-2xl mx-auto h-1/3 object-cover "${addAttribute(img, "src")} alt=""> <div> <h1 class="font-semibold text-4xl text-left mb-4 ">${nom}</h1> <div class="w-full   pb-3"> ${descripcio?.replace(/\n/g, "*n*").split("*n*").map((e) => renderTemplate`<p class="text-[#5b4540] text-lg font-thin">${e}</p>`)} </div> <!-- div de los botones  --> <div class="  mt-8 mb-3 flex flex-row justify-between"> <a class=" rounded-md duration-200 hover:transition-all hover:bg-red-800 absolute bottom-0 bg-red-500/70 text-white mb-2 block px-3 py-2 border-2 border-solid border-red-700"${addAttribute("/receptes/eliminar/" + Id, "href")}>Eliminar</a> <a class=" rounded-md duration-200 hover:transition-all hover:bg-green-900 absolute bottom-0 right-7 ml-1/2 bg-green-700/70 text-white mb-2 block px-3 py-2 border-2 border-solid border-green-900"${addAttribute("/receptes/actualizar/" + Id, "href")}>Editar</a> </div> </div> </div>`;
}, "/Users/salah/fullStack/enfocaT/astro-nocodb/src/components/Recepta.astro", void 0);

const $$Astro$1 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navbar;
  const { Id, nom, email, password } = Astro2.props.u;
  const usuari = Astro2.props.u;
  const lang = Astro2.cookies.get("idiom");
  return renderTemplate`${maybeRenderHead()}<nav class="  mb-9 my-6 border-2 divide-x-2 divide-black rounded-full border-black/80 mx-auto flex items-center w-fit bg-black/50 text-white shadow-lg"> <a href="/receptes/nova" class=" py-2 px-2">${lang.value === "ca" ? "Nova recepta" : "Nueva receta"}</a> <a class="  py-2 px-2"${addAttribute(`users/update/${Id}`, "href")}><img src="edit.svg" alt=""></a> <a class="  py-2 px-2"${addAttribute("/users/delete/" + Id, "href")}><img src="trash.svg" alt=""></a> <!-- <select id="userUD" class=" rounded-full border bg-amber-200 py-4 px-2" >
      <option >Editar usuari
        <a href=""></a>
      </option>
      <option >Esborrar usuari</option>
  </select> --> <div class=" py-2 px-2"> ${usuari ? renderTemplate`<a href="/logout" class=" no-underline"> <img src="/logout.svg"> </a>` : renderTemplate`<a href="/login" class=" no-underline"> <img src="/login.svg"> </a>`} </div> </nav> <!-- <nav> --> <!-- nueva receta --> <!-- hay que definir la imagen ajustes.svg --> <!-- <a href="/settings/index">
    <img src="/ajustes.svg" width="25" />
  </a> --> <!-- <div class="flex w-1/2 justify-between">
    
  </div> --> <!-- metemos los botones de actualizar y borrar usuario --> <!-- aqui metemos la lógica de cerrar sesión --> <!-- <p class="bg-black/55 text-white p-2 rounded-lg text-bold text-xl ml-12">
    {
      usuari ? (
        <a href="/logout" class="no-underline">
          hay que definir la salida.svg
          <img src="/salida.svg text-white" width="25" />
        </a>
      ) : (
        <a href="/login" class="no-underline w-4">
          <img src="/entrada.svg text-white" width="25" />
        </a>
      )
    }
  </p>
</nav> -->`;
}, "/Users/salah/fullStack/enfocaT/astro-nocodb/src/components/Navbar.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const receptesController = new ReceptesController();
  const usuarisController = new UsuarisController();
  const receptes = await receptesController.getAllReceptes();
  let gotUser = {};
  let usuari;
  if (Astro2.cookies.has("usuari")) {
    const cookie = Astro2.cookies.get("usuari");
    usuari = cookie.value;
    const { list: allUsuaris } = await usuarisController.getAllUsuaris();
    gotUser = allUsuaris.find((user) => user.nom === usuari);
  } else {
    return Astro2.redirect("/login");
  }
  const lang = Astro2.cookies.get("idiom");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": lang.value === "ca" ? "Cuina amb mi!" : "Cocina conmigo!" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "u": gotUser })} ${maybeRenderHead()}<div class="grid grid-cols-1 
  md:grid-cols-2 
  lg:grid-cols-3 lg:gap-x-1  gap-x-0 gap-y-8 md:px-6"> ${receptes.list.filter((recepta) => recepta.usuari === usuari).map((e) => renderTemplate`${renderComponent($$result2, "Recepta", $$Recepta, { "dades": e })}`)} </div> ` })}`;
}, "/Users/salah/fullStack/enfocaT/astro-nocodb/src/pages/index.astro", void 0);

const $$file = "/Users/salah/fullStack/enfocaT/astro-nocodb/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

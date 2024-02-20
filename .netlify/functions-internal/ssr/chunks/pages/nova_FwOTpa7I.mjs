/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_2FWC6Hrt.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$Layout, R as ReceptesController, a as $$Back } from './_Id__tkI4dsV_.mjs';

const $$Astro = createAstro();
const $$Nova = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Nova;
  const receptesController = new ReceptesController();
  const usuari = Astro2.cookies.get("usuari");
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const nom = data.get("nom");
    const foto = data.get("foto");
    const descripcio = data.get("descripcio");
    await receptesController.createRecepta(nom, foto, descripcio, usuari.value);
    return Astro2.redirect("/");
  }
  const lang = Astro2.cookies.get("idiom");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": lang.value === "ca" ? "Nova recepta" : "Nueva receta" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div></div> <form class="mx-[50px] relative
    md:mr-[200px]
    lg:mr-[250px]
    xl:mr-[350px] " method="post"> ${renderComponent($$result2, "Back", $$Back, {})} <div class="md:flex md:items-center mb-6"> <div class="md:w-1/3"> <label class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name"> ${lang.value === "ca" ? "Nom" : "Nombre"} </label> </div> <div class="md:w-2/3"> <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700" name="nom" type="text"> </div> </div> <div class="md:flex md:items-center mb-6"> <div class="md:w-1/3"> <label class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
Foto
</label> </div> <div class="md:w-2/3"> <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700" name="foto" type="text"> </div> </div> <div class="md:flex md:items-center mb-6"> <div class="md:w-1/3"> <label class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name"> ${lang.value === "ca" ? "Descripci\xF3" : "Descripci\xF3n"} </label> </div> <div class="md:w-2/3"> <textarea class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700" name="descripcio"></textarea> </div> </div> <div class="w-full flex justify-end"> <button class="text-gray-700 bg-[#f5d4bc] duration-300 hover:transition-all hover:bg-[#46332f] rounded-xl block   mb-9  p-3  ">Enviar</button> </div> </form> ` })}`;
}, "/Users/salah/fullStack/enfocaT/astro-nocodb/src/pages/receptes/nova.astro", void 0);

const $$file = "/Users/salah/fullStack/enfocaT/astro-nocodb/src/pages/receptes/nova.astro";
const $$url = "/receptes/nova";

export { $$Nova as default, $$file as file, $$url as url };

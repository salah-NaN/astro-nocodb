/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_2FWC6Hrt.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$Layout } from './_Id__tkI4dsV_.mjs';

const $$Astro = createAstro();
const $$LoginError = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LoginError;
  const lang = Astro2.cookies.get("idiom");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Oops..." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class=" mt-20 sm:w-1/2  w-3/4 m-auto"> <div class="bg-red-100 border-t border-b border-red-500 text-red-700 px-4 py-3 rounded-md" role="alert"> <p class="font-bold"> ${lang.value === "ca" ? "Error de validaci\xF3" : "Error de validaci\xF3n"} </p> <p class="text-sm"> ${lang.value === "ca" ? "Hi ha hagut un problema amb el login..." : "Ha habido un problema con el login..."} </p> </div> <a class="mt-4 block" href="/login"> <div class="w-full flex justify-end"> <button class="text-gray-700 bg-[#f5d4bc] duration-300 hover:transition-all hover:bg-[#46332f] rounded-xl block mb-9 p-3">${lang.value === "ca" ? "Torna-ho a provar" : "Vuelve a intentarlo"}</button> </div> </a> </div> ` })}`;
}, "/Users/salah/fullStack/enfocaT/astro-nocodb/src/pages/login_error.astro", void 0);

const $$file = "/Users/salah/fullStack/enfocaT/astro-nocodb/src/pages/login_error.astro";
const $$url = "/login_error";

export { $$LoginError as default, $$file as file, $$url as url };

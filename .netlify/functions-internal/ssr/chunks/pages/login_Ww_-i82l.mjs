/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_2FWC6Hrt.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$Layout, U as UsuarisController } from './_Id__tkI4dsV_.mjs';

const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  if (Astro2.request.method === "POST") {
    const usuarisController = new UsuarisController();
    const data = await Astro2.request.formData();
    const nom = data.get("nom");
    const password = data.get("password");
    const userOk = await usuarisController.validaUsuari(nom, password);
    if (userOk) {
      Astro2.cookies.set("usuari", nom);
      return Astro2.redirect("/");
    } else {
      console.log("Error");
      return Astro2.redirect("/login_error");
    }
  }
  const lang = Astro2.cookies.get("idiom");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": lang?.value === "ca" ? "Iniciar sessi\xF3" : "Iniciar sesi\xF3n" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<form method="post" class="w-7/12 mx-auto my-16
     relative
    md:mr-[234px]
    lg:mr-[330px]
    xl:mr-[420px]"> <div class="md:flex md:items-start mb-6 mt-16 md:mt-20 "> <div class="md:w-1/3"> <label class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4 md:mt-2" for="inline-full-name "> ${lang?.value === "ca" ? "Nom" : "Nombre"} </label> </div> <div class="md:w-2/3"> <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700" name="nom" type="text"> </div> </div> <div class="md:flex md:items-center mb-6"> <div class="md:w-1/3"> <label class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name"> ${lang?.value === "ca" ? "Contrasenya" : "Contrase\xF1a"} </label> </div> <div class="md:w-2/3"> <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700" name="password" type="password"> </div> </div> <p class="text-sm mb-7 md:2/3 text-end"> <a class="text-gray-700 font-bold" href="/signup">${lang?.value === "ca" ? "No est\xE0s registrat? Registra't" : "\xBFNo est\xE1s registrado? Reg\xEDstrate"}</a> </p> <div class="flex justify-end"> <button class="bg-[#e4ccbf] hover:bg-[#d5beb2] hover:transition-all duration-200 text-gray-800 font-bold py-2 px-4 rounded "> ${lang?.value === "ca" ? "Acceptar" : "Aceptar"} </button> </div> </form> ` })}`;
}, "/Users/salah/fullStack/enfocaT/astro-nocodb/src/pages/login.astro", void 0);

const $$file = "/Users/salah/fullStack/enfocaT/astro-nocodb/src/pages/login.astro";
const $$url = "/login";

export { $$Login as default, $$file as file, $$url as url };

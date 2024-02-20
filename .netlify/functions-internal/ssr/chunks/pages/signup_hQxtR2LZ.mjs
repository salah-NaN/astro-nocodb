/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_2FWC6Hrt.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$Layout, U as UsuarisController, a as $$Back } from './_Id__tkI4dsV_.mjs';

const $$Astro = createAstro();
const $$Signup = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signup;
  const lang = Astro2.cookies.get("idiom");
  if (Astro2.request.method === "POST") {
    const usuarisController = new UsuarisController();
    const data = await Astro2.request.formData();
    const nom = data.get("nom");
    const email = data.get("email");
    const password = data.get("password");
    const createUserFeedback = await usuarisController.createUsuari(nom, email, password);
    if (createUserFeedback === "error") {
      return Astro2.redirect("/signup_error");
    } else {
      return Astro2.redirect("/login");
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": lang.value === "ca" ? "Registra't" : "Reg\xEDstrate" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<form method="post" class="mx-[50px] relative
    md:mr-[200px]
    lg:mr-[250px]
    xl:mr-[350px]"> ${renderComponent($$result2, "Back", $$Back, {})} <div class="md:flex md:items-start mb-6"> <div class="md:w-1/3"> <label class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name"> ${lang.value === "ca" ? "Nom" : "Nombre"} </label> </div> <div class="md:w-2/3"> <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700" name="nom" type="text"> </div> </div> <div class="md:flex md:items-start mb-6"> <div class="md:w-1/3"> <label class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name"> ${lang.value === "ca" ? "Correu electr\xF2nic" : "Correo electr\xF3nico"} </label> </div> <div class="md:w-2/3"> <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700" name="email" type="email"> </div> </div> <div class="md:flex md:items-center mb-6"> <div class="md:w-1/3"> <label class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name"> ${lang.value === "ca" ? "Contrasenya" : "Contrase\xF1a"} </label> </div> <div class="md:w-2/3"> <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700" name="password" type="password"> </div> </div> <div class="w-full flex justify-end"> <button class="text-gray-700 bg-[#f5d4bc] duration-300 hover:transition-all hover:bg-[#46332f] rounded-xl block   mb-9  p-3  ">${lang.value === "ca" ? "Acceptar" : "Aceptar"}</button> </div> </form> ` })}`;
}, "/Users/salah/fullStack/enfocaT/astro-nocodb/src/pages/signup.astro", void 0);

const $$file = "/Users/salah/fullStack/enfocaT/astro-nocodb/src/pages/signup.astro";
const $$url = "/signup";

export { $$Signup as default, $$file as file, $$url as url };

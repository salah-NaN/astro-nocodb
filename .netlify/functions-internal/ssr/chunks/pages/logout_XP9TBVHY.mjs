/* empty css                            */
import { c as createAstro, d as createComponent } from '../astro_2FWC6Hrt.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';

const $$Astro = createAstro();
const $$Logout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Logout;
  Astro2.cookies.delete("usuari");
  return Astro2.redirect("/login");
}, "/Users/salah/fullStack/enfocaT/astro-nocodb/src/pages/logout.astro", void 0);

const $$file = "/Users/salah/fullStack/enfocaT/astro-nocodb/src/pages/logout.astro";
const $$url = "/logout";

export { $$Logout as default, $$file as file, $$url as url };

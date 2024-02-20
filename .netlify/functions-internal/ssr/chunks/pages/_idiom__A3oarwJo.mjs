/* empty css                            */
import { c as createAstro, d as createComponent } from '../astro_2FWC6Hrt.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';

const $$Astro = createAstro();
const $$idiom = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$idiom;
  const { idiom } = Astro2.params;
  Astro2.cookies.set("idiom", idiom, { path: "/" });
  return Astro2.redirect("/");
}, "/Users/salah/fullStack/enfocaT/astro-nocodb/src/pages/idiomas/[idiom].astro", void 0);

const $$file = "/Users/salah/fullStack/enfocaT/astro-nocodb/src/pages/idiomas/[idiom].astro";
const $$url = "/idiomas/[idiom]";

export { $$idiom as default, $$file as file, $$url as url };

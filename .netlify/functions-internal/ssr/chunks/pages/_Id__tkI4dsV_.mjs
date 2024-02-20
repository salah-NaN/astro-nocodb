/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderHead, f as renderComponent, g as renderSlot, h as addAttribute } from '../astro_2FWC6Hrt.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'cssesc';
import 'clsx';

const $$Astro$6 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Header;
  const { title } = Astro2.props;
  if (Astro2.cookies.has("usuari")) {
    const cookie2 = Astro2.cookies.get("usuari");
    cookie2.value;
  }
  Astro2.cookies.get("idiom");
  if (!Astro2.cookies.has("idiom")) {
    Astro2.cookies.set("idiom", "ca");
  }
  return renderTemplate`${maybeRenderHead()}<div style="background-image: url(/header-img.jpeg); background-size: 130px 130px;" class="w-11/12 h-28 mx-auto mt-12 mb-10 relative rounded-full flex justify-center items-center text-slate-700  bg-[length:100px_100px]
  md:w-8/12 
  lg:w-7/12 lg:h-[140px] "> <!-- class="pl-3 text-white bg-[black]/55 font-normal text-4xl rounded-xl
        w-fit p-4 my-10 mx-auto md:p-6 md:text-4xl lg:p-8 lg:text-5xl" --> <h1 class="p-4 text-3xl font-sans text-white font-bold bg-black/50 rounded-xl
    md:text-4xl
    lg:text-5xl"> ${title} </h1> </div> <div class="absolute right-0 flex justify-center items-center top-1"> <a class="block m-2 p-1" href="/idiomas/ca"> <img class="h-6 w-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Catalonia.svg/810px-Flag_of_Catalonia.svg.png" alt="catalunya"> </a> <a class="block m-2 p-1" href="/idiomas/es"> <img class="h-6 w-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQREKy9cfYiLuGD_prBWuzN_e5j752B8B5O9w&s" alt="españa"> </a> <!-- en realidad esta <p> </p> de abajo debería ser un div y lo vamos a trasladar a un componente navbar --> <!--  IMPORTANTE hay que definir la salida.svg --> </div> <!-- icono login --> <!-- en caso de que el usuario esté logeado --> <!-- {usuari}{" "}
            {lang.value === "ca" ? "(Tancar sessió)" : "(Cerrar sesión)"} --> <!-- en caso de que el usuario no esté logeado --> <!-- {lang.value === "ca" ? "(Iniciar sessió)" : "(Iniciar sesión)"} --> <!-- recursos --> <!-- {
              usuari ? (
                <a href="/logout" class="no-underline">
      
                  <img src="/salida.svg text-white" width="25" />
                </a>
              ) : (
                <a href="/login" class="no-underline w-4">
                  <img src="/entrada.svg text-white" width="25" />
                </a>
              )
            } --> <!-- <div class="bg-black/55 text-white p-2 rounded-lg text-bold text-xl ml-12">
    
              <img src="entrada.svg" class="w-8" >
            </div> -->`;
}, "/Users/salah/fullStack/enfocaT/astro-nocodb/src/components/Header.astro", void 0);

const $$Astro$5 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title>${renderHead()}</head> <body class="bg-[#d87878]"> ${renderComponent($$result, "Header", $$Header, { "title": title })} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/salah/fullStack/enfocaT/astro-nocodb/src/layouts/Layout.astro", void 0);

const APIURL$1 = 'https://app.nocodb.com/api/v2/tables/mpskrqqu37cqbx3/records';
const TOKEN$1 = '1304jR017Byec9c3EFcOO4GrguCVkktot1cKE27k';
class ReceptesController {
    constructor() {
        this.apiUrl = APIURL$1;
        this.token = TOKEN$1;
    }

    async getAllReceptes() {
        const response = await fetch(`${this.apiUrl}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            }
        });

        const data = await response.json();
        return data;
    }

    async getReceptaById(id) {
        const response = await fetch(`${this.apiUrl}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            }
        });

        const data = await response.json();
        return data;
    }

    async createRecepta(nom, foto, descripcio, usuari) {
        const response = await fetch(`${this.apiUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify({
                nom,
                img:foto,
                descripcio,
                usuari
            })
        });

        const data = await response.json();
        return data;
    }

    async updateRecepta(id, nom, foto, descripcio) {
        this.getReceptaById(id);

        const response = await fetch(`${this.apiUrl}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify({
                id,
                nom,
                img: foto,
                descripcio
            })
        });

        const data = await response.json();
        return data;
    }

    async deleteRecepta(id) {
        //debo eliminar una receta por el identificador de esta pero que 
        //esté asociada a un usuario en concreto
        const response = await fetch(`${this.apiUrl}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify({
                Id:id
            })
        });

        const data = await response.json();
        return data;
    }
}

/*
// Exemple d'ús:
const apiUrl = 'https://example.com/api';
const token = 'el_teu_token_aqui';

const receptesController = new ReceptesController(apiUrl, token);

// Obté totes les receptes
receptesController.getAllReceptes().then(data => console.log(data));

// Obté una recepta per ID
const receptaId = 1;
receptesController.getRecepteById(receptaId).then(data => console.log(data));

// Crea una nova recepta
const novaRecepta = {
    nom: 'Paella',
    foto: 'paella.jpg',
    descripcio: 'Una deliciosa paella'
};
receptesController.createRecepte(novaRecepta.nom, novaRecepta.foto, novaRecepta.descripcio).then(data => console.log(data));

// Actualitza una recepta existent
const receptaActualitzada = {
    id: 1,
    nom: 'Paella Valenciana',
    foto: 'paella_valenciana.jpg',
    descripcio: 'La veritable paella valenciana'
};
receptesController.updateRecepte(receptaActualitzada.id, receptaActualitzada.nom, receptaActual
*/

const APIURL = "https://app.nocodb.com/api/v2/tables/mgedrz7ut206tdu/records";
const TOKEN = "1304jR017Byec9c3EFcOO4GrguCVkktot1cKE27k";

class UsuarisController {
  constructor() {
    this.apiUrl = APIURL;
    this.token = TOKEN;
  }

  async validaUsuari(nom, password) {
    const response = await fetch(`${this.apiUrl}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "xc-token": this.token,
      },
    });
    const response_data = await response.json();

    const users = response_data.list;
    // console.log(users);
    // console.log(users);
    const validUser = users.filter(
      (e) => e.nom === nom && e.password === password
    );

    return !!validUser.length;
  }

  async getAllUsuaris() {
    const response = await fetch(`${this.apiUrl}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "xc-token": this.token,
      },
    });

    return response.json();
  }

  async getUsuariById(id) {
    const response = await fetch(`${this.apiUrl}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "xc-token": this.token,
      },
    });

    const data = await response.json();
    return data;
  }

  async createUsuari(nom, email, password) {
    const usuaris = await this.getAllUsuaris();
    const listaUsuaris = usuaris.list;

    const exists = listaUsuaris.filter(usuari => usuari.nom === nom);
    if (exists.length === 0 && (nom !== '') && (email !== '') && (password !== '')) {
      const response = await fetch(`${this.apiUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "xc-token": this.token,
        },
        body: JSON.stringify({
          nom,
          password,
          email,
        }),
      });

      const data = await response.json();
      return data;
    } else {
        return 'error';
    }
  }

  async updateUsuari(id, email, password) {
    const response = await fetch(`${this.apiUrl}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "xc-token": this.token,
      },
      body: JSON.stringify({
        id,
        email,
        password
      })
    });

    const data = await response.json();
    return data;
  }

  async deleteUsuari(id) {
    const response = await fetch(`${this.apiUrl}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "xc-token": this.token,
      },
      body: JSON.stringify({
        Id: id,
      }),
    });

    const data = await response.json();
    return data;
  }
}

/*
// Exemple d'ús:
const apiUrl = 'https://example.com/api';
const token = 'el_teu_token_aqui';
const usuarisController = new ReceptesController(apiUrl, token);
// Obté totes les receptes
receptesController.getAllReceptes().then(data => console.log(data));
// Obté una recepta per ID
const receptaId = 1;
receptesController.getRecepteById(receptaId).then(data => console.log(data));
// Crea una nova recepta
const novaUsuari = {
    nom: 'Paella',
    foto: 'paella.jpg',
    descripcio: 'Una deliciosa paella'
};
receptesController.createRecepte(novaUsuari.nom, novaUsuari.foto, novaUsuari.descripcio).then(data => console.log(data));
// Actualitza una recepta existent
const receptaActualitzada = {
    id: 1,
    nom: 'Paella Valenciana',
    foto: 'paella_valenciana.jpg',
    descripcio: 'La veritable paella valenciana'
};
receptesController.updateRecepte(receptaActualitzada.id, receptaActualitzada.nom, receptaActual
*/

const $$Astro$4 = createAstro();
const $$Back = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Back;
  return renderTemplate`${maybeRenderHead()}<a class="text-white bg-[#f5d4bc] shadow duration-300 hover:transition-all hover:bg-[#46332f] rounded-full block w-fit  mb-9  p-3" href="/"> <img src="/back-arrow.svg" width="20"> </a>`;
}, "/Users/salah/fullStack/enfocaT/astro-nocodb/src/components/Back.astro", void 0);

const $$Astro$3 = createAstro();
const $$Id$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Id$3;
  const { Id } = Astro2.params;
  const lang = Astro2.cookies.get("idiom");
  const receptesController = new ReceptesController();
  const recepta = await receptesController.getReceptaById(Id);
  const { nombre, imagen, descripcion } = recepta;
  console.log(recepta);
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const id = data.get("id");
    const nom = data.get("nom") === "" ? nombre : data.get("nom");
    const img = data.get("foto") === "" ? imagen : data.get("foto");
    const descripcio = data.get("descripcio") === "" ? descripcion : data.get("descripcio");
    await receptesController.updateRecepta(id, nom, img, descripcio);
    return Astro2.redirect("/");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Editar" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<form class="mx-[50px] relative
    md:mr-[200px]
    lg:mr-[250px]
    xl:mr-[350px]" method="post"> ${renderComponent($$result2, "Back", $$Back, {})} <div class="md:flex md:items-center mb-6"> <div class="md:w-1/3"> <label class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name"> ${lang.value === "ca" ? "Nom" : "Nombre"} </label> </div> <div class="md:w-2/3"> <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700" name="nom" type="text"> </div> </div> <div class="md:flex md:items-center mb-6"> <div class="md:w-1/3"> <label class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
Foto
</label> </div> <div class="md:w-2/3"> <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700" name="foto" type="text"> </div> </div> <div class="md:flex md:items-center mb-6"> <div class="md:w-1/3"> <label class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name"> ${lang.value === "ca" ? "Descripci\xF3" : "Descripci\xF3n"} </label> </div> <div class="md:w-2/3"> <textarea class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700" name="descripcio"></textarea> </div> </div> <input${addAttribute(Id, "value")} name="id" type="hidden"> <div class="w-full flex justify-end"> <button class="text-gray-700 bg-[#f5d4bc] duration-300 hover:transition-all hover:bg-[#46332f] rounded-xl block   mb-9  p-3  ">Enviar</button> </div> </form>  ` })}`;
}, "/Users/salah/fullStack/enfocaT/astro-nocodb/src/pages/receptes/actualizar/[Id].astro", void 0);

const $$file$3 = "/Users/salah/fullStack/enfocaT/astro-nocodb/src/pages/receptes/actualizar/[Id].astro";
const $$url$3 = "/receptes/actualizar/[Id]";

const _Id_$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Id$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$Id$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Id$2;
  const { Id } = Astro2.params;
  const lang = Astro2.cookies.get("idiom");
  const receptesController = new ReceptesController();
  const recepta = await receptesController.getReceptaById(Id);
  console.log(recepta);
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const id = data.get("id");
    await receptesController.deleteRecepta(id);
    return Astro2.redirect("/");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": lang?.value === "ca" ? "Eliminar recepta" : "Eliminar receta" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-3/4 mx-auto flex flex-col mt-7 "> <h1 class="relative flex justify-center items-center h-20 w-2/3 self-center bg-red-600/40 text-white/90 text-lg font-semibold rounded-xl border-red-900 border-4 border-double "> <img src="/alert.svg" class="absolute left-8"> ${lang.value === "ca" ? "Segur que vols eliminar " : "Seguro que quieres eliminar "} ${recepta.nom}?
</h1> <form class="w-1/2 flex justify-center mx-auto mt-7" method="post"> <input name="id" type="hidden"${addAttribute(Id, "value")}> <button class="w-1/4  bg-gray-500/70 my-4 mx-6 rounded-md border-black/30 border-2  " type="button"><a class="size-full flex items-center justify-center p-4 " href="/">No</a></button> <button class="w-1/4 py-3 px-6 bg-red-700/80 my-4 mx-6 rounded-md border-black/30 border-2  " type="submit">Sí</button> </form> </div>  ` })}`;
}, "/Users/salah/fullStack/enfocaT/astro-nocodb/src/pages/receptes/eliminar/[Id].astro", void 0);

const $$file$2 = "/Users/salah/fullStack/enfocaT/astro-nocodb/src/pages/receptes/eliminar/[Id].astro";
const $$url$2 = "/receptes/eliminar/[Id]";

const _Id_$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Id$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Id$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Id$1;
  const { Id } = Astro2.params;
  const lang = Astro2.cookies.get("idiom");
  const usuarisController = new UsuarisController();
  const recetasController = new ReceptesController();
  const { nom: nombre } = await usuarisController.getUsuariById(Id);
  if (Astro2.request.method === "POST") {
    const usuarisController2 = new UsuarisController();
    const data = await Astro2.request.formData();
    const id = data.get("dlt");
    const { list: listReceptas } = await recetasController.getAllReceptes();
    const listIdReceptas = listReceptas.filter((r) => r.usuari == nombre).map((r) => r.Id);
    listIdReceptas.forEach(async (id2) => await recetasController.deleteRecepta(id2));
    await usuarisController2.deleteUsuari(id);
    return Astro2.redirect("/login");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": lang?.value === "ca" ? "Eliminar usuari" : "Eliminar usuario" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-3/4 mx-auto flex flex-col mt-7 "> <h1 class="relative flex justify-center items-center h-20 w-2/3 self-center bg-red-600/40 text-white/90 text-lg font-semibold rounded-xl border-red-900 border-4 border-double "> <img src="/alert.svg" class="absolute left-8"> ${lang.value === "ca" ? "Segur que vols eliminar a " : "Seguro que quieres eliminar a "} ${nombre}?
</h1> <form class="w-1/2 flex justify-center mx-auto mt-7" method="post"> <input name="dlt" type="hidden"${addAttribute(Id, "value")}> <button class="w-1/4  bg-gray-500/70 my-4 mx-6 rounded-md border-black/30 border-2  " type="button"><a class="size-full flex items-center justify-center p-4 " href="/">No</a></button> <button class="w-1/4 py-3 px-6 bg-red-700/80 my-4 mx-6 rounded-md border-black/30 border-2  " type="submit">Sí</button> </form> </div> ` })}`;
}, "/Users/salah/fullStack/enfocaT/astro-nocodb/src/pages/users/delete/[Id].astro", void 0);

const $$file$1 = "/Users/salah/fullStack/enfocaT/astro-nocodb/src/pages/users/delete/[Id].astro";
const $$url$1 = "/users/delete/[Id]";

const _Id_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Id$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Id;
  const { Id } = Astro2.params;
  const lang = Astro2.cookies.get("idiom");
  const usuarisController = new UsuarisController();
  const user = await usuarisController.getUsuariById(Id);
  const { nom, password, email } = user;
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const id = data.get("id");
    const mail = data.get("email") === "" ? email : data.get("email");
    const pass = data.get("password") === "" ? password : data.get("password");
    await usuarisController.updateUsuari(id, mail, pass);
    return Astro2.redirect("/login");
  }
  return renderTemplate`<!-- <Layout>
    <Back></Back>

</Layout> -->${renderComponent($$result, "Layout", $$Layout, { "title": lang.value === "ca" ? "Configuraci\xF3" : "Configuraci\xF3n" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<form class="mx-[50px] relative
  md:mr-[200px]
  lg:mr-[250px]
  xl:mr-[350px]" method="post"> ${renderComponent($$result2, "Back", $$Back, {})} <div class="md:flex md:items-center mb-6"> <div class="md:w-1/3"> <label class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name"> ${lang.value === "ca" ? "Nom" : "Nombre"} </label> </div> <div class="md:w-2/3"> <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700" name="nom" type="text" disabled="true"${addAttribute(nom, "value")}> </div> </div> <div class="md:flex md:items-center mb-6"> <div class="md:w-1/3"> <label class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
Email
</label> </div> <div class="md:w-2/3"> <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700" name="email" type="email"> </div> </div> <div class="md:flex md:items-center mb-6"> <div class="md:w-1/3"> <label class="block text-gray-500 md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name"> ${lang.value === "ca" ? "Contrasenya" : "Contrase\xF1a"} </label> </div> <div class="md:w-2/3"> <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700" name="password" type="text"> </div> </div> <input${addAttribute(Id, "value")} name="id" type="hidden"> <div class="w-full flex justify-end"> <button class="text-gray-700 bg-[#f5d4bc] duration-300 hover:transition-all hover:bg-[#46332f] rounded-xl block mb-9 p-3">Enviar</button> </div> </form> ` })}`;
}, "/Users/salah/fullStack/enfocaT/astro-nocodb/src/pages/users/update/[Id].astro", void 0);

const $$file = "/Users/salah/fullStack/enfocaT/astro-nocodb/src/pages/users/update/[Id].astro";
const $$url = "/users/update/[Id]";

const _Id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, ReceptesController as R, UsuarisController as U, _Id_$3 as _, $$Back as a, _Id_$2 as b, _Id_$1 as c, _Id_ as d };

import { renderers } from './renderers.mjs';
import { manifest } from './manifest_D8q3fa03.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_rllOsq-6.mjs');
const _page1 = () => import('./chunks/_idiom__o141gL2r.mjs');
const _page2 = () => import('./chunks/index_1U4gY6t-.mjs');
const _page3 = () => import('./chunks/login_eSCHASWM.mjs');
const _page4 = () => import('./chunks/login_error_aqtyx5Ri.mjs');
const _page5 = () => import('./chunks/logout_5Ky1iGMK.mjs');
const _page6 = () => import('./chunks/_Id__gQMF0eUJ.mjs');
const _page7 = () => import('./chunks/_Id__OQyzSCXY.mjs');
const _page8 = () => import('./chunks/nova_u082OZN0.mjs');
const _page9 = () => import('./chunks/signup_q9kBPsvb.mjs');
const _page10 = () => import('./chunks/signup_error_3rt9yten.mjs');
const _page11 = () => import('./chunks/_Id__vrKBBy7z.mjs');
const _page12 = () => import('./chunks/_Id__BTaWz_-6.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/idiomas/[idiom].astro", _page1],
    ["src/pages/index.astro", _page2],
    ["src/pages/login.astro", _page3],
    ["src/pages/login_error.astro", _page4],
    ["src/pages/logout.astro", _page5],
    ["src/pages/receptes/actualizar/[Id].astro", _page6],
    ["src/pages/receptes/eliminar/[Id].astro", _page7],
    ["src/pages/receptes/nova.astro", _page8],
    ["src/pages/signup.astro", _page9],
    ["src/pages/signup_error.astro", _page10],
    ["src/pages/users/delete/[Id].astro", _page11],
    ["src/pages/users/update/[Id].astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "a026ebd2-482a-4f89-adbc-c05a7251f5d8"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

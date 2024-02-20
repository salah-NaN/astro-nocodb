import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_2FWC6Hrt.mjs';
import 'cssesc';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_idiom_.2V0MMpbb.css"}],"routeData":{"route":"/idiomas/[idiom]","isIndex":false,"type":"page","pattern":"^\\/idiomas\\/([^/]+?)\\/?$","segments":[[{"content":"idiomas","dynamic":false,"spread":false}],[{"content":"idiom","dynamic":true,"spread":false}]],"params":["idiom"],"component":"src/pages/idiomas/[idiom].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_idiom_.2V0MMpbb.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_idiom_.2V0MMpbb.css"}],"routeData":{"route":"/login","isIndex":false,"type":"page","pattern":"^\\/login\\/?$","segments":[[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login.astro","pathname":"/login","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_idiom_.2V0MMpbb.css"}],"routeData":{"route":"/login_error","isIndex":false,"type":"page","pattern":"^\\/login_error\\/?$","segments":[[{"content":"login_error","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login_error.astro","pathname":"/login_error","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_idiom_.2V0MMpbb.css"}],"routeData":{"route":"/logout","isIndex":false,"type":"page","pattern":"^\\/logout\\/?$","segments":[[{"content":"logout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/logout.astro","pathname":"/logout","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_idiom_.2V0MMpbb.css"}],"routeData":{"route":"/receptes/actualizar/[id]","isIndex":false,"type":"page","pattern":"^\\/receptes\\/actualizar\\/([^/]+?)\\/?$","segments":[[{"content":"receptes","dynamic":false,"spread":false}],[{"content":"actualizar","dynamic":false,"spread":false}],[{"content":"Id","dynamic":true,"spread":false}]],"params":["Id"],"component":"src/pages/receptes/actualizar/[Id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_idiom_.2V0MMpbb.css"}],"routeData":{"route":"/receptes/eliminar/[id]","isIndex":false,"type":"page","pattern":"^\\/receptes\\/eliminar\\/([^/]+?)\\/?$","segments":[[{"content":"receptes","dynamic":false,"spread":false}],[{"content":"eliminar","dynamic":false,"spread":false}],[{"content":"Id","dynamic":true,"spread":false}]],"params":["Id"],"component":"src/pages/receptes/eliminar/[Id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_idiom_.2V0MMpbb.css"}],"routeData":{"route":"/receptes/nova","isIndex":false,"type":"page","pattern":"^\\/receptes\\/nova\\/?$","segments":[[{"content":"receptes","dynamic":false,"spread":false}],[{"content":"nova","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/receptes/nova.astro","pathname":"/receptes/nova","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_idiom_.2V0MMpbb.css"}],"routeData":{"route":"/signup","isIndex":false,"type":"page","pattern":"^\\/signup\\/?$","segments":[[{"content":"signup","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/signup.astro","pathname":"/signup","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_idiom_.2V0MMpbb.css"}],"routeData":{"route":"/signup_error","isIndex":false,"type":"page","pattern":"^\\/signup_error\\/?$","segments":[[{"content":"signup_error","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/signup_error.astro","pathname":"/signup_error","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_idiom_.2V0MMpbb.css"}],"routeData":{"route":"/users/delete/[id]","isIndex":false,"type":"page","pattern":"^\\/users\\/delete\\/([^/]+?)\\/?$","segments":[[{"content":"users","dynamic":false,"spread":false}],[{"content":"delete","dynamic":false,"spread":false}],[{"content":"Id","dynamic":true,"spread":false}]],"params":["Id"],"component":"src/pages/users/delete/[Id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_idiom_.2V0MMpbb.css"}],"routeData":{"route":"/users/update/[id]","isIndex":false,"type":"page","pattern":"^\\/users\\/update\\/([^/]+?)\\/?$","segments":[[{"content":"users","dynamic":false,"spread":false}],[{"content":"update","dynamic":false,"spread":false}],[{"content":"Id","dynamic":true,"spread":false}]],"params":["Id"],"component":"src/pages/users/update/[Id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/salah/fullStack/enfocaT/astro-nocodb/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/salah/fullStack/enfocaT/astro-nocodb/src/pages/login.astro",{"propagation":"none","containsHead":true}],["/Users/salah/fullStack/enfocaT/astro-nocodb/src/pages/login_error.astro",{"propagation":"none","containsHead":true}],["/Users/salah/fullStack/enfocaT/astro-nocodb/src/pages/receptes/actualizar/[Id].astro",{"propagation":"none","containsHead":true}],["/Users/salah/fullStack/enfocaT/astro-nocodb/src/pages/receptes/eliminar/[Id].astro",{"propagation":"none","containsHead":true}],["/Users/salah/fullStack/enfocaT/astro-nocodb/src/pages/receptes/nova.astro",{"propagation":"none","containsHead":true}],["/Users/salah/fullStack/enfocaT/astro-nocodb/src/pages/signup.astro",{"propagation":"none","containsHead":true}],["/Users/salah/fullStack/enfocaT/astro-nocodb/src/pages/signup_error.astro",{"propagation":"none","containsHead":true}],["/Users/salah/fullStack/enfocaT/astro-nocodb/src/pages/users/delete/[Id].astro",{"propagation":"none","containsHead":true}],["/Users/salah/fullStack/enfocaT/astro-nocodb/src/pages/users/update/[Id].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/idiomas/[idiom].astro":"chunks/pages/_idiom__A3oarwJo.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_XqK6DfEY.mjs","/src/pages/index.astro":"chunks/pages/index_viCUpO-j.mjs","/src/pages/login.astro":"chunks/pages/login_Ww_-i82l.mjs","/src/pages/login_error.astro":"chunks/pages/login_error_Kwpz5TnW.mjs","/src/pages/logout.astro":"chunks/pages/logout_XP9TBVHY.mjs","/src/pages/receptes/nova.astro":"chunks/pages/nova_FwOTpa7I.mjs","/src/pages/signup.astro":"chunks/pages/signup_hQxtR2LZ.mjs","/src/pages/signup_error.astro":"chunks/pages/signup_error_ph-PP5PO.mjs","\u0000@astrojs-manifest":"manifest_D8q3fa03.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_rllOsq-6.mjs","\u0000@astro-page:src/pages/idiomas/[idiom]@_@astro":"chunks/_idiom__o141gL2r.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_1U4gY6t-.mjs","\u0000@astro-page:src/pages/login@_@astro":"chunks/login_eSCHASWM.mjs","\u0000@astro-page:src/pages/login_error@_@astro":"chunks/login_error_aqtyx5Ri.mjs","\u0000@astro-page:src/pages/logout@_@astro":"chunks/logout_5Ky1iGMK.mjs","\u0000@astro-page:src/pages/receptes/actualizar/[Id]@_@astro":"chunks/_Id__gQMF0eUJ.mjs","\u0000@astro-page:src/pages/receptes/eliminar/[Id]@_@astro":"chunks/_Id__OQyzSCXY.mjs","\u0000@astro-page:src/pages/receptes/nova@_@astro":"chunks/nova_u082OZN0.mjs","\u0000@astro-page:src/pages/signup@_@astro":"chunks/signup_q9kBPsvb.mjs","\u0000@astro-page:src/pages/signup_error@_@astro":"chunks/signup_error_3rt9yten.mjs","\u0000@astro-page:src/pages/users/delete/[Id]@_@astro":"chunks/_Id__vrKBBy7z.mjs","\u0000@astro-page:src/pages/users/update/[Id]@_@astro":"chunks/_Id__BTaWz_-6.mjs","astro:scripts/before-hydration.js":""},"assets":["/_astro/_idiom_.2V0MMpbb.css","/alert.svg","/back-arrow.svg","/edit.svg","/favicon.svg","/header-img.jpeg","/login.svg","/logout.svg","/trash.svg"],"buildFormat":"directory"});

export { manifest };

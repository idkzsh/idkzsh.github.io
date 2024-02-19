/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, F as Fragment, g as renderSlot, h as renderHead } from '../astro_CPsY-wnA.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';

const $$Astro$d = createAstro();
const $$Toggle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Toggle;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center text-primary w-20 gap-6" x-data="{ switchOn: $persist(false) }"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" @click="switchOn = !switchOn; document.body.classList.toggle('dark', switchOn)"${addAttribute(`lucide lucide-moon cursor-pointer`, "class")} x-show="!switchOn" x-transition:enter="transition duration-500" x-transition:enter-start="-rotate-90 scale-0" x-transition:leave-end="rotate-0 scale-100" x-cloak> <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" @click="switchOn = !switchOn; document.body.classList.toggle('dark', switchOn)" class="lucide lucide-sun cursor-pointer" x-show="switchOn" x-transition:enter="transition duration-500" x-transition:enter-start="rotate-90 scale-0" x-transition:leave-start="rotate-0 scale-100" x-cloak> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <circle cx="12" cy="12" r="4"></circle> <path d="M12 2v2"></path> <path d="M12 20v2"></path> <path d="m4.93 4.93 1.41 1.41"></path> <path d="m17.66 17.66 1.41 1.41"></path> <path d="M2 12h2"></path> <path d="M20 12h2"></path> <path d="m6.34 17.66-1.41 1.41"></path> <path d="m19.07 4.93-1.41 1.41"></path> ` })} </svg> </div>`;
}, "/Users/zach/Documents/Dev/i-dkz.github.io/src/components/ui/Toggle.astro", void 0);

const $$Astro$c = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="flex w-full justify-between items-center h-16"> <div class="flex justify-center items-center w-[40px] h-[40px] rounded-lg font-bold bg-card text-card-foreground text-xl duration-300 hover:-rotate-12 hover:scale-90">
?
</div> ${renderComponent($$result, "Toggle", $$Toggle, {})} </header>`;
}, "/Users/zach/Documents/Dev/i-dkz.github.io/src/components/Header.astro", void 0);

const $$Astro$b = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="flex justify-between text-xs border-t items-center h-14 text-primary mt-8 sm:mt-0"> <div>2024</div> <div>Made with Astro.js, HTMX, and Alpine.js </div> </footer>`;
}, "/Users/zach/Documents/Dev/i-dkz.github.io/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$a = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", '</title><!-- Alpine Plugins --><script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/persist@3.x.x/dist/cdn.min.js"><\/script><!-- Alpine Core --><script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"><\/script>', `</head> <body class="bg-background flex justify-between items-center flex-col min-h-screen" x-data="{ switchOn: $persist(false) }" :class="{ 'dark': switchOn }"> <div class="flex flex-col w-[450px] sm:w-[600px] md:w-[765px] lg:w-[860px] p-2 px-4 min-h-screen flex-wrap justify-between"> `, " ", " ", " </div> </body></html>"])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/zach/Documents/Dev/i-dkz.github.io/src/layouts/Layout.astro", void 0);

const $$Astro$9 = createAstro();
const $$HTMX = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$HTMX;
  const { title, bg, responsiveWidth, height } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`text-2xl flex justify-center gap-2 items-center ${responsiveWidth} ${height} bg-card rounded-lg `, "class")}> <div${addAttribute(`z-20 flex items-center justify-center ${bg} w-8 h-8 rounded-lg bg-opacity-20`, "class")}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 100" width="100" height="100"> <text x="11" y="70" font-family="Inter" font-size="60" fill="black" font-weight="700">
&lt;
</text> <text x="48" y="74" font-family="Inter" font-size="70" fill="#3366cc" font-weight="600">
/
</text> <text x="70" y="70" font-family="Inter" font-size="60" fill="black" font-weight="700">
&gt;
</text> </svg> </div> <span class="z-30 text-sm font-medium text-black">${title}</span> </div>`;
}, "/Users/zach/Documents/Dev/i-dkz.github.io/src/components/customSVG/HTMX.astro", void 0);

const $$Astro$8 = createAstro();
const $$Python = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Python;
  const { title, bg, responsiveWidth, height } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`text-2xl flex justify-center gap-2 items-center ${responsiveWidth} ${height} bg-card rounded-lg `, "class")}> <div${addAttribute(`z-20 flex items-center justify-center ${bg} w-8 h-8 rounded-lg bg-opacity-20`, "class")}> <svg height="460.8px" style="enable-background:new 0 0 512 512; margin-left: 5px; margin-top: 5px;" version="1.1" viewBox="0 0 600 600" width="460.8px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <g id="comp_x5F_267-python"> <g> <g> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <g> ${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate` <path d="M194.005,240.252h105.054c29.216,0,52.529-24.101,52.529-53.414V86.603      c0-28.525-24.002-49.871-52.529-54.691c-35.214-5.804-73.479-5.509-105.054,0.097c-44.462,7.87-52.527,24.298-52.527,54.693      v21.453H246.63v31.959H102.032c-30.591,0-57.349,18.394-65.709,53.315c-9.64,40.035-10.032,65.02,0,106.826      c7.477,31.085,25.28,53.314,55.872,53.314h36.101v-48.001C128.296,270.845,158.298,240.252,194.005,240.252L194.005,240.252z" style="fill:#347AB4;"></path> <g> <path d="M128.296,363.569H92.195c-32.842,0-56.137-21.655-65.595-60.976       c-10.146-42.276-10.145-69.37,0-111.505c4.521-18.885,14.243-34.559,28.112-45.314c13.21-10.245,29.573-15.66,47.319-15.66       H236.63v-11.959h-95.152c-5.523,0-10-4.477-10-10V86.702c0-13.954,1.423-29.889,11.979-42.278       c9.452-11.094,24.504-17.96,48.806-22.261c16.512-2.932,35.127-4.482,53.829-4.482c18.655,0,37.023,1.469,54.594,4.365       c16.345,2.762,31.383,10.299,42.385,21.229c11.941,11.865,18.519,27.253,18.519,43.329v100.235       c0,34.967-28.051,63.414-62.529,63.414H194.005c-29.677,0-55.709,25.849-55.709,55.316v48.001       C138.296,359.092,133.819,363.569,128.296,363.569z M102.032,150.114c-28.213,0-49.142,17.063-55.984,45.643       c-9.526,39.563-9.525,62.475-0.001,102.165c5.008,20.821,17.081,45.647,46.148,45.647h26.101v-38.001       c0-19.263,8.159-38.487,22.386-52.743c14.527-14.557,33.464-22.573,53.323-22.573h105.054       c23.451,0,42.529-19.476,42.529-43.414V86.603c0-24.529-22.233-41.12-44.195-44.831c-16.46-2.713-33.733-4.092-51.302-4.092       c-17.549,0-34.956,1.444-50.337,4.175c-39.908,7.064-44.275,19.689-44.275,44.847v11.453h95.152c5.523,0,10,4.477,10,10v31.959       c0,5.523-4.477,10-10,10H102.032z" style="fill:#275C87;"></path> </g> ` })} </g> <g> ${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate` <path d="M474.975,209.372c-7.575-30.395-21.935-53.315-52.527-53.315h-39.443v46.626      c0,36.199-30.692,66.691-65.71,66.691H212.24c-28.724,0-52.528,24.594-52.528,53.414v100.138      c0,28.524,24.788,45.246,52.528,53.413c33.247,9.737,65.215,11.509,105.054,0c26.462-7.675,52.529-23.116,52.529-53.413v-20.997      H264.867v-32.417h157.58c30.593,0,41.904-21.346,52.527-53.314C485.992,283.244,485.501,251.57,474.975,209.372L474.975,209.372      z" style="fill:#FFCA1D;"></path> <g> <path d="M264.431,494.32c-17.747,0-35.738-2.743-55.001-8.385       c-38.515-11.339-59.718-33.715-59.718-63.01V322.788c0-34.374,28.634-63.414,62.528-63.414h105.054       c29.678,0,55.71-26.491,55.71-56.691v-46.626c0-5.523,4.478-10,10-10h39.443c17.276,0,31.546,6.279,42.412,18.664       c8.734,9.955,15.217,23.77,19.818,42.232c11.191,44.863,11.126,78.483-0.219,112.415c-10.11,30.424-23.23,60.144-62.012,60.144       h-147.58v12.417h94.956c5.522,0,10,4.478,10,10v20.997c0,20.844-10.365,48.696-59.744,63.018       C300.563,491.581,282.364,494.32,264.431,494.32z M212.24,279.374c-23.053,0-42.528,19.881-42.528,43.414v100.138       c0,26.51,28.415,38.834,45.353,43.82c17.639,5.166,33.33,7.574,49.366,7.574c16.028,0,32.413-2.482,50.088-7.589       c30.059-8.718,45.305-23.457,45.305-43.806v-10.997h-94.956c-5.522,0-10-4.478-10-10v-32.417c0-5.522,4.478-10,10-10h157.58       c21.148,0,31.204-10.857,43.037-46.468c10.189-30.476,10.126-59.805-0.213-101.252c-7.883-31.631-21.09-45.735-42.824-45.735       h-29.443v36.626c0,41.571-34.671,76.691-75.71,76.691H212.24z" style="fill:#BF9816;"></path> </g> ` })} </g> <path d="M187.414,89.594c-10.479,0-18.975-8.591-18.975-19.164c0.094-10.668,8.496-19.259,18.975-19.259     c10.386,0,18.976,8.685,18.976,19.259C206.39,81.003,197.894,89.594,187.414,89.594z" style="fill:#FFFFFF;"></path> <path d="M314.908,460.076c-10.479,0-18.976-8.591-18.976-19.164c0.095-10.668,8.496-19.259,18.976-19.259     c10.385,0,18.976,8.685,18.976,19.259C333.884,451.485,325.388,460.076,314.908,460.076z" style="fill:#FFFFFF;"></path> ` })} </g> </g> </g> <g id="Layer_1"></g> ` })} </svg> </div> <span class="z-30 text-sm font-medium text-black">${title}</span> </div>`;
}, "/Users/zach/Documents/Dev/i-dkz.github.io/src/components/customSVG/Python.astro", void 0);

const $$Astro$7 = createAstro();
const $$Django = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Django;
  const { title, bg, responsiveWidth, height } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`text-2xl flex justify-center gap-2 items-center ${responsiveWidth} ${height} bg-card rounded-lg `, "class")}> <div${addAttribute(`z-20 flex items-center justify-center  ${bg} w-8 h-8 rounded-lg bg-opacity-20`, "class")}> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-django" width="28" height="28" viewBox="0 0 24 24" stroke-width="2" stroke="#009988" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 3m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"></path> <path d="M12 7v8.5l-2.015 .201a2.715 2.715 0 1 1 0 -5.402l2.015 .201"></path> <path d="M16 7v.01"></path> <path d="M16 10v5.586c0 .905 -.36 1.774 -1 2.414"></path> </svg> </div> <span class="z-30 text-sm font-medium text-black">${title}</span> </div>`;
}, "/Users/zach/Documents/Dev/i-dkz.github.io/src/components/customSVG/Django.astro", void 0);

const $$Astro$6 = createAstro();
const $$AstroIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$AstroIcon;
  const { title, bg, responsiveWidth, height } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`text-2xl flex justify-center gap-2 items-center ${responsiveWidth} ${height} bg-card rounded-lg `, "class")}> <div${addAttribute(`z-20 flex items-center justify-center  ${bg} w-8 h-8 rounded-lg bg-opacity-20`, "class")}> <svg role="img" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" style="margin-left: 4px; margin-top: 5px;"><title>Astro</title><path d="M8.358 20.162c-1.186-1.07-1.532-3.316-1.038-4.944.856 1.026 2.043 1.352 3.272 1.535 1.897.283 3.76.177 5.522-.678.202-.098.388-.229.608-.36.166.473.209.95.151 1.437-.14 1.185-.738 2.1-1.688 2.794-.38.277-.782.525-1.175.787-1.205.804-1.531 1.747-1.078 3.119l.044.148a3.158 3.158 0 0 1-1.407-1.188 3.31 3.31 0 0 1-.544-1.815c-.004-.32-.004-.642-.048-.958-.106-.769-.472-1.113-1.161-1.133-.707-.02-1.267.411-1.415 1.09-.012.053-.028.104-.045.165h.002zm-5.961-4.445s3.24-1.575 6.49-1.575l2.451-7.565c.092-.366.36-.614.662-.614.302 0 .57.248.662.614l2.45 7.565c3.85 0 6.491 1.575 6.491 1.575L16.088.727C15.93.285 15.663 0 15.303 0H8.697c-.36 0-.615.285-.784.727l-5.516 14.99z"></path></svg> </div> <span class="z-30 text-sm font-medium text-black">${title}</span> </div>`;
}, "/Users/zach/Documents/Dev/i-dkz.github.io/src/components/customSVG/AstroIcon.astro", void 0);

const $$Astro$5 = createAstro();
const $$Next = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Next;
  const { title, bg, responsiveWidth, height } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`text-2xl flex justify-center gap-2 items-center ${responsiveWidth} ${height} bg-card rounded-lg `, "class")}> <div${addAttribute(`z-20 flex items-center justify-center  ${bg} w-8 h-8 rounded-lg bg-opacity-20`, "class")}> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-nextjs" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path> <path d="M15 12v-3"></path> </svg> </div> <span class="z-30 text-sm font-medium text-black">${title}</span> </div>`;
}, "/Users/zach/Documents/Dev/i-dkz.github.io/src/components/customSVG/Next.astro", void 0);

const $$Astro$4 = createAstro();
const $$Postgres = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Postgres;
  const { title, bg, responsiveWidth, height } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`text-2xl flex justify-center gap-2 items-center ${responsiveWidth} ${height} bg-card rounded-lg `, "class")}> <div${addAttribute(`z-20 flex items-center justify-center  ${bg} w-8 h-8 rounded-lg bg-opacity-20`, "class")}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(36, 111, 161);transform: ;msFilter:;"><path d="M10.74 12.89v-.11c.06-.15.12-.29.19-.43a5.15 5.15 0 0 0 .26-3.74.86.86 0 0 0-.66-.74 3.12 3.12 0 0 0-2.08.61v.18a11.34 11.34 0 0 1-.06 2.41 2.37 2.37 0 0 0 .62 2 2 2 0 0 0 1.43.63 8.05 8.05 0 0 1 .3-.81zM10 8.58a.36.36 0 0 1-.09-.23.19.19 0 0 1 .09-.12.74.74 0 0 1 .48-.07c.25 0 .5.16.48.34a.51.51 0 0 1-.49.33h-.06a.63.63 0 0 1-.41-.25z"></path><path d="M7.88 11a12.58 12.58 0 0 0 .06-2.3v-.28a7 7 0 0 1 1.54-4.55c-1-.32-3.4-1-4.87.1-.9.64-1.32 1.84-1.23 3.55a24.85 24.85 0 0 0 1 4.4c.68 2.22 1.45 3.62 2.11 3.85.1 0 .41.13.86-.41.64-.76 1.23-1.41 1.5-1.7l-.19-.19A2.89 2.89 0 0 1 7.88 11zm3.5 3.4c-.16-.06-.24-.1-.42.11a2.52 2.52 0 0 0-.29.35c-.35.43-.5.58-1.51.79a2 2 0 0 0-.4.11 1 1 0 0 0 .37.16 2.21 2.21 0 0 0 2.5-.8.41.41 0 0 0 0-.35.59.59 0 0 0-.25-.37zm6.29-5.82a5.29 5.29 0 0 0 .08-.79c-.66-.08-1.42-.07-1.72.36-.58.83.56 2.88 1 3.75a4.34 4.34 0 0 1 .26.48 1.79 1.79 0 0 0 .15.31 3.72 3.72 0 0 0 .16-2.13 7.51 7.51 0 0 1-.07-1.05 6 6 0 0 1 .14-.93zm-.56-.16a.6.6 0 0 1-.32.17h-.06a.47.47 0 0 1-.44-.3c0-.14.2-.24.44-.28s.48 0 .5.15a.38.38 0 0 1-.12.26z"></path><path d="M17 4.88a6.06 6.06 0 0 1 1.37 2.57.71.71 0 0 1 0 .15 5.67 5.67 0 0 1-.09 1.06 7.11 7.11 0 0 0-.09.86 6.61 6.61 0 0 0 .07 1 4 4 0 0 1-.36 2.71l.07.08c2.22-3.49 3-7.54 2.29-8.43a4.77 4.77 0 0 0-3.81-1.8 7.34 7.34 0 0 0-1.63.16A6.17 6.17 0 0 1 17 4.88z"></path><path d="M21.65 14c-.07-.2-.37-.85-1.47-.62a6.28 6.28 0 0 1-1 .13 19.74 19.74 0 0 0 2.06-4.88c.37-1.45.66-3.39-.11-4.38A5.91 5.91 0 0 0 16.37 2a8.44 8.44 0 0 0-2.46.35 9.38 9.38 0 0 0-1.45-.14 4.8 4.8 0 0 0-2.46.62 12.22 12.22 0 0 0-1.77-.44A5.44 5.44 0 0 0 4 3.05c-1.24.87-1.81 2.39-1.71 4.52a26.28 26.28 0 0 0 1 4.67A15.76 15.76 0 0 0 4.4 15a3.39 3.39 0 0 0 1.75 1.83 1.71 1.71 0 0 0 1.69-.37 2 2 0 0 0 1 .59 3.65 3.65 0 0 0 2.35-.14v.81a8.46 8.46 0 0 0 .31 2.36 1 1 0 0 1 0 .13 3 3 0 0 0 .71 1.24 2.08 2.08 0 0 0 1.49.56 3 3 0 0 0 .7-.08 3.27 3.27 0 0 0 2.21-1.27 7.34 7.34 0 0 0 .91-4v-.26h.17a5.24 5.24 0 0 0 2.4-.4c.45-.23 1.91-1 1.56-2zm-1.81 1.47a4.7 4.7 0 0 1-1.8.34 2.62 2.62 0 0 1-.79-.1c-.1.94-.32 2.69-.45 3.42a2.47 2.47 0 0 1-2.25 2.3 3.23 3.23 0 0 1-.66.07A2 2 0 0 1 12 20a16.77 16.77 0 0 1-.28-4.06 2.56 2.56 0 0 1-1.78.66 3.94 3.94 0 0 1-.94-.13c-.09 0-.87-.23-.86-.73s.66-.59.9-.64c.86-.18.92-.25 1.19-.59a2.79 2.79 0 0 1 .19-.24 2.56 2.56 0 0 1-1.11-.3c-.23.25-.86.93-1.54 1.74a1.43 1.43 0 0 1-1.11.63 1.23 1.23 0 0 1-.35 0C5.43 16 4.6 14.55 3.84 12a25.21 25.21 0 0 1-1-4.53c-.1-1.92.4-3.28 1.47-4 1.92-1.36 5-.31 5.7-.06a4 4 0 0 1 2.41-.66 5.58 5.58 0 0 1 1.4.18 7.51 7.51 0 0 1 2.5-.4 5.35 5.35 0 0 1 4.32 2c.69.88.23 3 0 3.89a18.84 18.84 0 0 1-2.41 5.41c.16.11.65.31 2 0 .46-.1.73 0 .82.25.22.55-.7 1.13-1.21 1.37z"></path><path d="M17.43 13.59a4 4 0 0 1-.62-1c0-.07-.12-.24-.23-.43-.58-1-1.79-3.22-1-4.34a2.16 2.16 0 0 1 2.12-.61 6.28 6.28 0 0 0-1.13-1.94 5.41 5.41 0 0 0-4.13-2 3.34 3.34 0 0 0-2.55.95A5.82 5.82 0 0 0 8.51 7.8l.15-.08A3.7 3.7 0 0 1 10 7.3a1.45 1.45 0 0 1 1.76 1.19 5.73 5.73 0 0 1-.29 4.09 3.29 3.29 0 0 0-.17.39v.11c-.1.27-.19.52-.25.73a.94.94 0 0 1 .57.07 1.16 1.16 0 0 1 .62.74v.16a.28.28 0 0 1 0 .09 22.22 22.22 0 0 0 .22 4.9 1.5 1.5 0 0 0 2 1.09A1.92 1.92 0 0 0 16.25 19c.15-.88.45-3.35.49-3.88 0-1.06.52-1.27.84-1.36z"></path><path d="m18 14.33-.08-.06h-.12c-.26.07-.5.14-.47.8a1.9 1.9 0 0 0 .93.12 4.29 4.29 0 0 0 1.38-.29 3 3 0 0 0 .79-.52 3.47 3.47 0 0 1-2.43-.05z"></path></svg> </div> <span class="z-30 text-sm font-medium text-black">${title}</span> </div>`;
}, "/Users/zach/Documents/Dev/i-dkz.github.io/src/components/customSVG/Postgres.astro", void 0);

const $$Astro$3 = createAstro();
const $$Alpine = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Alpine;
  const { responsiveWidth, height, bg, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`text-2xl flex justify-center gap-2 items-center ${responsiveWidth} ${height} bg-card rounded-lg `, "class")}> <div${addAttribute(`z-20 flex items-center justify-center  ${bg} w-8 h-8 rounded-lg bg-opacity-20`, "class")}> <svg fill="none" height="50" viewBox="1.069 54 198.26 91.221" width="50" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" fill-rule="evenodd"><path d="m155.271 54 44.058 44.002-44.058 44.001-44.057-44.001z" fill="#77c1d2"></path><path d="m45.127 54 91.337 91.221h-88.115l-47.28-47.22z" fill="#2d3441"></path></g></svg> </div> <span class="z-30 text-sm font-medium text-black">${title}</span> </div>`;
}, "/Users/zach/Documents/Dev/i-dkz.github.io/src/components/customSVG/Alpine.astro", void 0);

const $$Astro$2 = createAstro();
const $$TechCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TechCard;
  const responsiveWidth = "w-[200px] sm:w-[184px] md:w-[177px] lg:w-[19.2%] min-w-[150px]";
  const height = "h-12";
  const { icon, title, color, bg, viewbox, manual } = Astro2.props;
  return renderTemplate`${!manual && renderTemplate`${maybeRenderHead()}<div${addAttribute(`text-2xl flex justify-center gap-2 items-center ${responsiveWidth} ${height} h-[50px] bg-card rounded-lg`, "class")}><div${addAttribute(`z-20 flex items-center justify-center w-8 h-8 rounded-lg bg-opacity-20`, "class")}><svg role="img" xmlns="http://www.w3.org/2000/svg"${addAttribute(viewbox, "viewBox")}${addAttribute(`w-6 fill-current ${color}`, "class")}><path${addAttribute(icon, "d")}></path></svg></div><span class="z-30 text-sm font-medium text-black">${title}</span></div>`}<!-- Custom Icons -->${title === "HTMX" && renderTemplate`${renderComponent($$result, "HTMX", $$HTMX, { "bg": bg, "title": title, "responsiveWidth": responsiveWidth, "height": height })}`}${title === "Alpine.js" && renderTemplate`${renderComponent($$result, "Alpine", $$Alpine, { "bg": bg, "title": title, "responsiveWidth": responsiveWidth, "height": height })}`}${title === "Python" && renderTemplate`${renderComponent($$result, "Python", $$Python, { "bg": bg, "title": title, "responsiveWidth": responsiveWidth, "height": height })}`}${title === "Django" && renderTemplate`${renderComponent($$result, "Django", $$Django, { "bg": bg, "title": title, "responsiveWidth": responsiveWidth, "height": height })}`}${title === "Astrojs" && renderTemplate`${renderComponent($$result, "AstroIcon", $$AstroIcon, { "bg": bg, "title": title, "responsiveWidth": responsiveWidth, "height": height })}`}${title === "Nextjs" && renderTemplate`${renderComponent($$result, "Next", $$Next, { "bg": bg, "title": title, "responsiveWidth": responsiveWidth, "height": height })}`}${title === "Postgres" && renderTemplate`${renderComponent($$result, "Postgres", $$Postgres, { "bg": bg, "title": title, "responsiveWidth": responsiveWidth, "height": height })}`}`;
}, "/Users/zach/Documents/Dev/i-dkz.github.io/src/components/TechCard.astro", void 0);

const data = [
  {
    path: "M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z",
    viewbox: "0 0 512 512",
    title: "React.js",
    color: "text-cyan-500",
    bg: "bg-cyan-500",
    manual: false
  },
  {
    path: "M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z",
    viewbox: "0 0 24 24",
    title: "TailwindCSS",
    color: "text-sky-500",
    bg: "bg-blue-500",
    manual: false
  },
  {
    path: "M64 32l34.94 403.21L255.77 480 413 435.15 448 32zm308 132H188l4 51h176l-13.51 151.39L256 394.48l-98.68-28-6.78-77.48h48.26l3.42 39.29L256 343.07l53.42-14.92L315 264H148l-12.59-149.59H376.2z",
    viewbox: "0 0 512 512",
    title: "HTML5",
    color: "text-orange-600",
    bg: "bg-orange-600",
    manual: false
  },
  {
    path: void 0,
    viewbox: "0 0 120 100",
    title: "HTMX",
    color: void 0,
    bg: "bg-slate-500",
    manual: true
  },
  {
    path: "M64 32l35 403.22L255.77 480 413 435.15 448 32zm290.68 334.9L256.07 395l-98.46-28.24-6.75-77.76h48.26l3.43 39.56 53.59 15.16.13.28 53.47-14.85 5.64-64.15H203l-4-50h120.65l4.35-51H140l-4-49h240.58z",
    viewbox: "0 0 512 512",
    title: "CSS3",
    color: "text-sky-500",
    bg: "bg-blue-600",
    manual: false
  },
  {
    path: "M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM13.3344 16.055C14.0531 16.6343 14.7717 16.9203 15.4904 16.913C15.9304 16.913 16.2677 16.8323 16.5024 16.671C16.7297 16.517 16.8434 16.297 16.8434 16.011C16.8434 15.7177 16.7297 15.4683 16.5024 15.263C16.2677 15.0577 15.8241 14.8523 15.1714 14.647C14.3867 14.4197 13.7817 14.1263 13.3564 13.767C12.9384 13.4077 12.7257 12.9053 12.7184 12.26C12.7184 11.6513 12.9824 11.1417 13.5104 10.731C14.0237 10.3203 14.6801 10.115 15.4794 10.115C16.5941 10.115 17.4887 10.3863 18.1634 10.929L17.3934 12.128C17.1221 11.9153 16.8104 11.7613 16.4584 11.666C16.1064 11.556 15.7911 11.501 15.5124 11.501C15.1311 11.501 14.8267 11.5707 14.5994 11.71C14.3721 11.8493 14.2584 12.0327 14.2584 12.26C14.2584 12.5093 14.3977 12.722 14.6764 12.898C14.9551 13.0667 15.4317 13.2537 16.1064 13.459C16.9204 13.701 17.4997 14.0237 17.8444 14.427C18.1891 14.8303 18.3614 15.3437 18.3614 15.967C18.3614 16.605 18.1157 17.155 17.6244 17.617C17.1404 18.0717 16.4364 18.31 15.5124 18.332C14.3024 18.332 13.2904 17.969 12.4764 17.243L13.3344 16.055ZM7.80405 16.693C8.03872 16.8397 8.32105 16.913 8.65105 16.913C8.99572 16.913 9.28172 16.814 9.50905 16.616C9.73639 16.4107 9.85005 16.055 9.85005 15.549V10.247H11.3351V15.835C11.3131 16.7003 11.0637 17.3237 10.5871 17.705C10.3157 17.9323 10.0187 18.0937 9.69605 18.189C9.37339 18.2843 9.06172 18.332 8.76105 18.332C8.21105 18.332 7.72339 18.2367 7.29805 18.046C6.84339 17.8407 6.46205 17.4777 6.15405 16.957L7.18805 16.11C7.37872 16.3667 7.58405 16.561 7.80405 16.693Z",
    viewbox: "0 0 24 24",
    title: "JavaScript",
    color: "text-yellow-600",
    bg: "bg-yellow-600",
    manual: false
  },
  {
    path: "M19.24 3H4.76A1.76 1.76 0 0 0 3 4.76v14.48A1.76 1.76 0 0 0 4.76 21h14.48A1.76 1.76 0 0 0 21 19.24V4.76A1.76 1.76 0 0 0 19.24 3zm-5.8 10h-2.25v6.44H9.4V13H7.15v-1.46h6.29zm5.8 5.28a1.71 1.71 0 0 1-.67.74 3 3 0 0 1-1 .39 5.81 5.81 0 0 1-1.2.12 7 7 0 0 1-1.23-.11 4.52 4.52 0 0 1-1-.33v-1.71l-.06-.06h.06v.07a3.41 3.41 0 0 0 1 .54 3.06 3.06 0 0 0 1.13.2 2.58 2.58 0 0 0 .6-.06 1.47 1.47 0 0 0 .42-.17.75.75 0 0 0 .25-.25.69.69 0 0 0-.06-.74 1.24 1.24 0 0 0-.35-.33 3.12 3.12 0 0 0-.53-.3l-.67-.28a3.57 3.57 0 0 1-1.37-1 2 2 0 0 1-.46-1.33 2.16 2.16 0 0 1 .24-1.06 2.09 2.09 0 0 1 .66-.71 2.88 2.88 0 0 1 1-.42 5.11 5.11 0 0 1 1.19-.13 7 7 0 0 1 1.09.07 4.53 4.53 0 0 1 .88.23v1.65a2.42 2.42 0 0 0-.42-.24 3.58 3.58 0 0 0-.49-.17 3 3 0 0 0-.49-.1 2.45 2.45 0 0 0-.46 0 2.29 2.29 0 0 0-.56.06 1.54 1.54 0 0 0-.43.16.78.78 0 0 0-.26.25.63.63 0 0 0-.09.33.62.62 0 0 0 .1.35 1.19 1.19 0 0 0 .3.29 2.15 2.15 0 0 0 .46.28l.63.28a6.56 6.56 0 0 1 .84.42 2.65 2.65 0 0 1 .64.49 1.79 1.79 0 0 1 .42.63 2.48 2.48 0 0 1 .14.85 2.68 2.68 0 0 1-.25 1.08z",
    viewbox: "0 0 24 24",
    title: "TypeScript",
    color: "text-blue-500",
    bg: "bg-blue-600",
    manual: false
  },
  {
    path: void 0,
    viewbox: void 0,
    title: "Alpine.js",
    color: void 0,
    bg: void 0,
    manual: true
  },
  {
    path: "M333.5 201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4 238.2 333.5 225 333.5 201.4zM517 188.6c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1 0-55.8 28.1-54.7 58.5c1 29.3-.3 67.2-9.8 98.1c-9.6 31-25.7 50.6-52.2 53.1v28.5c26.4 2.5 42.6 22.1 52.2 53.1c9.5 30.9 10.9 68.8 9.8 98.1c-1.1 30.5 22.7 58.5 54.7 58.5h328.7c32.1 0 55.8-28.1 54.7-58.5c-1-29.3 .3-67.2 9.8-98.1c9.6-31 25.7-50.6 52.1-53.1v-28.5C542.7 239.2 526.5 219.6 517 188.6zM300.2 375.1h-97.9V136.8h97.4c43.3 0 71.7 23.4 71.7 59.4c0 25.3-19.1 47.9-43.5 51.8v1.3c33.2 3.6 55.5 26.6 55.5 58.3C383.4 349.7 352.1 375.1 300.2 375.1zM290.2 266.4h-50.1v78.4h52.3c34.2 0 52.3-13.7 52.3-39.5C344.7 279.6 326.1 266.4 290.2 266.4z",
    viewbox: "0 0 576 512",
    title: "Bootstrap",
    color: "text-purple-600",
    bg: "bg-purple-600",
    manual: false
  },
  {
    path: "M12 0C5.352 0 0 5.352 0 12s5.352 12 12 12 12-5.352 12-12S18.648 0 12 0zm2.8 4.333c.13-.004.248.136.171.278l-3.044 5.58a.187.187 0 00.164.276h5.26c.17 0 .252.207.128.323l-9.22 8.605c-.165.154-.41-.063-.278-.246l4.364-6.021a.187.187 0 00-.151-.296H6.627a.187.187 0 01-.131-.32l8.18-8.123a.182.182 0 01.125-.056z",
    viewbox: "0 0 24 24",
    title: "ChakraUI",
    color: "text-teal-600",
    bg: "bg-teal-600",
    manual: false
  },
  {
    path: void 0,
    viewbox: void 0,
    title: "Python",
    color: void 0,
    bg: "bg-slate-500",
    manual: true
  },
  {
    path: void 0,
    viewbox: void 0,
    title: "Django",
    color: void 0,
    bg: "bg-green-900",
    manual: true
  },
  {
    path: void 0,
    viewbox: void 0,
    title: "Astrojs",
    color: void 0,
    bg: "bg-slate-900",
    manual: true
  },
  {
    path: void 0,
    viewbox: void 0,
    title: "Nextjs",
    color: void 0,
    bg: "bg-slate-900",
    manual: true
  },
  {
    path: "M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.02.185.017l1.87 1.12c.074.036.166.036.221 0l7.319-4.237c.074-.036.11-.11.11-.202V7.768c0-.091-.036-.165-.11-.201l-7.319-4.219c-.073-.037-.165-.037-.221 0L4.552 7.566c-.073.036-.11.129-.11.201v8.457c0 .073.037.166.11.202l2 1.157c1.082.548 1.762-.095 1.762-.735V8.502c0-.11.091-.221.22-.221h.936c.108 0 .22.092.22.221v8.347c0 1.449-.788 2.294-2.164 2.294-.422 0-.752 0-1.688-.46l-1.925-1.099a1.55 1.55 0 0 1-.771-1.34V7.786c0-.55.293-1.064.771-1.339l7.316-4.237a1.637 1.637 0 0 1 1.544 0l7.317 4.237c.479.274.771.789.771 1.339v8.458c0 .549-.293 1.063-.771 1.34l-7.317 4.236c-.241.11-.516.165-.773.165zm2.256-5.816c-3.21 0-3.87-1.468-3.87-2.714 0-.11.092-.221.22-.221h.954c.11 0 .201.073.201.184.147.971.568 1.449 2.514 1.449 1.54 0 2.202-.35 2.202-1.175 0-.477-.185-.825-2.587-1.063-1.999-.2-3.246-.643-3.246-2.238 0-1.485 1.247-2.366 3.339-2.366 2.347 0 3.503.809 3.649 2.568a.297.297 0 0 1-.056.165c-.037.036-.091.073-.146.073h-.953a.212.212 0 0 1-.202-.164c-.221-1.012-.789-1.34-2.292-1.34-1.689 0-1.891.587-1.891 1.027 0 .531.237.696 2.514.99 2.256.293 3.32.715 3.32 2.294-.02 1.615-1.339 2.531-3.67 2.531z",
    viewbox: "0 0 24 24",
    title: "Nodejs",
    color: "text-green-600",
    bg: "bg-green-500",
    manual: false
  },
  {
    path: "M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.02.185.017l1.87 1.12c.074.036.166.036.221 0l7.319-4.237c.074-.036.11-.11.11-.202V7.768c0-.091-.036-.165-.11-.201l-7.319-4.219c-.073-.037-.165-.037-.221 0L4.552 7.566c-.073.036-.11.129-.11.201v8.457c0 .073.037.166.11.202l2 1.157c1.082.548 1.762-.095 1.762-.735V8.502c0-.11.091-.221.22-.221h.936c.108 0 .22.092.22.221v8.347c0 1.449-.788 2.294-2.164 2.294-.422 0-.752 0-1.688-.46l-1.925-1.099a1.55 1.55 0 0 1-.771-1.34V7.786c0-.55.293-1.064.771-1.339l7.316-4.237a1.637 1.637 0 0 1 1.544 0l7.317 4.237c.479.274.771.789.771 1.339v8.458c0 .549-.293 1.063-.771 1.34l-7.317 4.236c-.241.11-.516.165-.773.165zm2.256-5.816c-3.21 0-3.87-1.468-3.87-2.714 0-.11.092-.221.22-.221h.954c.11 0 .201.073.201.184.147.971.568 1.449 2.514 1.449 1.54 0 2.202-.35 2.202-1.175 0-.477-.185-.825-2.587-1.063-1.999-.2-3.246-.643-3.246-2.238 0-1.485 1.247-2.366 3.339-2.366 2.347 0 3.503.809 3.649 2.568a.297.297 0 0 1-.056.165c-.037.036-.091.073-.146.073h-.953a.212.212 0 0 1-.202-.164c-.221-1.012-.789-1.34-2.292-1.34-1.689 0-1.891.587-1.891 1.027 0 .531.237.696 2.514.99 2.256.293 3.32.715 3.32 2.294-.02 1.615-1.339 2.531-3.67 2.531z",
    viewbox: "0 0 24 24",
    title: "Postgres",
    color: "text-green-900",
    bg: "bg-slate-500",
    manual: true
  },
  {
    path: "M448 156.1c0-4.5-.1-9-.2-13.5a196.3 196.3 0 0 0 -2.6-29.4 99.6 99.6 0 0 0 -9.2-28A94.1 94.1 0 0 0 394.8 44a99.2 99.2 0 0 0 -28-9.2 195 195 0 0 0 -29.4-2.6c-4.5-.1-9-.2-13.5-.2H124.1c-4.5 0-9 .1-13.5 .2-2.5 .1-4.9 .2-7.4 .3a171.7 171.7 0 0 0 -22.1 2.3 103.1 103.1 0 0 0 -21.2 6.1q-3.5 1.5-6.8 3.1a94.7 94.7 0 0 0 -18.4 12.3c-1.9 1.6-3.7 3.3-5.4 5A93.9 93.9 0 0 0 12 85.2a99.5 99.5 0 0 0 -9.2 28 196.3 196.3 0 0 0 -2.5 29.4c-.1 4.5-.2 9-.2 13.5v199.8c0 4.5 .1 9 .2 13.5a196.1 196.1 0 0 0 2.6 29.4 99.3 99.3 0 0 0 9.2 28A94.3 94.3 0 0 0 53.2 468a99.5 99.5 0 0 0 28 9.2 195 195 0 0 0 29.4 2.6c4.5 .1 9 .2 13.5 .2H323.9c4.5 0 9-.1 13.5-.2a196.6 196.6 0 0 0 29.4-2.6 99.6 99.6 0 0 0 28-9.2A94.2 94.2 0 0 0 436 426.8a99.3 99.3 0 0 0 9.2-28 194.8 194.8 0 0 0 2.6-29.4c.1-4.5 .2-9 .2-13.5V172.1c0-5.4 0-10.7 0-16.1zm-69.9 241c-20-38.9-57.2-29.3-76.3-19.5-1.7 1-3.5 2-5.3 3l-.4 .3c-39.5 21-92.5 22.5-145.9-.4A234.6 234.6 0 0 1 45 290.1a230.6 230.6 0 0 0 39.2 23.4c56.4 26.4 113 24.5 153 0-57-43.9-104.6-101-141.1-147.2a197.1 197.1 0 0 1 -18.8-25.9c43.7 40 112.7 90.2 137.5 104.1-52.6-55.5-98.9-123.9-96.7-121.7 82.8 83.4 159.2 130.6 159.2 130.6 2.9 1.6 5 2.9 6.7 4a127.4 127.4 0 0 0 4.2-12.5c13.2-48.3-1.7-103.6-35.3-149.2C329.6 141.8 375 229.3 356.4 303.4c-.4 1.7-1 3.4-1.4 5.1 38.5 47.4 28 98.2 23.1 88.6z",
    viewbox: "0 0 448 512",
    title: "Swift",
    color: "text-orange-600",
    bg: "bg-orange-500",
    manual: false
  },
  {
    path: "M3.08378 15.25C1.42044 15.25 0.483971 13.3378 1.5038 12.0237L10.2099 0.806317C10.794 0.053716 11.9999 0.466765 11.9999 1.41944V8.74999H20.9159C22.5793 8.74999 23.5157 10.6622 22.4959 11.9762L13.7898 23.1937C13.2057 23.9463 11.9999 23.5332 11.9999 22.5805V15.25H3.08378Z",
    viewbox: "0 0 24 24",
    title: "Supabase",
    color: "text-green-600",
    bg: "bg-slate-500",
    manual: false
  },
  {
    path: "M277.7 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.8 0 242.8 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.2 12.2 0 0 1 -2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.3 17.3 0 0 0 -8.2 6.3 70.5 70.5 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6 .7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.8 509.4 401 461.3 348 437.4zM124.4 396c-78.7 22 47.9 67.4 148.1 24.5a185.9 185.9 0 0 1 -28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.6 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.4 60.4 0 0 1 -21.1-12.8z",
    viewbox: "-55 0 512 512",
    title: "Java",
    color: "text-red-600",
    bg: "bg-red-500",
    manual: false
  },
  {
    path: "M439.6 236.1L244 40.5a28.9 28.9 0 0 0 -40.8 0l-40.7 40.6 51.5 51.5c27.1-9.1 52.7 16.8 43.4 43.7l49.7 49.7c34.2-11.8 61.2 31 35.5 56.7-26.5 26.5-70.2-2.9-56-37.3L240.2 199v121.9c25.3 12.5 22.3 41.9 9.1 55a34.3 34.3 0 0 1 -48.6 0c-17.6-17.6-11.1-46.9 11.3-56v-123c-20.8-8.5-24.6-30.7-18.6-45L142.6 101 8.5 235.1a28.9 28.9 0 0 0 0 40.8l195.6 195.6a28.9 28.9 0 0 0 40.8 0l194.7-194.7a28.9 28.9 0 0 0 0-40.8z",
    viewbox: "0 0 448 512",
    title: "Git",
    color: "text-orange-600",
    bg: "bg-orange-500",
    manual: false
  }
];

const $$Astro$1 = createAstro();
const $$TechStack = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TechStack;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-2 sm:mt-0 mt-8"> <h4 class="w-full text-sm px-1">My Tech Stack</h4> <div class="flex w-full gap-2 flex-wrap justify-center"> ${data.map((item) => renderTemplate`${renderComponent($$result, "TechCard", $$TechCard, { "icon": item.path, "viewbox": item.viewbox, "title": item.title, "color": item.color, "manual": item.manual })}`)} </div> </div>`;
}, "/Users/zach/Documents/Dev/i-dkz.github.io/src/components/TechStack.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="text-primary flex flex-col items-center min-h-[100vh] gap-4 justify-evenly mt-8 sm:mt-0"> <div class="flex w-full items-center flex-wrap justify-center sm:justify-between"> <div class="flex flex-col gap-4 w-[400px] lg:w-[560px]"> <div class="flex flex-col"> <h1 class="flex text-primary gap-2 text-4xl sm:text-[4rem]">
Zach <span class="flex text-gradient h-[4.4rem]">Wong</span> </h1> <span class="text-2xl bg-transparent">Full-Stack Developer</span> <p>I'm a developer based out of Vancouver, BC. Canada</p> <p>
I like exploring new technologies and building fast, reliable
            experiences for web/mobile
</p> </div> <p>Currently DIMS @ BestBuy</p> <p>***UNDER RECONSTRUCTION***</p> </div> <img src="/memoji.png" class="w-[110px] h-[145px] sm:w-[150px] sm:h-[195px] mt-8 sm:mt-0"> </div> ${renderComponent($$result2, "TechStack", $$TechStack, {})} </main> ` })}`;
}, "/Users/zach/Documents/Dev/i-dkz.github.io/src/pages/index.astro", void 0);

const $$file = "/Users/zach/Documents/Dev/i-dkz.github.io/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

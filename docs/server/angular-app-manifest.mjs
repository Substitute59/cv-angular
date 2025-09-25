
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/cv-angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/cv-angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24672, hash: '683a0c30af148620fbaeccbf107aaa579fc6169712fb8d3082d2e23b13bd3a00', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17125, hash: '7479a365653d843bf8a830236cc9894056cb50f1283a2fcc86c6e26133d1e7d4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 101209, hash: 'd918b74902bc6cc3a2ac5c7467d7d0d9e7542ad8ac5263ec20c48670485212f9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DTTV3AOM.css': {size: 8100, hash: 'jHWbwFO0LXY', text: () => import('./assets-chunks/styles-DTTV3AOM_css.mjs').then(m => m.default)}
  },
};

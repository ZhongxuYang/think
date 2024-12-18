/**
 * 将流程图编辑器所需的资源拷贝到 .next 目录中，配合 nginx 运行
 */
const fs = require('fs-extra');
const { getConfig } = require('@think/config');
const config = getConfig();

const buildManifestJson = () => {
  return JSON.stringify({
    name: config.client.seoAppName,
    short_name: config.client.seoAppName,
    display: 'standalone',
    start_url: '/',
    theme_color: '#ffffff',
    background_color: '#ffffff',
    icons: [
      {
        src: '/logo.png',
        sizes: '72x72',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: '120x120',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: '128x128',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: '152x152',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: '384x384',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  });
};

fs.copySync('./public', './.next', {
  filter: (src) => {
    // 生产环境使用 diagram.min.js
    return !/diagram.js$/.test(src);
  },
});

fs.outputFileSync('./.next/manifest.json', buildManifestJson());
fs.outputFileSync('./public/manifest.json', buildManifestJson());

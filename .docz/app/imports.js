export const imports = {
  'src/pages/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-index" */ 'src/pages/index.mdx'
    ),
}

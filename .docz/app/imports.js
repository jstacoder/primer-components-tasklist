export const imports = {
  'new-list/new-list.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "new-list-new-list" */ 'new-list/new-list.mdx'
    ),
}

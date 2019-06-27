const base = process.env.PATH_PREFIX ? process.env.PATH_PREFIX : '/primer-components-tasklist'
console.log(`using ${base}`)

export default {
  base,
  src: 'src/components',
  files: "**/*.mdx",
  wrapper: 'src/wrapper',

}
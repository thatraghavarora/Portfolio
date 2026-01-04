const metaModules = import.meta.glob('../blogs/*/meta.json', { eager: true })
const contentModules = import.meta.glob('../blogs/*/content.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})
const imageModules = import.meta.glob('../blogs/*/image.png', {
  eager: true,
  query: '?url',
  import: 'default',
})

function loadPost(slug) {
  const metaModule = metaModules[`../blogs/${slug}/meta.json`]
  if (!metaModule) return null
  const meta = metaModule.default ?? metaModule
  const contentModule = contentModules[`../blogs/${slug}/content.md`]
  const imageModule = imageModules[`../blogs/${slug}/image.png`]
  return {
    slug,
    ...meta,
    content: (contentModule?.default ?? contentModule ?? '').toString(),
    image: imageModule?.default ?? imageModule,
  }
}

export function getAllPosts() {
  return Object.keys(metaModules)
    .map((path) => {
      const slug = path.split('/')[3]
      return loadPost(slug)
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug) {
  return loadPost(slug)
}

async function createBlogPostPages(graphql, actions) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityProject {
        edges {
          node {
            id
            slug {
              current
            }
            title
            _type
            _rawRichText(resolveReferences: { maxDepth: 10 })
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityProject || {}).edges || []

  postEdges.forEach((edge) => {
    const { id, slug = {} } = edge.node

    const path = `/project/${slug.current}/`
    console.log(id)
    createPage({
      path,
      component: require.resolve('./src/templates/project.js'),
      context: { id },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await createBlogPostPages(graphql, actions)
}

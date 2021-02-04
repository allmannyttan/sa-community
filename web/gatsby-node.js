async function createPages(graphql, actions) {
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

    const path = `/projekt/${slug.current}/`

    createPage({
      path,
      component: require.resolve('./src/templates/project.js'),
      context: { id },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await createPages(graphql, actions)
}

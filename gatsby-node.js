exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allDatoCmsRoom {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) reporter.panic('no results', result.errors)
  const rooms = [...result.data.allDatoCmsRoom.nodes]
  rooms.forEach(room => {
    actions.createPage({
      path: room.slug,
      component: require.resolve('./src/templates/roomTemplate.js'),
      context: {
        slug: room.slug
      }
    })
  });

}
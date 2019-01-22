exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    query {
  allEntriesJson {
    edges {
      node {
	      id
 				summary {
 				  Fragment_Name
 				  Fragment_ID
 				  Fragment_SMILES
 				  UniProt_Name
 				  UniProt_Accession
 				  Number_of_Ligands
 				}
 				structures {
 				  pdb
 				  chain
 				  lig
 				  resi
 				  mw
        	bind {
            source
            affinity
          }
 				}
        substructures
      }
    }
  }
}`);

  const {
    data: {
      allEntriesJson: { edges: allEntries }
    }
} = result;

  allEntries.forEach(entry => {
    createPage({
      path: `./src/pages/entry/${entry.node.summary.Fragment_Name + '_' + entry.node.summary.UniProt_Accession}/`,
      component: require.resolve('./src/templates/entry.js'),
      context: {
        id: entry.node.id
      }
    })
  })
}

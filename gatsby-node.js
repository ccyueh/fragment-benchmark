exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    query {
      allEntriesJson {
        edges {
          node {
	      id
	      entry_name
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
  
  createPage({
    path: `/browse/`,
    component: require.resolve('./src/templates/browse.js'),
    context: {
      slug: `/`
    }
  });

  allEntries.forEach(entry => {
    createPage({
      path: `/entry/${entry.node.entry_name}/`,
      component: require.resolve('./src/templates/entry.js'),
      context: {
        id: entry.node.id
      }
    })
  });
}

import React from "react"
import PropTypes from "prop-types"

export default class HTML extends React.Component {
  render() { 
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
	  <script src="https://unpkg.com/ngl"></script>
          <script dangerouslySetInnerHTML={{
	    __html: `
            document.addEventListener("DOMContentLoaded", function () {
              var stage = new NGL.Stage("viewport");
	      stage.setParameters({backgroundColor: "white"});
              stage.loadFile("https://files.rcsb.org/view/4hhb.pdb").then(function (component) {
		component.addRepresentation("cartoon");
		component.autoView();
	      });
            }); `,
          }}/>
        </body>
      </html>
    )
  } 
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
  pseName: PropTypes.string,
}

import React from "react";
import * as latexJS from "latex.js";

export default class LatexTemplate extends React.Component<any, any> {
  state = {
    htmlContent: ""
  };

  componentDidMount() {
    const latex = latexJS as any;
    const latexContent = `
      \\documentclass{article}

      \\usepackage{comment, multicol}
      \\usepackage{hyperref}
      \\usepackage{calc,pict2e,picture}
      \\usepackage{textgreek,textcomp,gensymb,stix}

      \\title{\\LaTeX.js Showcase}
      \\begin{document}
      \\begin{abstract}
      This document will show most of the features of \\LaTeX.js while at the same time being a gentle introduction to \\LaTeX.
      In the appendix, the API as well as the format of custom macro definitions in JavaScript will be explained.
      \\end{abstract}

      \\begin{multicols}{2}[\\subsection{Multicolumns}]

      The multi-column layout, using the \\texttt{multicols} environment, allows easy
      definition of multiple columns of text---just like in newspapers. The first
      and mandatoriy argument specifies the number of columns the text should be divided into.

      It is often convenient to spread some text over all columns, just before the multicolumn
      output. In \\LaTeX, this was needed to prevent any page break in between. To achieve this,
      the \\texttt{multicols} environment has an optional second argument which can be used for
      this purpose.

      For instance, this text you are reading now was started with the argument
      \\texttt{\\textbackslash subsection\\{Multicolumns\\}}.

      \\end{multicols}
      HELLO!LATEX
      \\end{document}`;
    console.log(latexContent);
    const generator = new latex.HtmlGenerator({ hyphenate: false });
    const doc = latex
      .parse(latexContent, { generator: generator })
      .domFragment();
    this.setState({
      htmlContent: doc.firstElementChild.outerHTML
    });
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={{ __html: this.state.htmlContent }}></div>
    );
  }
}

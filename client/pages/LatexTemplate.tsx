import React from "react";
import * as latexJS from "latex.js";
import "@style/latex.less";

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

      \\setcounter{secnumdepth}{2}

      \\title{简历模版}
      \\author{Yuqi}
      \\date{2019 -- 2020}
  
      \\begin{document}

      \\begin{center}
      \\maketitle
      \\end{center}

      \\begin{abstract}
      123
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
    // style
    document.body.appendChild(
      generator.stylesAndScripts(
        "https://cdn.jsdelivr.net/npm/latex.js@0.11.1/dist/"
      )
    );
    this.setState({
      htmlContent: doc.firstElementChild.outerHTML
    });
  }

  render() {
    return (
      <div
        className="latex-container"
        dangerouslySetInnerHTML={{ __html: this.state.htmlContent }}
      ></div>
    );
  }
}

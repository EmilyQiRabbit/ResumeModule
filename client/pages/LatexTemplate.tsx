import React from "react";
import * as latexJS from "latex.js";
import "@style/latex.less";

// online playground: https://latex.js.org/playground.html
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
      \\usepackage[colorlinks,linkcolor=blue]{hyperref}

      \\setcounter{secnumdepth}{2}

      \\title{HELLO LATEX，简历模版}
      \\author{made with $\\varheartsuit$ by Yuqi}
      \\date{\\today}
  
      \\begin{document}

      \\maketitle

      \\section*{Personal Info} 
      姓名：Yuqi \\ \\ \\ \\ \\ 星座：巨蟹 ♋️ \\ \\ \\ \\ \\ 年龄：27 \\ \\ \\ \\ \\ 联系方式：188****6666 \\\\
      \\\\
      邮箱：Liu**喵喵喵@163.com \\ \\ \\ \\ \\ Github 主页：\\href{https://github.com/EmilyQiRabbit}{EmilyQiRabbit}
      
      \\begin{multicols}{1}[\\section*{Education}]
      \\begin{itemize}
      \\item 2011.09 - 2015.06 本科 北京邮电大学 - 信息与通信工程学院 - 通信工程
      \\item 2015.09 - 2018.06 硕士 北京邮电大学 - 信息与通信工程学院 - 通信工程
      \\end{itemize}
      \\end{multicols}

      \\section*{Experience}
      \\subsection{工作经历1}
      \\subsection{工作经历2}
      \\subsection{工作经历3}
      \\subsection{工作经历4}
      \\subsection{工作经历5}
      
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

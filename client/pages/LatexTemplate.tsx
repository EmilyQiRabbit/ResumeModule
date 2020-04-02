import React from "react";
import * as latexJS from "latex.js";

export default function LatexTemplate() {
  const latex = latexJS as any;
  let latexContent = document.getElementById("latex-js").innerHTML;
  let generator = new latex.HtmlGenerator({ hyphenate: false });
  let doc = latex.parse(latexContent, { generator: generator }).domFragment();
  return (
    <div
      dangerouslySetInnerHTML={{ __html: doc.firstElementChild.outerHTML }}
    ></div>
  );
}

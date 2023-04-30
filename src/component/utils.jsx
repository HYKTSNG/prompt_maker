function convertToHtml(text) {
    const lines = text.split("\n");
    const html = lines.map((line, index) => <div key={index}>{line}<br /></div>);
    return html;
  }
  
  export default convertToHtml;
  
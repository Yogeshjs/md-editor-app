import React from "react";

interface PreviewPaneProps {
  content: string;
}

export const PreviewPane: React.FC<PreviewPaneProps> = ({ content }) => {
  const putHTML = (frame: HTMLIFrameElement) => {
    if (!frame?.contentDocument) {
      return;
    }

    const htmlDoc = `
          <!DOCTYPE html>
          <html>
          <head>
          </head>
          <body>
            ${content}
          </body>
          </html>
        `;

    const doc = frame.contentDocument;
    // console.log("doc ::", doc);
    doc.open();
    doc.write(htmlDoc);
    doc.close();
    frame.style.width = "100%";
    frame.style.height = "400px";
  };

  return (
    <>
      <div className="pane-header">
        <span>HTML Preview</span>
      </div>
      <iframe ref={putHTML} sandbox="allow-same-origin" />
    </>
  );
};

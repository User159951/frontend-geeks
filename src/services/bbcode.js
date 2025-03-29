import React from "react";

const bbcodeToHtml = (bbcode) => {
  return bbcode
    .replace(/\[b\](.*?)\[\/b\]/gi, "<strong>$1</strong>") // Bold
    .replace(/\[i\](.*?)\[\/i\]/gi, "<em>$1</em>") // Italic
    .replace(/\[img\](.*?)\[\/img\]/gi, '<img src="$1" alt="BBCode Image" class="max-w-full h-auto rounded-lg shadow-md"/>') // Images
    .replace(/\[url=(.*?)\](.*?)\[\/url\]/gi, '<a href="$1" class="text-blue-500 underline">$2</a>'); // Links
};

const BBCodeRenderer = ({ bbcode }) => {
  return <div dangerouslySetInnerHTML={{ __html: bbcodeToHtml(bbcode) }} />;
};

const bbcode = () => {
  const bbcodeText = `[img]https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000[/img]`;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">BBCode to HTML Example</h2>
      <BBCodeRenderer bbcode={bbcodeText} />
    </div>
  );
};

export default bbcode;
import React from "react";

const ResponsiveGoogleDriveVideo = () => {
  return (
    <div className="relative w-full pb-[75%] h-0 overflow-hidden">
      <iframe
        src="https://drive.google.com/file/d/18YqSkbooCfW1E1-6QiRhgXNBx1TJQWhC/preview"
        className="absolute top-0 left-0 w-full h-full border-none"
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay"
        title="Google Drive Video"
      ></iframe>
    </div>
  );
};

export default ResponsiveGoogleDriveVideo;

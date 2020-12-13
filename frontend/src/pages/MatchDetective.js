import { useState, useEffect } from "react";

export const MatchDetective = () => {
  let [detective, setDetective] = useState("");
  let [image, setImage] = useState("");

  return (
    <div>
      <h1>Upload an Image Dressed as a Detective</h1>
      <button>Upload</button>
      {detective && <p>You most look like {detective}</p>}
    </div>
  );
};

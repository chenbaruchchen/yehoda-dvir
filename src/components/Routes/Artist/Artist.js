import React, { useState } from "react";

import "./artist-list.css";
import Artist from "./Artist/Artist";
import ArtistList from "./ArtistList";
const Main = () => {
  const [chosen, setChosen] = useState(null);
  if (chosen !== null) {
    return <Artist chosen={chosen} />;
  }
  return <ArtistList setChosen={setChosen} />;
};

export default Main;

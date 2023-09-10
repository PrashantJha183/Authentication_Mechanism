import React, { useContext, useEffect } from "react";
import NoteContext from "./Context/NoteContext";

export default function Blog() {
  const a = useContext(NoteContext);
  useEffect(() => {                            
    a.update();
  }, []);
  return <>This is Blog {a.state.name}</>;
}

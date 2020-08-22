import React from "react";
import { MemoizedMovie } from "./Movie";
import "./style.css";

export default function App() {
  return (
    <div>
      <MemoizedMovie title="Outside In" releaseDate="2020" />
      <MemoizedMovie title="Outside In" releaseDate="2020" />
      <MemoizedMovie title="Her" releaseDate="2015" />
      <MemoizedMovie title="Outside In" releaseDate="2020" />
    </div>
  );
}

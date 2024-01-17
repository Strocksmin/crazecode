import React from 'react';
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <div style={{width: '100%'}}>
    <Navbar/>
    <main>
      <p>Hello World!</p>
    </main>
    </div>
  );
}

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Sample from "./components/Sample.tsx";
import Post from "./components/Post.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <App />
      <Sample name="Ted" email="ted@gmail.com" />
      <Sample name="Hyunseung" email="bocalist@gmail.com" />
      <Post />
  </React.StrictMode>,
)

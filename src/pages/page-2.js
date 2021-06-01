import AudioPlayer from "../components/audioplayer";
import Library from "../components/library";
// import Layout from "../components/layout"
// import { Link } from "gatsby"
import React from "react"
// import SEO from "../components/seo"

const SecondPage = () => (
    <div style={{width: "80%", margin: "0 auto"}}>
      <label>Song Title: Wanna Rock (G-Easy + Gunna)</label>
        <AudioPlayer></AudioPlayer>
        <Library></Library>
    </div>
    
)

export default SecondPage

import React from "react";
import Mint from "./MintButton";
import '../index.css'


const Content = ({ styles }) => {
  const { showSidebar } = styles;

  const dummyPost = {
    title: `Engineart Public Mint`,
    summary:
      "Blockchain’s finest casino is coming to #NEAR. 6789 NFT with casino profit sharingCitizens who have an unhealthy addiction to gambling. 10 commanders command a full brigade of the 6789 army in order to curb citizens' gambling addictions by developing a full-fledged casino platform."
  };

  const posts = Array(1).fill(dummyPost);

  const contentStyle = {
    paddingTop: showSidebar ? 20 : styles.topBarHeight + 20,
    paddingRight: 20,
    paddingBottom: showSidebar ? 20 : styles.footerMenuHeight + 20,
    paddingLeft: showSidebar ? styles.sidebarWidth + 20 : 20
  };

  return (
    <div style={contentStyle}>
      {posts.map((post, i) => {
        return (
          <div key={i} style={{ marginBottom: 40 }}>
            <h2 className="summary" style={{ marginBottom: 0 }}>{post.title}</h2>
            <p className="summary">{post.summary}</p>
            <p className="summary">Discord: <a href="http://discord.gg/engineart
               " className="casino">discord.gg/engineart</a></p>
            <p className="summary">Casino: <a href="https://near.casino" className="casino">near.casino</a></p>
                        <Mint className="mintmodal"/>
                        <img src="https://i.postimg.cc/zGbQSMjC/ezgif-com-gif-maker.gif" className="poto" width="50%" height="50%"></img>
          </div>
          );
      })}
    </div>
  );
};

export default Content;
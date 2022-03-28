import React, { Component } from "react";
import TopBar from "./components/TopBar";
import FooterMenu from "./components/FooterMenu";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

class App extends Component {
  state = {
    wallet: false,
    accountId: null,
  }
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0
    };
  }

componentDidMount() {
  this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

    this.setState({ windowWidth, windowHeight });
  }

   render() {
const { windowWidth } = this.state;

    const styles = {
      white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      topBarHeight: 40,
      footerMenuHeight: 50,
      showFooterMenuText: windowWidth > 400,
      showSidebar: windowWidth > 768,
      sidebarWidth: windowWidth < 1100 ? 50 : 150,
      sidebarCollapsed: windowWidth < 1100
    };

    const menuItems = styles.showSidebar
      ? [ { text: "" },
      { text: "" },
      { text: "" },
          { text: "SUPPLY : 6789" },
          { text: "PRICE : 7 Near" },
          { text: "MAX MINT: 4" }
      ]
    :   [
          { text: "SUPPLY : 6789" },
          { text: "PRICE : 7 Near" },
          { text: "MAX MINT: 4" }
      ];

    return (
      <main>
        <div
        style={{
          backgroundColor: styles.white(0.05),
          minHeight: "100vh",
          position: "relative"
        }}
      >
        
        {styles.showSidebar ? (
          <Sidebar menuItems={menuItems} styles={styles} />
        ) : (
          <TopBar styles={styles} />
        )}

        <Content styles={styles} />
        <nearLogin />

        {!styles.showSidebar && (
          <FooterMenu menuItems={menuItems} styles={styles} />
        )}
         </div>
        </main>
     );
  }
}

export default App;

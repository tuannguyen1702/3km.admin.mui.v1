/*
 * This is a demo component the Eletrode app generator included
 * to show using Skeleton CSS lib (named base.css) and Redux
 * store for display HTML elements and managing states.
 *
 * To start your own app, please replace or remove these files:
 *
 * - this file (home.jsx)
 * - demo-buttons.jsx
 * - demo-pure-states.jsx
 * - demo-states.jsx
 * - reducers/index.jsx
 * - styles/*.css
 *
 */

import React, { createElement, Component } from "react";
import "../../styles/normalize.css";
import "../../styles/raleway.css";
import skeleton from "../../styles/skeleton.css";
import custom from "../../styles/custom.css";
import electrodePng from "../../images/electrode.png";
// import DemoStates from "./demo-states";
// import DemoPureStates from "./demo-pure-states";
// import { DemoButtons } from "./demo-buttons";
/**/
import Notifications from "react-notify-toast";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import AppBarMenu from "../../components/AppBarMenu";
import Drawer from 'material-ui/Drawer';
import Menu from './Menu';
import { toggleSidebar as toggleSidebarAction } from '../../actions';
import { green, red } from 'material-ui/colors';
//import Sidebar from '../components/layout/Sidebar'
import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import preset from 'jss-preset-default';
import createGenerateClassName from 'material-ui/styles/createGenerateClassName';
/**/
//@UserIsAuthenticated
export default class MasterPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }



  render() {
    const { children, open, title } = this.props;
    const onChange = () => {
      this.setState({ open: !this.state.open })
    };

    let classSidebar = custom["sidebar-container"]
    if (!this.state.open) {
      classSidebar = classSidebar + " " + custom["sidebar-container-close"]
    }

    const onClickMenuItem = (url) => {
      window.location.assign(url)
    }

    const sheetsRegistry = new SheetsRegistry();

    // Configure JSS
    const jss = create(preset());
    // const jss = create({ plugins: [...preset().plugins, rtl()] }); // in-case you're supporting rtl

    jss.options.createGenerateClassName = createGenerateClassName;

    const theme = createMuiTheme({
      palette: {
        primary: red,
        accent: red,
        type: 'light',
      },
    });

    return (<JssProvider registry={sheetsRegistry} jss={jss}><MuiThemeProvider theme={theme} sheetsManager={new Map()}>
      <div>
        <AppBarMenu toggleSidebar={onChange} className={custom["main-content"]} />
        <div className={custom["container"]}>
          <Drawer className={classSidebar} open={false}>
            <Menu/>
          </Drawer>
          <div className={custom["main-content"]}>
            {children}
          </div>
        </div>
      </div>
    </MuiThemeProvider></JssProvider>)


    // return (<JssProvider registry={sheetsRegistry} jss={jss}>
    //   <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
    //     <AppBarMenu toggleSidebar={onChange} className={custom["main-content"]} />
    //     <div className={custom["container"]}>
    //       <Drawer className={classSidebar} open={false}>
    //         <Menu />
    //       </Drawer>
    //       <div className={custom["main-content"]}>
    //         {children}
    //       </div>
    //     </div>
    //   </MuiThemeProvider>
    // </JssProvider>)
  }
}

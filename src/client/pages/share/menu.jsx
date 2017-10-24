

import React, { createElement, Component } from "react";
import "../../styles/normalize.css";
import "../../styles/raleway.css";
import skeleton from "../../styles/skeleton.css";
import custom from "../../styles/custom.css";
// import MenuItem from 'material-ui/MenuItem';
// import DashboardIcon from 'material-ui/svg-icons/action/dashboard';
// import CategoryIcon from 'material-ui/svg-icons/action/view-list';
// import UserIcon from 'material-ui/svg-icons/social/person';
// import ProductIcon from 'material-ui/svg-icons/av/art-track';
// import ReportIcon from 'material-ui/svg-icons/av/equalizer';
// import DistrictIcon from 'material-ui/svg-icons/maps/person-pin-circle';


export default class Menu extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const onClickMenuItem = (url) => {
      window.location.assign(url)
    }

    const items = [
      // { path: "/dashboard", name: 'Dashboard', icon: <DashboardIcon /> },
      // { path: "/category", name: 'Categories', icon: <CategoryIcon /> },
      // { path: "/user", name: 'Users', icon: <UserIcon /> },
      // { path: "/product", name: 'Products', icon: <ProductIcon /> },
      // { path: "/report", name: 'Reports', icon: <ReportIcon /> },
      // { path: "/district", name: 'Districts', icon: <DistrictIcon /> }
    ];

    return (<div>
      {/* {items.map((item, index) => (
       <MenuItem key={index}  leftIcon={item.icon} onClick={() => { onClickMenuItem(item.path) }}>{item.name}</MenuItem>
      ))} */}
    </div>)
  }
}

import React, {Component} from "react";
// import IconButton from "material-ui/IconButton";
// import IconMenu from "material-ui/IconMenu";
// import MenuItem from "material-ui/MenuItem";
// import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
// import NavigationMenu from "material-ui/svg-icons/navigation/menu";
//import { toggleSidebar as toggleSidebarAction } from '../actions';
import custom from "../styles/custom.css";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

export default class AppBarMenu extends Component {
  
    render() {
      const styles = theme => ({
        root: {
          marginTop: theme.spacing.unit * 3,
          width: '100%',
        },
        flex: {
          flex: 1,
        },
        menuButton: {
          marginLeft: -12,
          marginRight: 20,
        },
      });

      
      
      const { toggleSidebar } = this.props;
      const { classes } = this.props;
      return ( <AppBar position="fixed">
        <Toolbar>
          <IconButton color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" >
            Title
          </Typography>
          <Button color="contrast">Login</Button>
        </Toolbar>
      </AppBar>)
    }
  }
  

// AppBarMenu.propTypes = {
//   toggleSidebar: PropTypes.func.isRequired,
// };

// const enhance = compose(
  
//   connect(null, {
//       toggleSidebar: toggleSidebarAction,
//   })
// );

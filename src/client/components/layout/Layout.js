import React, { createElement, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import autoprefixer from 'material-ui/utils/autoprefixer';
import CircularProgress from 'material-ui/CircularProgress';
import withWidth from 'material-ui/utils/withWidth';
import compose from 'recompose/compose';
import MenuItem from 'material-ui/MenuItem';

//import AdminRoutes from '../../AdminRoutes';
import AppBar from './AppBar';
import Sidebar from './Sidebar';
//import Menu from './Menu';
import defaultTheme from '../defaultTheme';
import { setSidebarVisibility as setSidebarVisibilityAction } from '../../actions';

const styles = {
    wrapper: {
        // Avoid IE bug with Flexbox, see #467
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    body: {
        backgroundColor: '#edecec',
        display: 'flex',
        flex: 1,
        overflowY: 'hidden',
        overflowX: 'scroll',
    },
    bodySmall: {
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        padding: '2em',
    },
    contentSmall: {
        flex: 1,
        paddingTop: '3em',
    },
    loader: {
        position: 'absolute',
        top: 0,
        right: 0,
        margin: 16,
        zIndex: 1200,
    },
};

const prefixedStyles = {};

class Layout extends Component {
    componentWillMount() {
        if (this.props.width !== 1) {
            this.props.setSidebarVisibility(true);
        }
    }

    render() {
        const {
            children, open} = this.props;

        const muiTheme = getMuiTheme(theme);
        if (!prefixedStyles.main) {
            // do this once because user agent never changes
            const prefix = autoprefixer(muiTheme);
            prefixedStyles.wrapper = prefix(styles.wrapper);
            prefixedStyles.main = prefix(styles.main);
            prefixedStyles.body = prefix(styles.body);
            prefixedStyles.bodySmall = prefix(styles.bodySmall);
            prefixedStyles.content = prefix(styles.content);
            prefixedStyles.contentSmall = prefix(styles.contentSmall);
        }
        return (
            <MuiThemeProvider>
                <div>
                    <AppBarMenu className={custom["main-content"]} />
                    <div className={custom["container"]}>
                        <Drawer docked={true} containerClassName={custom["sidebar"]} className={custom["sidebar-container"]} open={open}>
                            <MenuItem>Menu Item 1</MenuItem>
                            <MenuItem> Dash Board</MenuItem>
                        </Drawer>
                        <div className={custom["main-content"]}>
                            {children}
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
            // <MuiThemeProvider muiTheme={muiTheme}>
            //     <div style={prefixedStyles.wrapper}>
            //         <div style={prefixedStyles.main}>
            //             {width !== 1 && <AppBar title={title} />}
            //             <div
            //                 className="body"
            //                 style={
            //                     width === 1 ? (
            //                         prefixedStyles.bodySmall
            //                     ) : (
            //                             prefixedStyles.body
            //                         )
            //                 }
            //             >
            //                 {/* <div
            //                     style={
            //                         width === 1 ? (
            //                             prefixedStyles.contentSmall
            //                         ) : (
            //                             prefixedStyles.content
            //                         )
            //                     }
            //                 >
            //                     <AdminRoutes
            //                         customRoutes={customRoutes}
            //                         dashboard={dashboard}
            //                         catchAll={catchAll}
            //                     >
            //                         {children}
            //                     </AdminRoutes>
            //                 </div> */}
            //                 <Sidebar>
            //                     <MenuItem>Menu Item 1</MenuItem>
            //                     <MenuItem> Dash Board</MenuItem>
            //                 </Sidebar>
            //             </div>
            //         </div>
            //     </div>
            // </MuiThemeProvider>
        );
    }
}

const componentPropType = PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
]);

Layout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    catchAll: componentPropType,
    customRoutes: PropTypes.array,
    dashboard: componentPropType,
    isLoading: PropTypes.bool.isRequired,
    logout: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func,
        PropTypes.string,
    ]),
    menu: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    setSidebarVisibility: PropTypes.func.isRequired,
    title: PropTypes.node.isRequired,
    theme: PropTypes.object.isRequired,
    width: PropTypes.number,
};

Layout.defaultProps = {
    theme: defaultTheme,
};

function mapStateToProps(state) {
    return {
        isLoading: state.admin.loading > 0,
    };
}

const enhance = compose(
    connect(mapStateToProps, {
        setSidebarVisibility: setSidebarVisibilityAction,
    }),
    withWidth()
);

export default enhance(Layout);

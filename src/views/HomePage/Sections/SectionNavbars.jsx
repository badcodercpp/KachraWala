import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import PropTypes from "prop-types";
import Apps from "@material-ui/icons/Apps";
import LocationOn from "@material-ui/icons/LocationOn";
import Face from "@material-ui/icons/Face";
import Person from "@material-ui/icons/Person";
import Group from "@material-ui/icons/Group";
import Fingerprint from "@material-ui/icons/Fingerprint";
import MonetizationOn from "@material-ui/icons/MonetizationOn";
// core components
import Header from "components/Header/Header.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import navbarsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/navbarsStyle.jsx";

// custom router imports
import { ProfileScreen } from "./../../../screen/screenContainer";
import { UserProfileScreen } from "./../../../screen/screenContainer"
import { LoginScreen } from "./../../../screen/screenContainer";
import { ContactusScreen } from "./../../../screen/screenContainer";
import { ArtistsScreen } from "./../../../screen/screenContainer";
import { RouteCreator } from "./../../../routes/routeCreator";
import { PRATIBHA_KEY_DEMO_STORE } from "./../../../store/key/storeKey";

class SectionNavbars extends React.Component {
  componentDidMount(){
    console.log("header props")
    console.log(this.props)
  }
  // _navigateToProfilePage = e => {
  //   e.preventDefault();
  //   let r = new RouteCreator();
  //   r.createRoute(ProfileScreen, PRATIBHA_KEY_DEMO_STORE);
  // };
  _navigateToLoginPage = e => {
    e.preventDefault();
    let r = new RouteCreator();
    r.createRoute(LoginScreen, PRATIBHA_KEY_DEMO_STORE);
  };
  _navigateToUserProfileScreen = e => {
    e.preventDefault();
    let r = new RouteCreator();
    r.createRoute(UserProfileScreen, PRATIBHA_KEY_DEMO_STORE);
  };
  _navigateToArtistsPage = e => {
    e.preventDefault();
    let r = new RouteCreator();
    r.createRoute(ArtistsScreen, PRATIBHA_KEY_DEMO_STORE);
  };
  _navigateToContactUsPage = e => {
    e.preventDefault();
    let r = new RouteCreator();
    r.createRoute(ContactusScreen, PRATIBHA_KEY_DEMO_STORE);
  };
  render() {
    const { classes, dropdownHoverColor } = this.props;
    return (
      <div>
        <div className={`${classes.section} cd-section`} id="navigation">
          <Header
            brand="Menu"
            color="rose"
            links={
              <List className={classes.list + " " + classes.mlAuto}>
                <ListItem className={classes.listItem}>
                  <CustomDropdown
                    noLiPadding
                    navDropdown
                    hoverColor="rose"
                    buttonText="Gallery"
                    buttonProps={{
                      className: classes.navLink,
                      color: "transparent"
                    }}
                    buttonIcon={Apps}
                    dropdownList={[
                      <Button simple className={classes.dropdownLink}>
                        {/* <AccountBalance /> */}
                        Oil Potraits
                      </Button>,

                      <Button simple className={classes.dropdownLink}>
                        {/* <AccountBalance /> */}
                        Charcoal Potraits
                      </Button>,

                      <Button simple className={classes.dropdownLink}>
                        {/* <AccountBalance /> */}
                        Watercolor Potraits
                      </Button>,

                      <Button simple className={classes.dropdownLink}>
                        {/* <AccountBalance /> */}
                        Arcylic Potraits
                      </Button>
                    ]}
                  />
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink} //+ " " + classes.navLinkActive
                  //  onClick={this._navigateToProfilePage}
                    color="transparent"
                  >
                    <MonetizationOn /> Prices
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink} //+ " " + classes.navLinkActive
                    onClick={this._navigateToArtistsPage}
                    color="transparent"
                  >
                    <Group /> Heros
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={this._navigateToContactUsPage}
                    color="transparent"
                  >
                    <LocationOn /> Get in Touch
                  </Button>
                </ListItem>
                {
                  (this.props.pingData !== undefined)?(
                    <ListItem className={classes.listItem}>
                  {/* <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={this._navigateToLoginPage}
                    color="transparent"
                  >
                    {`hi ${this.props.pingData.data.first_name} ${this.props.pingData.data.last_name}`}
                  </Button> */}
                  <CustomDropdown
                    noLiPadding
                    navDropdown
                    hoverColor="rose"
                    buttonText={`${this.props.pingData.data.first_name} ${this.props.pingData.data.last_name}`}
                    buttonProps={{
                      className: classes.navLink,
                      color: "transparent"
                    }}
                    buttonIcon={Person}
                    dropdownList={[
                      <Button simple className={classes.dropdownLink}
                      onClick={this._navigateToUserProfileScreen}>
                        {/* <AccountBalance /> */}
                        My Profile
                      </Button>,

                      <Button simple className={classes.dropdownLink}>
                        {/* <AccountBalance /> */}
                        Logout
                      </Button>,
                    ]}
                  />
                </ListItem>
                  ):(
                    <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={this._navigateToLoginPage}
                    color="transparent"
                  >
                    <Fingerprint /> Sign In
                  </Button>
                </ListItem>
                  )
                }
                <ListItem
                  className={classes.listItem}
                  style={{
                    paddingLeft: `2rem`
                  }}
                >
                  <Button
                    href="https://www.creative-tim.com/product/material-kit-pro-react"
                    color={window.innerWidth < 960 ? "info" : "white"}
                    target="_blank"
                    className={classes.navButton}
                    round
                  >
                    {/* <ShoppingCart className={classes.icons} />  */}
                    Order Now
                  </Button>
                </ListItem>
              </List>
            }
          />
          {/* <div className={classes.container}>
          
        </div> */}
        </div>
      </div>
    );
  }
}
SectionNavbars.defaultProps = {
  hoverColor: "rose"
};

SectionNavbars.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ])
};
export default withStyles(navbarsStyle)(SectionNavbars);

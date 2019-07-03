import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Search from "@material-ui/icons/Search";
// core components
import Header from "components/Header/Header.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import navbarsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/navbarsStyle.jsx";

class SectionNavbars extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={`${classes.section} cd-section`} id="navigation">
        <div id="navbar" className={classes.navbar}>
          <div
            className={classes.navigation}
            //style={{ backgroundImage: "url(" + image + ")" }}
          >
            <Header
              brand="Brand"
              color="rose"
              links={
                <div className={classes.collapse}>
                  <List className={classes.list + " " + classes.mrAuto}>
                    <ListItem className={classes.listItem}>
                      <Button
                        href="#pablo"
                        className={
                          classes.navLink + " " + classes.navLinkActive
                        }
                        onClick={e => e.preventDefault()}
                        color="transparent"
                      >
                        Link
                      </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                      <Button
                        href="#pablo"
                        className={classes.navLink}
                        onClick={e => e.preventDefault()}
                        color="transparent"
                      >
                        Link
                      </Button>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                      <CustomDropdown
                        buttonText="Dropdown"
                        dropdownHeader="Dropdown Header"
                        buttonProps={{
                          className: classes.navLink,
                          color: "transparent"
                        }}
                        dropdownList={[
                          "Action",
                          "Another action",
                          "Something else here",
                          { divider: true },
                          "Separated link",
                          { divider: true },
                          "One more separated link"
                        ]}
                      />
                    </ListItem>
                  </List>
                  <div className={classes.mlAuto}>
                    <CustomInput
                      white
                      inputRootCustomClasses={classes.inputRootCustomClasses}
                      formControlProps={{
                        className: classes.formControl
                      }}
                      inputProps={{
                        placeholder: "Search",
                        inputProps: {
                          "aria-label": "Search",
                          className: classes.searchInput
                        }
                      }}
                    />
                    <Button color="white" justIcon round>
                      <Search className={classes.searchIcon} />
                    </Button>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(navbarsStyle)(SectionNavbars);

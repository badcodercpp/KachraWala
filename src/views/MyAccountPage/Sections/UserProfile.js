import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

// @material-ui/icons
import Contacts from "@material-ui/icons/Contacts";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/CardForms/Card.jsx";
import CardHeader from "components/CardForms/CardHeader.jsx";
import CardIcon from "components/CardForms/CardIcon.jsx";
import CardBody from "components/CardForms/CardBody.jsx";

import regularFormsStyle from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle";

class RegularForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [24, 22],
      selectedValue: null,
      selectedEnabled: "b"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
  }
  handleChange(event) {
    this.setState({ selectedValue: event.target.value });
  }
  handleChangeEnabled(event) {
    this.setState({ selectedEnabled: event.target.value });
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <Card>
        <CardHeader color="rose" icon>
          <CardIcon color="rose">
            <Contacts />
          </CardIcon>
          {/* <h4 className={classes.cardIconTitle}>Horizontal Form</h4> */}
        </CardHeader>
        <CardBody>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={3}>
                <FormLabel className={classes.labelHorizontal}>
                  First Name
                </FormLabel>
              </GridItem>
              <GridItem xs={12} sm={12} md={7}>
                <CustomInput
                  id="first_name"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "firstname"
                  }}
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={3}>
                <FormLabel className={classes.labelHorizontal}>
                  Last Name
                </FormLabel>
              </GridItem>
              <GridItem xs={12} sm={12} md={7}>
                <CustomInput
                  id="last_name"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "lastname"
                  }}
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={3}>
                <FormLabel className={classes.labelHorizontal}>Email</FormLabel>
              </GridItem>
              <GridItem xs={12} sm={12} md={7}>
                <CustomInput
                  id="email_adress2"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "email"
                  }}
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={3}>
                <FormLabel className={classes.labelHorizontal}>
                  Password
                </FormLabel>
              </GridItem>
              <GridItem xs={12} sm={12} md={7}>
                <CustomInput
                  id="password2"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "password"
                  }}
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={3}>
                <FormLabel className={classes.labelHorizontal}>
                  Mobile Number
                </FormLabel>
              </GridItem>
              <GridItem xs={12} sm={12} md={7}>
                <CustomInput
                  id="mobile_no"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "mobileno"
                  }}
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={3}>
                <FormLabel className={classes.labelHorizontal}>
                  Gender
                </FormLabel>
              </GridItem>
              <GridItem xs={12} sm={12} md={7}>
                <div
                  className={classes.inlineChecks}
                  style={{
                    marginTop: 26
                  }}
                >
                  <FormControlLabel
                    control={
                      <Radio
                        checked={this.state.selectedEnabled === "a"}
                        onChange={this.handleChangeEnabled}
                        value="a"
                        name="radio button enabled"
                        aria-label="A"
                        icon={
                          <FiberManualRecord
                            className={classes.radioUnchecked}
                          />
                        }
                        checkedIcon={
                          <FiberManualRecord className={classes.radioChecked} />
                        }
                        classes={{
                          checked: classes.radio,
                          root: classes.radioRoot
                        }}
                      />
                    }
                    classes={{
                      label: classes.label
                    }}
                    label="Male"
                  />
                  <FormControlLabel
                    control={
                      <Radio
                        checked={this.state.selectedEnabled === "b"}
                        onChange={this.handleChangeEnabled}
                        value="b"
                        name="radio button enabled"
                        aria-label="B"
                        icon={
                          <FiberManualRecord
                            className={classes.radioUnchecked}
                          />
                        }
                        checkedIcon={
                          <FiberManualRecord className={classes.radioChecked} />
                        }
                        classes={{
                          checked: classes.radio,
                          root: classes.radioRoot
                        }}
                      />
                    }
                    classes={{
                      label: classes.label
                    }}
                    label="Female"
                  />
                </div>
              </GridItem>
            </GridContainer>
            <GridContainer justify="flex-end">
              <GridItem xs={12} sm={12} md={9}>
                <Button color="rose">Save</Button>
              </GridItem>
            </GridContainer>
          </form>
        </CardBody>
      </Card>
    );
  }
}

export default withStyles(regularFormsStyle)(RegularForms);

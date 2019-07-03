import React from "react";

// import { DemoScreen } from "./../../screen/screenContainer";
// import { RouteCreator } from "./../../routes/routeCreator";
// import { PRATIBHA_KEY_DEMO_STORE } from "./../../store/key/storeKey";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import Radio from "@material-ui/core/Radio";
import Icon from "@material-ui/core/Icon";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Group from "@material-ui/icons/Group";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import ResetPassword from "./Sections/ResetPassword.js";

import loginPageStyle from "assets/jss/material-kit-pro-react/views/loginPageStyle.jsx";

import image from "assets/img/bg7.jpg";

import { HomeScreen, SignupScreen } from "./../../screen/screenContainer";
import { RouteCreator } from "./../../routes/routeCreator";
import { PRATIBHA_KEY_DEMO_STORE } from "./../../store/key/storeKey";

import { FETCH } from "../../util/apiCall";
import { fetchStatusHandler } from "../../util/statusHandler";
import {load} from '../../util/moduleLoader';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      u_email: "",
      u_password: "",
      selectedEnabled: "b",
      ...this.props
    };
    this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
  }
  handleChangeEnabled(event) {
    this.setState({ selectedEnabled: event.target.value });
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  _navigateToSignupPage = e => {
    e.preventDefault();
    let r = new RouteCreator();
    r.createRoute(SignupScreen, PRATIBHA_KEY_DEMO_STORE);
  };
  _authenticate_me = e => {
    e.preventDefault();
    e.stopPropagation();
    const { dispatch, actions } = this.props;
    let payload = {
      username: this.state.u_email,
      password: this.state.u_password
    };
    //console.log(payload)
    const header ={ "Content-Type": "application/json"};
    const url = "https://patarts-backend.herokuapp.com/api/customer/login";
    FETCH("POST",url,header,JSON.stringify(payload))
    .then(fetchStatusHandler)
    .then(resp=>resp.json())
    .then(data=>{
      actions.SAVE_AUTHENTIC_DATA_METHOD({authenticData:data})
      console.log(this.state.authenticData)
      let r = new RouteCreator();
      r.createRoute(HomeScreen, PRATIBHA_KEY_DEMO_STORE);

      console.log("success")
      console.log(data)
    })
    .catch(err=>{
      console.log("err")
      console.log(err)
    })
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card>
                  <form className={classes.form}>
                    <CardHeader
                      color="rose"
                      signup
                      className={classes.cardHeader}
                    >
                      <h4 className={classes.cardTitle}>Login</h4>
                      <div className={classes.socialLine}>
                        <Button
                          justIcon
                          color="transparent"
                          className={classes.iconButtons}
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fab fa-google" />
                        </Button>
                        <Button
                          justIcon
                          color="transparent"
                          className={classes.iconButtons}
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fab fa-facebook" />
                        </Button>
                        <Button
                          justIcon
                          color="transparent"
                          className={classes.iconButtons}
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fab fa-instagram" />
                        </Button>
                      </div>
                    </CardHeader>
                    <p
                      className={`${classes.description} ${classes.textCenter}`}
                    >
                      Or Be Classical
                    </p>
                            <div className={classes.inlineChecks}>
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
                                      <FiberManualRecord
                                        className={classes.radioChecked}
                                      />
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
                                label="Customer"
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
                                      <FiberManualRecord
                                        className={classes.radioChecked}
                                      />
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
                                label="Artist"
                              />
                            </div>
                    <CardBody signup>
                      <CustomInput
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "Email...",
                          type: "email",
                          startAdornment: (
                            <InputAdornment position="start">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                          value: this.state.u_email,
                          onChange: e => this.setState({ u_email: e.target!==undefined?e.target.value:e.currentTarget.value })
                        }}
                      />
                      <CustomInput
                        id="pass"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "Password",
                          type: "password",
                          startAdornment: (
                            <InputAdornment position="start">
                              <Icon className={classes.inputIconsColor}>
                                lock_utline
                              </Icon>
                            </InputAdornment>
                          ),
                          value: this.state.u_password,
                          onChange: e => this.setState({ u_password: e.target!==undefined?e.target.value:e.currentTarget.value })
                        }}
                      />
                    </CardBody>
                    <div className={classes.textCenter}>
                      <Button color="rose" size="lg" onClick={this._authenticate_me} >
                        Login
                      </Button>
                    </div>
                    <div className={classes.textCenter}>
                      <ResetPassword />
                    </div>
                    <div className={classes.textCenter}>
                      <Button
                        simple
                        color="rose"
                        size="md"
                        style={{
                          textTransform: `none`
                        }}
                        onClick={this._navigateToSignupPage}
                      >
                        Need to Register ? Sign Up
                      </Button>
                    </div>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);

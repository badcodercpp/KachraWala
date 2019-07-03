import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Icon from "@material-ui/core/Icon";
import Radio from "@material-ui/core/Radio";

// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import Check from "@material-ui/icons/Check";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import signupPageStyle from "assets/jss/material-kit-pro-react/views/signupPageStyle.jsx";

import image from "assets/img/bg7.jpg";

import {FETCH} from '../../util/apiCall'
import {fetchStatusHandler} from '../../util/statusHandler'
import {load} from '../../util/moduleLoader';

import { HomeScreen } from "./../../screen/screenContainer";
import { RouteCreator } from "./../../routes/routeCreator";
import { PRATIBHA_KEY_DEMO_STORE } from "./../../store/key/storeKey";

class Components extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [24, 22],
      selectedValue: null,
      selectedEnabled: "b",
      // checked: [1],
      u_email: "",
      u_password: "",
      u_fullName: "",
      u_mobile: "",
      ...this.props
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
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  _register_user = e => {
    e.preventDefault();
    e.stopPropagation();
    const { dispatch, actions } = this.props;
    if (this.state.checked.length>0) {
      let payload = {
        full_name: this.state.u_fullName,
       // last_name: this.state.u_lName,
        email: this.state.u_email,
        password: this.state.u_password,
        mobile_number: "9836648125"
      }
      const header ={ "Content-Type": "application/json"}
      const url = "https://patarts-backend.herokuapp.com/api/customer/register";
      FETCH("POST",url,header,JSON.stringify(payload))
      .then(fetchStatusHandler)
      .then(res=>res.json())
      .then(data=>{
        actions.SAVE_AUTHENTIC_DATA_METHOD({authenticData:data})
        console.log(data)
        let r = new RouteCreator();
        r.createRoute(HomeScreen, PRATIBHA_KEY_DEMO_STORE);
      })
      .catch(err=>{
        console.log("err")
        console.log(err)
      })
      console.log(payload)
      console.log(this.state.checked)
    } else {
      alert("you have to agree with our term and condition")
    }
  }
  _facebook_signup= e => {
    
    Promise.all([
      load().js('https://connect.facebook.net/en_US/sdk.js')
    ]).then(function() {
      window.FB.init({
        appId      : '373338176818222',
        cookie     : true,  // enable cookies to allow the server to access 
                            // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.8' // use graph api version 2.8
      });
      //console.log(FB)
      // console.log(FB)
      window.FB.login(function(response) {
        // handle the response
        console.log(response)
      }, {scope: 'email,user_likes'});
      
      console.log('Everything has loaded!');
    }).catch(function() {
      console.log('Oh no, epic failure!');
    });
  }
  updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
      console.log(isSignedIn)
    } else {
      console.log(isSignedIn)
    }
  }

  _gmail_signup = e => {
    let that=this;
    Promise.all([
      load().js('https://apis.google.com/js/api.js')
    ]).then((data)=> {
      (() => {
        var CLIENT_ID = 'http://580172920626-kp8l831ci71hl2c6qq10mmm90jf65rs8.apps.googleusercontent.com/';
        var API_KEY = 'AIzaSyAbt5sFlAoRI-vV0xoAaTkLKkEjwrzAlLA';
  
        // Array of API discovery doc URLs for APIs used by the quickstart
        var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];
  
        // Authorization scopes required by the API; multiple scopes can be
        // included, separated by spaces.
        var SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';
        console.log(window.gapi)
        window.gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES
        }).then(function () {
          // Listen for sign-in state changes.
          window.gapi.auth2.getAuthInstance().isSignedIn.listen(that.updateSigninStatus);
    
          // Handle the initial sign-in state.
          that.updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
        }, function(error) {
          console.log(error)
        });
      })();
    })
    .catch(err => alert(err))
  }
  render() {
    const { classes, ...rest } = this.props;
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
              <GridItem xs={12} sm={10} md={10}>
                <Card className={classes.cardSignup}>
                  <h2 className={classes.cardTitle}>Register</h2>
                  <CardBody>
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={5} md={5}>
                        <InfoArea
                          className={classes.infoArea}
                          title="Sign Up as"
                          description={
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
                          }
                          icon={Group}
                          iconColor="info"
                        />
                        <InfoArea
                          className={classes.infoArea}
                          title="Marketing"
                          description="We've created the marketing campaign of the website. It was a very interesting collaboration."
                          icon={Timeline}
                          iconColor="rose"
                        />
                        <InfoArea
                          className={classes.infoArea}
                          title="Fully Coded in HTML5"
                          description="We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
                          icon={Code}
                          iconColor="rose"
                        />
                      </GridItem>
                      <GridItem xs={12} sm={5} md={5}>
                        <div className={classes.textCenter}>
                          <Button justIcon round color="google" onClick={this._gmail_signup}>
                            <i className={classes.socials + " fab fa-google"} />
                          </Button>
                          {` `}
                          <Button justIcon round color="facebook" onClick={this._facebook_signup}>
                            <i
                              className={classes.socials + " fab fa-facebook-f"}
                            />
                          </Button>
                          {` `}
                          <Button justIcon round color="instagram" >
                            <i
                              className={classes.socials + " fab fa-instagram"}
                            />
                          </Button>
                          <h4 className={classes.socialTitle}>
                            or be classical
                          </h4>
                        </div>
                        <form className={classes.form}>
                          <CustomInput
                            formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses
                            }}
                            inputProps={{
                              startAdornment: (
                                <InputAdornment
                                  position="start"
                                  className={classes.inputAdornment}
                                >
                                  <Face
                                    className={classes.inputAdornmentIcon}
                                  />
                                </InputAdornment>
                              ),
                              placeholder: "Full Name...",
                              value: this.state.u_fullName,
                              onChange: e => this.setState({ u_fullName: e.target!==undefined?e.target.value:e.currentTarget.value })
                            }}
                          />

                          {/* <CustomInput
                            formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses
                            }}
                            inputProps={{
                              startAdornment: (
                                <InputAdornment
                                  position="start"
                                  className={classes.inputAdornment}
                                >
                                  <Face
                                    className={classes.inputAdornmentIcon}
                                  />
                                </InputAdornment>
                              ),
                              placeholder: "Last Name...",
                              value: this.state.u_lName,
                              onChange: e => this.setState({ u_lName: e.target!==undefined?e.target.value:e.currentTarget.value })
                            }}
                          /> */}
                          <CustomInput
                            formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses
                            }}
                            inputProps={{
                              startAdornment: (
                                <InputAdornment
                                  position="start"
                                  className={classes.inputAdornment}
                                >
                                  <Email
                                    className={classes.inputAdornmentIcon}
                                  />
                                </InputAdornment>
                              ),
                              placeholder: "Email...",
                              value: this.state.u_email,
                              onChange: e => this.setState({ u_email: e.target!==undefined?e.target.value:e.currentTarget.value })
                            }}
                          />
                          <CustomInput
                            formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses
                            }}
                            inputProps={{
                              startAdornment: (
                                <InputAdornment
                                  position="start"
                                  className={classes.inputAdornment}
                                >
                                  <Icon className={classes.inputAdornmentIcon}>
                                    lock_outline
                                  </Icon>
                                </InputAdornment>
                              ),
                              placeholder: "Password...",
                              type: "password",
                              value: this.state.u_password,
                              onChange: e => this.setState({ u_password: e.target!==undefined?e.target.value:e.currentTarget.value })
                            }}
                          />
                          <FormControlLabel
                            classes={{
                              label: classes.label
                            }}
                            control={
                              <Checkbox
                                tabIndex={-1}
                                onClick={() => this.handleToggle(1)}
                                checkedIcon={
                                  <Check className={classes.checkedIcon} />
                                }
                                icon={
                                  <Check className={classes.uncheckedIcon} />
                                }
                                classes={{
                                  checked: classes.checked,
                                  root: classes.checkRoot
                                }}
                                checked={
                                  this.state.checked.indexOf(1) !== -1
                                    ? true
                                    : false
                                }
                              />
                            }
                            label={
                              <span>
                                I agree to the{" "}
                                <a href="#pablo">terms and conditions</a>.
                              </span>
                            }
                          />
                          <div className={classes.textCenter}>
                            <Button round color="rose" onClick={this._register_user} >
                              Get started
                            </Button>
                          </div>
                        </form>
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(signupPageStyle)(Components);

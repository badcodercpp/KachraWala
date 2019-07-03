import React from "react";
// react plugin for creating date-time-picker
import Datetime from "react-datetime";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Tooltip from "@material-ui/core/Tooltip";
import Popover from "@material-ui/core/Popover";
import Checkbox from "@material-ui/core/Checkbox";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Close from "@material-ui/icons/Close";
import Notifications from "@material-ui/icons/Notifications";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Assignment from "@material-ui/icons/Assignment";
import Mail from "@material-ui/icons/Mail";
import Face from "@material-ui/icons/Face";
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Email from "@material-ui/icons/Email";
import Check from "@material-ui/icons/Check";
import AttachFile from "@material-ui/icons/AttachFile";
import Layers from "@material-ui/icons/Layers";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Instruction from "components/Instruction/Instruction.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomFileInput from "components/CustomFileInput/CustomFileInput.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Accordion from "components/Accordion/Accordion.jsx";
import ImageUpload from "components/CustomUpload/ImageUpload.jsx";

import javascriptStyles from "assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx";

import dg1 from "assets/img/dg1.jpg";
import dg2 from "assets/img/dg2.jpg";

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class SectionJavascript extends React.Component {
  anchorElLeft = null;
  anchorElTop = null;
  anchorElBottom = null;
  anchorElRight = null;
  constructor(props) {
    super(props);
    this.state = {
      classicModal: false,
      noticeModal: false,
      smallModal: false,
      loginModal: false,
      signupModal: false,
      openLeft: false,
      openTop: false,
      openBottom: false,
      openRight: false,
      checked: []
    };
    this.handleToggle = this.handleToggle.bind(this);
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
  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }
  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }
  handleClosePopover(state) {
    this.setState({
      [state]: false
    });
  }
  handleClickButton(state) {
    this.setState({
      [state]: true
    });
  }
  render() {
    const { classes } = this.props;
    return (
      // <div
      //   className={`${classes.section} cd-section`}
      //   id="javascriptComponents"
      // >
              <GridItem>
                <Button
                  simple
                  color="rose"
                  size="md"
                  style={{
                    textTransform: `none`
                  }}
                  onClick={() => this.handleClickOpen("noticeModal")}
                >
                  Forgot Password ?
                </Button>
                {/* NOTICE MODAL START */}
                <Dialog
                  classes={{
                    root: classes.modalRoot,
                    paper: classes.modal
                  }}
                  open={this.state.noticeModal}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => this.handleClose("noticeModal")}
                  aria-labelledby="notice-modal-slide-title"
                  aria-describedby="notice-modal-slide-description"
                >
                  <DialogTitle
                    id="notice-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                  >
                    <Button
                      simple
                      className={classes.modalCloseButton}
                      key="close"
                      aria-label="Close"
                      onClick={() => this.handleClose("noticeModal")}
                    >
                      {" "}
                      <Close className={classes.modalClose} />
                    </Button>
                    <h5 className={classes.modalTitle}>
                      Please provide your email to reset your password.
                    </h5>
                  </DialogTitle>
                  <DialogContent>
                    {/* <Card raised className={classes.card}> */}
                    {/* <CardBody className={classes.cardBody}> */}
                    <div style={{ marginTop: 14 }}>
                      <form>
                        <GridContainer>
                          <GridItem xs={12} sm={6} md={6} lg={8}>
                            <CustomInput
                              id="emailPreFooter"
                              formControlProps={{
                                fullWidth: true,
                                className: classes.cardForm
                              }}
                              inputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <Mail />
                                  </InputAdornment>
                                ),
                                placeholder: "Your Email..."
                              }}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={6} md={6} lg={4}>
                            <Button
                              color="primary"
                              block
                              className={classes.subscribeButton}
                              style={{ marginTop: 18 }}
                            >
                              Send Mail
                            </Button>
                          </GridItem>
                        </GridContainer>
                      </form>
                    </div>
                    {/* </CardBody> */}
                    {/* </Card> */}
                  </DialogContent>
                </Dialog>
                {/* NOTICE MODAL END */}
              </GridItem>
      // </div>
    );
  }
}

export default withStyles(javascriptStyles)(SectionJavascript);

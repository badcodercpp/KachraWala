import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

// @material-ui/icons
import Store from "@material-ui/icons/Store";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Info from "components/Typography/Info.jsx";
import Card from "components/CardForms/Card.jsx";
import CardHeader from "components/CardForms/CardHeader.jsx";
import CardIcon from "components/CardForms/CardIcon.jsx";
import CardBody from "components/CardForms/CardBody.jsx";
import CardFooter from "components/CardForms/CardFooter.jsx";

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
            <Store />
          </CardIcon>
          <div style={{ marginTop: `6rem`}}>
          <div>
          <div style={{ float: `left`, color: `black`, marginBottom: 8}}> <b>Default Address</b> </div>
            <Card>
              <CardBody>
                <div style={{ float: `left`}}>
                  <div><h6 className={classes.cardCategory}>Full Name</h6></div>
                  <div><h7>Addresse Line 1</h7></div>
                  <div><h7>Addresse Line 2</h7></div>
                  <div><h7>Addresse Line 3</h7></div>
                </div>
              </CardBody>
              <CardFooter stats>
              <Button color="rose" round>
                  Edit
              </Button>
              <Button color="rose" round>
                  Remove
              </Button>
              </CardFooter>
            </Card>
          </div>
          <div>
          <div style={{ float: `left`, color: `black`, marginBottom: 8}}> <b>Other Addresses</b> </div>
            <Card>
              <CardBody>
                <div style={{ float: `left`}}>
              <a> Make this as Default Addresse  </a> 
                  <h6 className={classes.cardCategory}>Full Name</h6> 
                  <div><h7>Addresse Line 1</h7></div>
                  <div><h7>Addresse Line 2</h7></div>
                  <div><h7>Addresse Line 3</h7></div>
                </div>
              </CardBody>
              <CardFooter stats>
              <Button color="rose" round>
                  Edit
              </Button>
              <Button color="rose" round>
                  Remove
              </Button>
              </CardFooter>
            </Card>
          </div>
          </div>
        </CardHeader>
      </Card>
    );
  }
}

export default withStyles(regularFormsStyle)(RegularForms);

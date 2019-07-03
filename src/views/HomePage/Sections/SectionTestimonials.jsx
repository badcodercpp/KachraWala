import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import FormatQuote from "@material-ui/icons/FormatQuote";
import Star from "@material-ui/icons/Star";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import Muted from "components/Typography/Muted.jsx";
import Warning from "components/Typography/Warning.jsx";
import testimonialsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/testimonialsStyle.jsx";
import kendall from "assets/img/faces/kendall.jpg";
import christian from "assets/img/faces/christian.jpg";

function SectionTestimonials({ ...props }) {
  const { classes, ...rest } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div className="cd-section" {...rest}>
      {/* Testimonials 2 START */}
      <div style={{
        padding: 0
      }}
        className={`${classes.testimonials} ${classes.sectionDark} ${
          classes.testimonial2
        }`}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Carousel {...settings}>
                <div>
                  <Card testimonial plain className={classes.card2}>
                    <CardAvatar testimonial plain>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={kendall} alt="..." />
                      </a>
                    </CardAvatar>
                    <CardBody plain>
                      <h5 className={classes.cardDescription}>
                        "I speak yell scream directly at the old guard on behalf
                        of the future. I gotta say at that time I’d like to meet
                        Kanye I speak yell scream directly at the old guard on
                        behalf of the future. My brother Chance!!!<br />Thank
                        you for letting me work on this masterpiece. One of my
                        favorite people."
                      </h5>
                      <h4 className={classes.cardTitle}>Kendall Thompson</h4>
                      <Muted>
                        <h6>CEO @ Marketing Digital Ltd.</h6>
                      </Muted>
                    </CardBody>
                    <div>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                    </div>
                  </Card>
                </div>
                <div>
                  <Card testimonial plain className={classes.card2}>
                    <CardAvatar testimonial plain>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={christian} alt="..." />
                      </a>
                    </CardAvatar>
                    <CardBody plain>
                      <h5 className={classes.cardDescription}>
                        "Thank you Anna for the invite thank you to the whole
                        Vogue team Called I Miss the Old Kanye At the God's last
                        game Chop up the soul Kanye. I promise I will never let
                        the people down. I want a better life for all!!! Pablo
                        Pablo Pablo Pablo! Thank you Anna for the invite thank
                        you to the whole Vogue team."
                      </h5>
                      <h4 className={classes.cardTitle}>Christian Louboutin</h4>
                      <Muted>
                        <h6>Designer @ Louboutin & Co.</h6>
                      </Muted>
                    </CardBody>
                    <div>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                    </div>
                  </Card>
                </div>
              </Carousel>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Testimonials 2 END */}
    </div>
  );
}

export default withStyles(testimonialsStyle)(SectionTestimonials);

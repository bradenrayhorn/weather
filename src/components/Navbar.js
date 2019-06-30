import React from "react";
import styled from "@emotion/styled";
import SettingsIcon from "@material-ui/icons/Settings";
import LocationIcon from "@material-ui/icons/NearMe";
import BackLeftIcon from "@material-ui/icons/ArrowBackIos";
import BackRightIcon from "@material-ui/icons/ArrowForwardIos";
import {withRouter} from "react-router";

const FixedNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

class Navbar extends React.Component {

  redirect = target => {
    this.props.history.push('/' + target);
  };

  render() {
    switch (this.props.state || '') {
      case 'back-left':
        return (
          <FixedNav style={{justifyContent: 'flex-start'}}>
            <BackLeftIcon onClick={() => this.redirect('')}/>
          </FixedNav>
        );
      case 'back-right':
        return (
          <FixedNav style={{justifyContent: 'flex-end'}}>
            <BackRightIcon onClick={() => this.redirect('')}/>
          </FixedNav>
        );
      default:
        return (
          <FixedNav>
            <SettingsIcon onClick={() => this.redirect('settings')}/>
            <LocationIcon onClick={() => this.redirect('locations')}/>
          </FixedNav>
        );
    }
  }
};

export default withRouter(Navbar);
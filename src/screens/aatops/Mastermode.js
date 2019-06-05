import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import {
  Thumbnail,
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Badge,
  Text,
  Left,
  Right,
  Body
} from "native-base";

import VerticalSlider from 'rn-vertical-slider'

//import styles from "./styles";
const styles=StyleSheet.create({
  container: {
    backgroundColor: "#484848"  // 背景色
  },
  header: {
    backgroundColor: "#000000"  // 背景色
  },

  mb: {
    marginBottom: 10
  }
});
const logo = require("../../../assets/record.png");


class Mastermode extends Component {
  constructor() {
      super();
      this.state = { iconName: logo, volumn: 0 };
    }

  render() {
    console.log('now', this.state.volumn);
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Master</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
        <Button
          transparent
          onPress={ () =>{ this.setState({iconName: require("../../../assets/camera.png") });
          this.props.navigation.navigate("Recordermode")}}
        >
              <Thumbnail square small source={this.state.iconName} style={{marginBottom: 10}} />
          </Button>

          <Badge
            style={{ backgroundColor: "black" }}
            textStyle={{ color: "white" }}
          >
            <Text>1866</Text>
          </Badge>


          <VerticalSlider
          value={0}
          disabled={false}
          min={0}
          max={4}
          onChange={(value) => {
            console.log('CHANGE', value);

            this.setState({volumn: value });
          }}
          onComplete={(value) => {
            console.log("COMPLETE", value);

          }}
          width={15}
          height={300}
          step={0.1}
          borderRadius={5}
          minimumTrackTintColor={"#33d9e1"}
          maximumTrackTintColor={"#000000"}
          showBallIndicator
          ballIndicatorColor={"gray"}
          ballIndicatorTextColor={"white"}
        />

        <Badge
          style={{ backgroundColor: "black" }}
          textStyle={{ color: "white" }}
        >
          <Text>{Number((this.state.volumn).toFixed(1))}</Text>
        </Badge>

        </Content>
      </Container>
    );

    debugger;
  }
}

export default Mastermode;

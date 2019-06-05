import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import {
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


class Mastermood extends Component {
  render() {
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
          <Badge primary style={styles.mb}>
            <Icon
              name="people"
              style={{ fontSize: 15, color: "#fff", lineHeight: 20 }}
            />
          </Badge>
          <Badge
            style={{ backgroundColor: "black" }}
            textStyle={{ color: "white" }}
          >
            <Text>1866</Text>
          </Badge>
        </Content>
      </Container>
    );
  }
}

export default Mastermood;

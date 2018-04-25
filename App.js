/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Button,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import styles from "./styles";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

const CloseIcon = require("./exit.png");

class Modal extends Component {
  render() {
    if (!this.props.visible) return <View />;

    return (
      <View style={styles.modal}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeIcon}
            onPress={this.props.onDismiss}
          >
            <Image resizeMode="contain" source={CloseIcon} />
          </TouchableOpacity>
          <Text style={styles.titleText}>This is a Modal</Text>
          <Text style={styles.subtitleText}>
            To show the broken shadow node
          </Text>
          <View style={styles.actionsContainer}>
            <Button
              style={styles.ctaButton}
              title="Dismiss"
              onPress={this.props.onDismiss}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default class App extends Component {
  state = {
    visible: false
  };

  onShow = () => {
    this.setState({
      visible: true
    });
  }

  onDismiss = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <React.Fragment>
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
          <Button style={styles.ctaButton} title="Show Modal" onPress={this.onShow} />
        </View>
        <Modal visible={this.state.visible} onDismiss={this.onDismiss} />
      </React.Fragment>
    );
  }
}

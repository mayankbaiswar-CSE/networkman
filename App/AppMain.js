/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    NetInfo,
    Button
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppReducer from './AppReducers';
import * as AppActions from './AppActions';
import constants from './constants';

class App extends Component {

    componentDidMount() {
        NetInfo.isConnected.addEventListener('connectionChange', this.props.actions.changeStatus);
    }

    componentWillUnmount() {
        NetInfo.isConnected.addEventListener('connectionChange', this.props.actions.changeStatus);
    }

    render() {
        console.log(this.props.state.star);
        console.log(this.props.state.error);
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to NetworkMan!
                </Text>
                <Button
                    title={"Press to get character in console"}
                    onPress={this.fetchStarWars.bind(this)}
                />
            </View>
        );
    }

    fetchStarWars() {
        // check internet access and make network call.
        const { net } = this.props.state;
        if (net) {
            this.props.actions.getStarWarsDude(constants.URL);
        }
    }
}

function mapStateToProps(state) {
    return {
        state: state.AppReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(AppActions, dispatch)
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
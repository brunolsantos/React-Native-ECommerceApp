import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';


export default class ImageOverlay extends Component {
    render() {

        let header = this.props.header ?
        <Text style={styles.overlayHeader}>{this.props.header}</Text>
        :null;

        let paragraph = this.props.paragraph ?
        <Text style={styles.overlayText}>{this.props.paragraph}</Text>
        :null;

        return (
            <View style={styles.container}>
                {header}
                {paragraph}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    overlayHeader: {
        shadowColor: '#000',
        shadowOffset: {width:0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 1,

        alignSelf: 'center',
        fontSize: 28,
        color: '#292929',
        textAlign: 'center',
        padding: 10,
        backgroundColor: 'rgba(255,255,255,0.6)',
        fontWeight: 'bold'
    },
    overlayText: {
        shadowColor: '#000',
        shadowOffset: {width:0, height: 2},
        shadowOpacity: 0.6,
        shadowRadius: 3,
        elevation: 1,

        alignSelf: 'center',
        fontSize: 16,
        fontStyle: 'italic',
        color: '#292929',
        textAlign: 'center',
        padding: 8,
        marginTop: 8,
        backgroundColor: 'rgba(255,255,255,0.6)',
    }
});
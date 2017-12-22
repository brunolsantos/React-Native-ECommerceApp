import React, { Component } from 'react';
import {
    ImageBackground,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import ImageOverlay from './ImageOverlay';

export default class CustomImage extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.touchableOpacity} >
                <ImageBackground source={this.props.imageSource}
                    style={styles.image}
                >
                    <ImageOverlay 
                        header={ this.props.header } 
                        paragraph={ this.props.paragraph }
                    />
                </ImageBackground>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    image: {
        width:'100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchableOpacity: {
        width:'100%',
    }
});
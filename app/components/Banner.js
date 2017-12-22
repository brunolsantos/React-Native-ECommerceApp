import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground
} from 'react-native';

import ImageOverlay from './ImageOverlay';

export default class Banner extends Component {
    render() {
        return (
            <ImageBackground source={require('../img/header_presentation.jpg')}
                style={styles.banner}
            >
                <ImageOverlay
                    header='- React Native -'
                    paragraph='- e-commerce -'
                />
            </ImageBackground>
        );
    }
}


const styles = StyleSheet.create({
    banner: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 200
    }
});
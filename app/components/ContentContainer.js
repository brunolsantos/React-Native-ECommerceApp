import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import CustomImage from './CustomImage';

export default class ContentContainer extends Component {
    render() {
        return (
            <View style={styles.contentContainer}>

                <View style={styles.col2}>
                    <CustomImage header='Shirts' imageSource={require('../img/shirts.jpg')}/>
                </View>

                <View style={styles.col1}>
                    <CustomImage header='Shoes' imageSource={require('../img/shoes.jpg')}/>
                </View>

                <View style={styles.contentBanner}>
                    <CustomImage header='Suits' paragraph='Buy this suit today!' imageSource={require('../img/suit.jpg')}/>
                </View>

                <View style={styles.col2}>
                    <CustomImage header='More Shirts' paragraph='Try One Today!' imageSource={require('../img/more_shirts.jpg')}/>
                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
    },
    col1: {
        flex: 1,
        padding: 5,
    },
    col2: {
        flex: 2,
        padding: 5,
    },
    contentBanner: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    }
});
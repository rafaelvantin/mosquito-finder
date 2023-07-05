import React, { useState, useEffect, createRef, useContext } from 'react';
import { View, StyleSheet, Pressable, Dimensions, Text } from 'react-native';
import { Marker, Callout } from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons.js'
import { Image } from 'expo-image';

const ReportMarker = ({
    report,
    navigation,
}) => {

    const vh = Dimensions.get('window').height / 100;
    const vw = Dimensions.get('window').width / 100; 

    return (
        <Marker
            coordinate={report.coordinates}
            pinColor='orange'
            calloutOffset={{ x: 0, y: 4 }}
            calloutAnchor={{ x: 0.5, y: 0.4 }}
        >
            <Callout
                tooltip
                style={{width: 40 * vw, height: 26 * vh}}
                onPress={() => navigation.navigate('CheckReports', 
                { screen: 'ReportDetails', params: { report: report } }
                )}
            >
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                }}>

                    {/* Callout content */}
                    <View style={styles.callout}>

                        <Image source={ report.image } contentFill="fill" style={styles.calloutImage} />

                        <View style={styles.calloutHeader}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{report.title}</Text>
                        </View>

                        <View style={styles.calloutOptions}>

                            <View style={styles.calloutOption}>
                                <Ionicons name="thumbs-up-outline" style={{
                                    color: '#191',
                                    ...styles.calloutOptionIcon,
                                }} />
                                <Text style={styles.calloutOptionText}>{report.likes}</Text>
                            </View>

                            <View style={{
                                text: '#911',
                                ...styles.calloutOption,
                            }}>
                                <Ionicons name="thumbs-down-outline" style={{
                                    color: '#f55',
                                    ...styles.calloutOptionIcon,
                                }} />
                                <Text style={styles.calloutOptionText}>{report.dislikes}</Text>
                            </View>
                        </View>
                    </View>

                    {/* Callout triangle */}
                    <View style={styles.calloutArrow} />

                </View>
            </Callout>
        </Marker>
    );
}

export default ReportMarker;

const styles = StyleSheet.create({
    callout: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    calloutImage: {
        borderRadius: 20,
        width: '100%',
        height: '65%',
    },
    calloutHeader: {
        width: '100%',
        textAlign: 'left'
    },
    calloutOptions: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '50%',
        height: '10%',
        marginTop: 6,
    },
    calloutOption: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    calloutOptionText: {
        fontSize: 12,
    },
    calloutOptionIcon: {
        fontSize: 18,
    },
    calloutArrow: {
        backgroundColor: 'transparent',
        borderWidth: 16,
        borderColor: 'transparent',
        borderTopColor: '#fff',
        alignSelf: 'center',
    }
});

import React, { useState, useEffect, createRef, useContext, useMemo } from 'react';
import { View, StyleSheet, Pressable, Dimensions, ToastAndroid, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Ionicons from 'react-native-vector-icons/Ionicons.js'

import { ReportContext } from '@store/reportContext';
import ReportMarker from '@components/reportMarker.js';

const Main = ({navigation}) => {

    // Units
    const vh = Dimensions.get('window').height / 100;
    const vw = Dimensions.get('window').width / 100;

    // Reference to the map
    const mapRef = createRef();

    // Current location of the user
    const [currentLocation, setCurrentLocation] = useState();

    // Update current location of the user
    useEffect(() => { (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.High,
            enableHighAccuracy: true,
            timeInterval: 1000,
        });
        setCurrentLocation(location);
    })(); }, []);

    // Region being displayed on the map
    const [currentRegion, setCurrentRegion] = useState({
        latitude: -22.0029865,
        longitude: -47.897859,
        latitudeDelta: 0.0143,
        longitudeDelta: 0.0134,
    });

    // Move the map to the current location of the user
    const moveToCurrentLocation = () => {
        if (!currentLocation) {
            ToastAndroid.show('Ainda não foi possível obter sua localização', ToastAndroid.SHORT);
            return;
        }

        mapRef.current.animateToRegion({
            latitude: currentLocation.coords.latitude,
            longitude: currentLocation.coords.longitude,
            latitudeDelta: currentRegion.latitudeDelta,
            longitudeDelta: currentRegion.longitudeDelta,
        });
    }

    // Reports
    const { reports } = useContext(ReportContext);

    const pointInRegion = (point, region) => {
        return (
            point.latitude < region.latitude + region.latitudeDelta / 2 &&
            point.latitude > region.latitude - region.latitudeDelta / 2 &&
            point.longitude < region.longitude + region.longitudeDelta / 2 &&
            point.longitude > region.longitude - region.longitudeDelta / 2
        );
    };

    // Create markers for reports that are contained in the current region
    const getMarkers = () => {
        return reports.filter(
            (report) => pointInRegion(report.coordinates, currentRegion)
        ).map((report) => (
            <ReportMarker key={report.id} report={report} navigation={navigation} />
        ));
    };
    const markers = useMemo(() => getMarkers(), [reports, currentRegion]);

    // Currently selecting coordinates for a new report
    const [selectingCoordinates, setSelectingCoordinates] = useState(false);
    const [newReportCoordinates, setNewReportCoordinates] = useState();

    // Enter coordinate selection mode
    const enterSelectingCoordinates = () => {
        setSelectingCoordinates(true);
        setNewReportCoordinates(currentRegion);
    }

    // Take the user to the new report screen
    const goToNewReport = () => {
        navigation.navigate('TakePhoto', { coordinates: newReportCoordinates });
        setSelectingCoordinates(false);
    }

    return (
        <View style={styles.container}>
            <MapView 
                style={styles.map}
                ref={mapRef}
                initialRegion={currentRegion}
                onRegionChange={setNewReportCoordinates}
                onRegionChangeComplete={setCurrentRegion}
                showsUserLocation={true}
                showsMyLocationButton={false}
                showsCompass={false}
            >
                {markers}

                {selectingCoordinates && <Marker
                    coordinate={newReportCoordinates}
                    pinColor='lightblue'
                />}
            </MapView>

            <View style={{
                height: 7 * vh,
                ...styles.header,
            }}>

                <Pressable
                    style={{
                        marginLeft: 5 * vw,
                    }}
                    onPress={() => navigation.openDrawer()}>
                        <Ionicons name="menu-outline" size={40} color="#fff" />
                </Pressable>

                <Text style={{
                    marginLeft: 5 * vw,
                    color: '#fff',
                    fontSize: 20,
                }}>
                    {selectingCoordinates ? 'Selecione o local da denúncia' : 'Mosquito Finder'}
                </Text>

            </View>

            <View style={{
                bottom: 3 * vh,
                right: 3 * vw,
                ...styles.mapButtons,
            }}>

                <Pressable 
                    style={styles.circleButton}
                    onLongPress={() => ToastAndroid.show('Localização atual', ToastAndroid.LONG)}
                    onPress={moveToCurrentLocation}>
                    <Ionicons name="locate-outline" style={styles.buttonIcon} />
                </Pressable>

                {!selectingCoordinates && <Pressable
                    style={styles.circleButton}
                    // Tooltip
                    onLongPress={() => ToastAndroid.show('Adicionar denúncia', ToastAndroid.LONG)}
                    onPress={enterSelectingCoordinates}>
                    <Ionicons name="add-outline" style={styles.buttonIcon} />
                </Pressable>}

                {selectingCoordinates && <>

                    <Pressable
                        style={styles.circleButton}
                        // Tooltip
                        onLongPress={() => ToastAndroid.show('Cancelar', ToastAndroid.LONG)}
                        onPress={() => setSelectingCoordinates(false)}>
                        <Ionicons name="close-outline" style={styles.buttonIcon} />
                    </Pressable>

                    <Pressable
                        style={styles.circleButton}
                        // Tooltip
                        onLongPress={() => ToastAndroid.show('Confirmar', ToastAndroid.LONG)}
                        onPress={goToNewReport}>
                        <Ionicons name="checkmark-outline" style={styles.buttonIcon} />
                    </Pressable>

                </>}

            </View>
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    header: {
        width: '100%',
        backgroundColor: '#877b66',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    mapButtons: {
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    circleButton: {
        width: 58,
        height: 58,
        backgroundColor: '#fff',
        borderColor: '#eee',
        borderWidth: 2,
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonIcon: {
        color: '#877b66',
        fontSize: 40,
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
    },
});

export default Main;
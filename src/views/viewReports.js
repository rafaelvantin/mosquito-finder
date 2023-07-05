import { useContext } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Image } from 'expo-image';

import { ReportContext } from '../store/reportContext';

import Ionicons from 'react-native-vector-icons/Ionicons';


const MyReports = ({ navigation }) => {
    
    const { reports } = useContext(ReportContext);

    const renderMyReports = () => {
        if(reports == null || reports.length == 0) {
            return (
                <Text>Nenhuma denúncia encontrada.</Text>
            );
        }

        return reports.map((report) => {
            return (
                <TouchableHighlight
                    key={report.id}
                    onPress={() => navigation.navigate('ReportDetails', {report})}
                    underlayColor='#ccc'
                    style={styles.report}
                >
                    <View style={styles.reportContainer}>
                        <Image source={report.image} style={styles.reportImage} contentFit='fill' />
                        <View style={styles.reportDescriptionContainer}>
                            <Text style={styles.reportTitle}>{report.title}</Text>
                            <View style={styles.reportLikesContainer}>
                                <View style={styles.likesContainer}>
                                    <Ionicons name="thumbs-up-outline" size={22} />
                                    <Text style={styles.reportLikes}>{report.likes}</Text>
                                </View>
                                <View style={styles.likesContainer}>
                                    <Ionicons name="thumbs-down-outline" size={22} />
                                    <Text style={styles.reportLikes}>{report.dislikes}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>
            );
        });
    
    }
    
        return (
        <View style={styles.container}>
            {renderMyReports()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'#D3D8CA',
        paddingTop: 30,
        paddingHorizontal: 15,
    },
    report: {
        width: '100%',
        height: 150,
        marginBottom: 16,
    },
    reportContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 20,
        borderRadius: 8,
    },
    reportImage: {
        width: 130,
        height: '100%',
        borderRadius: 8,
    },
    reportDescriptionContainer: {
        flex: 1,
        height: '100%',
        marginLeft: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    reportTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    reportLikesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    likesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16,
    },
    reportLikes: {
        fontSize: 15,
        marginRight: 8,
    },



        
});

export default MyReports;
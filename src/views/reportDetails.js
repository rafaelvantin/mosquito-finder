import { useContext } from 'react';

import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { UserContext } from '../store/userContext';
import { ReportContext } from '../store/reportContext';


const ReportDetails = ({route, navigation}) => {

    const { checkIsSec } = useContext(UserContext);
    const { solveReport } = useContext(ReportContext);

    const { report } = route.params;

    const handleSolve = () => {
        solveReport(report.id);
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Image source={report.image} style={styles.reportImage} />
            <View style={styles.reportDescriptionContainer}>
                <Text style={styles.reportTitle}>{report.title}</Text>
                <Text style={styles.reportDescription}>{report.description}</Text>
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

            {checkIsSec() && (
                <View style={styles.reportButtonsContainer}>
                    <TouchableHighlight style={styles.solve} onPress={handleSolve}>
                        <Text style={styles.solveText}>Marcar como Resolvida</Text>
                    </TouchableHighlight>
                </View>
            )}
        </View>
    );
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'#D3D8CA',
        paddingTop: 10,
        paddingHorizontal: 7,
    },

    reportImage: {
        width: '100%',
        height: 130,
        borderRadius: 8,
        marginBottom: 16,
    },
    reportDescriptionContainer: {
        width: '100%',
        height: 240,
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
    },
    reportTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    reportDescription: {
        fontSize: 14,
        marginBottom: 16,
    },
    reportLikesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 12,
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

    reportButtonsContainer: {
        width: '100%',
        height: 90,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 16,
        marginTop: 16,
        backgroundColor: '#fff',
    },
    solve: {
        width: '100%',
        height: 50,
        backgroundColor: '#169C89',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    solveText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },


        
});

export default ReportDetails;
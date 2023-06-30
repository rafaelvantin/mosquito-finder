import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';


const MyReports = () => {
    const reports = [
        {
            id: 1,
            image: require('../../assets/arquitetura.jpg'),
            title: 'Praça Arquitetura',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit lectus non justo elementum, eget varius ipsum posuere. Aenean a metus dictum mi pretium pulvinar vitae vitae dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla lacus dui, porttitor nec dictum nec, ultricies et enim. ',
            status: 'Em análise',
            likes: 12,
            dislikes: 0,
        },
        {
            id: 2,
            title: 'Saída Matemática',
            image: require('../../assets/matematica.jpg'),
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit lectus non justo elementum, eget varius ipsum posuere. Aenean a metus dictum mi pretium pulvinar vitae vitae dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla lacus dui, porttitor nec dictum nec, ultricies et enim. ',
            status: 'Em análise',
            likes: 5,
            dislikes: 1,
        },
        {
            id: 3,
            image: require('../../assets/bandejao.jpg'),
            title: 'Bandejão',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit lectus non justo elementum, eget varius ipsum posuere. Aenean a metus dictum mi pretium pulvinar vitae vitae dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla lacus dui, porttitor nec dictum nec, ultricies et enim. ',
            status: 'Em análise',
            likes: 1,
            dislikes: 7,
        }
    ];


    const renderMyReports = () => {
        return reports.map((report) => {
            return (
                <TouchableHighlight
                    key={report.id}
                    onPress={() => navigation.navigate('ReportDetails', {report})}
                    underlayColor='#ccc'
                    style={styles.report}
                >
                    <View style={styles.reportContainer}>
                        <Image source={report.image} style={styles.reportImage} />
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
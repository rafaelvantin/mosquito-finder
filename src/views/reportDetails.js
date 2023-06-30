import { View, Text } from 'react-native';

const ReportDetails = ({route}) => {

    const { report } = route.params;

    console.log(report);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>ReportDetails</Text>
        </View>
    );
}

export default ReportDetails;
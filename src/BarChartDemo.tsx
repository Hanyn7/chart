// Import des dépendances nécessaires
import {View, Text, useWindowDimensions} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import {barCharData} from './data';

// Composant BarChartDemo
const BarChartDemo = () => {
    const {width} = useWindowDimensions();
    
    return (
        <View>
            <Text>Bar chart demo</Text>
            <BarChart
                data={barCharData}
                yAxisLabel=''
                yAxisSuffix=''
                width={width}
                height={400}
                chartConfig={{
                    backgroundGradientFrom: 'lightgreen',
                    backgroundGradientFromOpacity: 0.5,
                    backgroundGradientTo: 'red',
                    backgroundGradientToOpacity: 0.5,
                    color: () => 'black',
                    barPercentage: 0.6
                }}
                style={{borderColor: 'black', borderWidth: 1}}
                withInnerLines={true}
                verticalLabelRotation={50}
                horizontalLabelRotation={40}
                showValuesOnTopOfBars
                showBarTops={true}
                withCustomBarColorFromData
                flatColor
            />
        </View>
    );
};

export default BarChartDemo;

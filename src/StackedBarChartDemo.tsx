import React from 'react';
import { View, Text, useWindowDimensions } from 'react-native';
import { StackedBarChart } from 'react-native-chart-kit';
import { stackedBarChartData } from './data';

const StackedBarChartDemo = () => {
  const { width } = useWindowDimensions();

  return (

      <View>
        <Text>Stacked bar chart demo</Text>
        <StackedBarChart
          data={stackedBarChartData}
          hideLegend={false}
          withHorizontalLabels={false}
          yAxisLabel=""
          width={width}
          height={400}
          chartConfig={{
            backgroundGradientFrom: 'white',
            backgroundGradientTo: 'white',
            color: (opacity = 1) => 'black',
            barPercentage: 0.5,
            propsForBackgroundLines: {},
            propsForLabels: {
              fontSize: "12",
              fontWeight: 400,
            },
          }}
          style={{ borderColor: 'black', borderWidth: 1 }}
        />
      </View>
    );
};

export default StackedBarChartDemo;

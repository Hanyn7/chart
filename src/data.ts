import {LineChartData} from 'react-native-chart-kit/dist/line-chart/LineChart';
import {StackedBarChartData} from 'react-native-chart-kit/dist/StackedBarChart';
import {ChartData} from 'react-native-chart-kit/dist/HelperTypes';


export const barCharData: ChartData = {
    labels:['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
    datasets:[
     {
         data:[28, 45, 60, 70, 30],
         colors:[(opacity=1)=> 'green',(opacity=1)=> 'green',(opacity=1)=> 'green',
         (opacity=1)=> 'lightgrey',(opacity=1)=> 'green'
     ]
     },{
        data:[50, 80, 20, 10, 80],
        colors:[(opacity=1)=> 'red',(opacity=1)=> 'red',(opacity=1)=> 'red',
        (opacity=1)=> 'lightgrey',(opacity=1)=> 'red'
    ]
    },  
    ]
    
 }

export const lineChartData: LineChartData = {
    labels:['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5','Day 6','Day 7'],
    datasets:[
     {
         data:[0, 45, 60, 70, 30,45,100],
         color:()=> 'lightgreen',
         //strokeWidth:5,    
     },
     {
        data:[30, 45, 50, 100, 50],
        color:()=> 'orange',
    },{
        data:[0, 21, 90, 28, 40,16],
        color:()=> 'purple',
    },{
        data:[35, 0, 0, 40, 65,100],
        color:()=> 'pink',
    }
    ],
    legend:['petit-dej','dej','snack','diner']
 }

 
 export const stackedBarChartData: StackedBarChartData = {
    labels:['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5','Day 6','Day 7'],
    data:[
        [10, 20,10],
        [50, 20,10],[20, 20,50],[40, 45,20],[30,15, 20],[20, 20,50]
        ,[10, 20,10],
    ],
    barColors:['lightgreen','yellow','lightblue'],
    legend:['petit-dej', 'dej','diner']
}
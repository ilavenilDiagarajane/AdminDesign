import LineChart from 'react-linechart';

import '../node_modules/react-linechart/dist/styles.css';

export function Charts(){
    const data = [
        {									
            color: "steelblue", 
            points: [{x: 1, y: 2}, {x: 2, y: 5}, {x: 3, y: 10},{x: 4, y: 2}, {x: 5, y: 5}, {x: 6, y: 10}] 
        }
    ]

    return(
        <h1>Chart<LineChart 
        width={600}
        height={400}
        data={data}
    />
   
    </h1>
    );
}
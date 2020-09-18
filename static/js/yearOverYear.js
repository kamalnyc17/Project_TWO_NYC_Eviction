// main function to perform option change related updates
const optionChanged = (id) => {
    lineChart(data, id)
}

const lineChart = (data, id) => {
    // gathering data - 2017
    data_2017 = data.filter(data1 => data1.borough === id).filter(data2017 => data2017.year === '2017')
    month_2017 = data_2017.map(mdata => mdata.month)
    total_2017 = data_2017.map(tdata => tdata.total)
    // gathering data - 2018
    data_2018 = data.filter(data1 => data1.borough === id).filter(data2017 => data2017.year === '2018')
    month_2018 = data_2018.map(mdata => mdata.month)
    total_2018 = data_2018.map(tdata => tdata.total)
    // gathering data - 2019
    data_2019 = data.filter(data1 => data1.borough === id).filter(data2017 => data2017.year === '2019')
    month_2019 = data_2019.map(mdata => mdata.month)
    total_2019 = data_2019.map(tdata => tdata.total)

    const trace1 = {
        x: month_2017,
        y: total_2017,
        type: 'line',
        name: '2017',
        line: {
          width: 1
        }
    };
    const trace2 = {
        x: month_2018,
        y: total_2018,
        type: 'line',
        name: '2018',
        line: {
          width: 1
        }
    };
    const trace3 = {
        x: month_2019,
        y: total_2019,
        type: 'line',
        name: '2019',
        line: {
          width: 1
        }
    };

    var data = [ trace1, trace2, trace3 ];
    
    var layout = {
      xaxis: {
        tickmode: "array", // If "array", the placement of the ticks is set via `tickvals` and the tick text is `ticktext`.
        tickvals: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        ticktext: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
        autosize: false,
        width: 900,
        height: 500,
        margin: {
          l: 60,
          r: 20,
          b: 100,
          t: 20,
        },
    };
    
    Plotly.newPlot('line', data, layout);

}

// building the visualization based on the default value of the dropdown
optionChanged(document.getElementById("selDataset").value)
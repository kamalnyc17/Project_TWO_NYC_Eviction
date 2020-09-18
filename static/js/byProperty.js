// main function to perform option change related updates
const optionChanged = (id) => {
    createInformationTable(id)
    barChart(id)
}

const createInformationTable = (id) => {
    data.filter(data => data.year === id).map(info => {
        let domID = info.residential_commercial_ind.toLowerCase().replace(' ', '')
        document.getElementById(domID).innerHTML = info.residential_commercial_ind + ": " + info.total
    })
}

const barChart = (id) => {
    // gathering data
    property = data.filter(data => data.year === id).map(info => info.residential_commercial_ind).reverse()
    total_evictions = data.filter(data => data.year === id).map(info => info.total).reverse()

    // plotting chart
    const trace1 = {
        x: total_evictions,
        y: property,
        type: "bar",
        orientation: 'h',
    };
    const plot_data = [trace1];
    const layout = {
        autosize: false,
        width: 700,
        height: 400,
        margin: {
          l: 80,
          r: 20,
          b: 100,
          t: 20,
        },
        xaxis: {
            tickfont: {
                family: 'Arial, Helvetica, sans-serif',
                size: 12,
                color: '#000000'
            },
        },
        yaxis: {
            tickfont: {
                family: 'Arial, Helvetica, sans-serif',
                size: 10,
                color: '#000000',
            },
        }
    };
    Plotly.newPlot("bar", plot_data, layout);
}

// building the visualization based on the default value of the dropdown
optionChanged(document.getElementById("selDataset").value)
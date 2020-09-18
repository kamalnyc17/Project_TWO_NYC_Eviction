// main function to perform option change related updates
const optionChanged = (id) => {
    createInformationTable(id)
    pieChart(data, id)
}

const createInformationTable = (id) => {
    data.filter(data => data.year === id).map(info => {
        let domID = info.borough.toLowerCase().replace(' ', '')
        document.getElementById(domID).innerHTML = info.borough + ": " + info.total
    })
}
// plot the pie chart
const pieChart = (data, id) => {
    // gathering data
    borough = data.filter(data => data.year === id).map(info => info.borough).reverse()
    total_evictions = data.filter(data => data.year === id).map(info => info.total).reverse()

    var data = [{
        values: total_evictions,
        labels: borough,
        hole: .4,
        type: 'pie',
        hovertemplate: 'Borough: <b>%{label}</b><br>Total Eviction: <b>%{value}</b><extra></extra>',
    }];

    var layout = {
        height: 500,
        width: 700,
        margin: {"t": 20, "b": 0, "l": 50, "r": 0},
    };

    Plotly.newPlot('pie', data, layout);

}
// building the visualization based on the default value of the dropdown
optionChanged(document.getElementById("selDataset").value)
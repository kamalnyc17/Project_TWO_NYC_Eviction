// our cleaned up dataset has zipcode 10001 through 11692. We will skip zipcodes that 
// does not have data for all three years
const mainProcess = () => {
    // preparing data
    const data2017 = []
    const zip2017 = []
    const data2018 = []
    const zip2018 = []
    const data2019 = []
    const zip2019 = []
    for (i = 10001; i < 11692; i++) {
        let zipData = data.filter(d => d.eviction_zip === i.toString())
        if (zipData.length === 3) {
            zipData.map(z => {
                (z.year === "2017") ? data2017.push(z.total): (z.year === "2018") ?
                    data2018.push(z.total) : data2019.push(z.total);
                (z.year === "2017") ? zip2017.push(z.eviction_zip): (z.year === "2018") ?
                    zip2018.push(z.eviction_zip) : zip2019.push(z.eviction_zip);
            })
        }
    }
    // creating data group
    const trace1 = {
        y: data2017,
        text: zip2017,
        name: "2017",
        boxpoints: 'all',
        jitter: 0.3,
        pointpos: -1.8,
        boxmean: 'sd',
        type: 'box',
        hovertemplate: 'Zipcode: <b>%{text}</b><br>Total Eviction: <b>%{y}</b><extra></extra>',
    };
    const trace2 = {
        y: data2018,
        text: zip2018,
        name: "2018",
        boxpoints: 'all',
        jitter: 0.3,
        pointpos: -1.8,
        boxmean: 'sd',
        type: 'box',
        hovertemplate: 'Zipcode: <b>%{text}</b><br>Total Eviction: <b>%{y}</b><extra></extra>',
    };
    const trace3 = {
        y: data2019,
        text: zip2019,
        name: "2019",
        boxpoints: 'all',
        jitter: 0.3,
        pointpos: -1.8,
        boxmean: 'sd',
        type: 'box',
        hovertemplate: 'Zipcode: <b>%{text}</b><br>Total Eviction: <b>%{y}</b><extra></extra>',
    };
    const zipDataArr = [trace1, trace2, trace3];
    // creating layout
    layout = {
        title: 'Yearly Total by Zipcode with Mean & Standard Deviation',
        hovermode: "closest",
        yaxis: {
            //autorange: true,
            showgrid: true,
            zeroline: true,
            gridcolor: 'rgb(255, 255, 255)',
            gridwidth: 1,
            zerolinecolor: 'rgb(255, 255, 255)',
            zerolinewidth: 2
        },
        autosize: false,
        width: 950,
        height: 500,
        margin: {
            l: 40,
            r: 30,
            b: 40,
            t: 100
        },
        paper_bgcolor: 'rgb(243, 243, 243)',
        plot_bgcolor: 'rgb(243, 243, 243)',
        showlegend: false
    };
    Plotly.newPlot('boxPlot', zipDataArr, layout);
}

mainProcess()
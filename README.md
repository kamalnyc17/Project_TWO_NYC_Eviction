![Alt text](static/images/Homepage-Top-Banner.jpg?raw=true "Image to view")
# NYC Evictions Analysis 
#### Columbia University Data Analytics Bootcamp - Project 2 (September 2020) 
#### Project By: Alfonso Toruno, Himani Manglik, Kamal Mukherjee, Shivani Thakkar
-----------------------------------------------------------------------------------

## Goal 
#### Visualize trends related to evictions in NYC between the years 2017-2019 on an interactive dashboard.

## Introduction
This dashboard seeks to look at NYC eviction data between the years 2017-2019. Visualizations are based on data extracted from the City of New York website (NYC Open Data). Because of COVID-19 and a moratorium on evictions from mid-March 2020 through October 1, there was no data for at least half of the year 2020. Despite this, our team decided to continue analyzing eviction data from 2017-2019 to see if there are any trends we can uncover. 
 
When tenants are for any reason not paying their rent or are otherwise not legally occupying their apartment, landlords can mount a nonpayment or holdover eviction proceeding against them and bring them to housing court. In NYC, housing courts in all boroughs are usually filled with frenzied landlords, tenants, lawyers, and housing court and community organization officials. Pre COVID-19, evictions and housing court cases were in full swing as regularly scheduled programming. But during this unprecedented time of a global pandemic, in mid-March 2020, Governor Andrew Cuomo issued a moratorium on evictions. Now, residential tenants cannot be evicted through October 1. 

While we are now looking at evictions from the years 2017-2019, future analyses can look at how evictions changed post-COVID.

![Alt text](static/images/Homepage-Banner-Three.jpg?raw=true "Image to view")

## Methods
* PostgreSQL, CSV

Our first step was to download the data from NYC Open Data in csv format and imported it to our PostgreSQL database to perform subsequent ETL

* Jupyter Notebook, Pandas, SQLAlchemy

The ETL process consists of cleaning the intial NYC open data to make sure all the zip codes are correct and the dataset includes eviction records for the entire year of 2017, 2018 & 2019. Later on we performed various grouping and merging to create JSON files that are ready to be rendered for our visualization.

* HTML, CSS, Bootstrap

All of our webpages are using Bootstrap framework on top of HTML5 & CSS3 to construct the templates.

* Python, Flask

Our base application is running on Python/Flask framework. We are rendering all our pages through Flask route and where needed, passing the visualization data to the corresponding page via Flask Decorators.

* Plotly, JavaScript, ES6

We have used JavaScript to make our website interactive and included ES6 features do modernize our code. All of our charts are made using Plotly.

* LeafletJS, D3

The NYC Map to show yearly eviction numbers by zip code is prepared with LeafletJS and D3.




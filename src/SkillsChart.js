import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  charts: {
    color: '#1b242f',
    textAlign: 'center',
    fontFamily: '"Mada", sans-serif',
    fontSize: '36px',
    margin: '0px 0px 20px',
    fontWeight: 600,
  },
}));

const data = {
  labels: [
    'HTML',
    'CSS',
    'React',
    'Material-Ui',
    'MySQL',
    'MongoDB',
    'AWS',
    'Firebase',
    'NoSQL',
    'C++',
    'JavaScript',
    'TypeScript',
    'GitHub',
    'Data Structures',
    'Circle Ci',
  ],
  datasets: [
    {
      data: [120, 80, 20, 80, 60, 20, 30, 120, 70, 50, 80, 120, 80, 50, 20],
      backgroundColor: [
        '#deebff',
        '#afceff',
        '#7eb0ff',
        '#679bed',
        '#d3f0f0',
        '#a3ddde',
        '#5bbebf',
        '#2da5a6',
        '#078a8b',
        '#eaeaea',
        '#cccccc',
        '#a8a8a8',
        '#f5cab7',
        '#ec9b78',
        '#e47646',
      ],
      hoverBackgroundColor: [
        '#324b72',
        '#324b72',
        '#324b72',
        '#324b72',
        '#005454',
        '#005454',
        '#005454',
        '#005454',
        '#005454',
        '#4a4a4a',
        '#4a4a4a',
        '#4a4a4a',
        '#7c3618',
        '#7c3618',
        '#7c3618',
      ],
      labels: [
        'HTML',
        'CSS',
        'React',
        'Material-Ui',
        'MySQL',
        'MongoDB',
        'AWS',
        'Firebase',
        'NoSQL',
        'C++',
        'JavaScript',
        'TypeScript',
        'GitHub',
        'Data Structures',
        'Circle Ci',
      ],
      label: 'Outer',
    },
    {
      data: [300, 300, 250, 150],
      backgroundColor: ['#5b8ad2', '#007273', '#818181', '#cb5927'],
      hoverBackgroundColor: ['#5b8ad2', '#007273', '#818181', '#cb5927'],
      labels: ['Frontend Tech', 'Database', 'Languages', 'Development tools'],
      label: 'Inner',
    },
  ],
};

const options = {
  responsive: true,
  legend: {
    position: 'bottom',
    labels: {
      fontColor: 'black',
    },
    boxWidth: '50',
    fontFamily: 'freight-sans-pro Helvetica Neue Helvetica Arial sans-serif',
    fontSize: '20px',
    display: true,
  },
  tooltips: {
    callbacks: {
      label: function (tooltipItem, data) {
        var dataset = data.datasets[tooltipItem.datasetIndex];
        var index = tooltipItem.index;
        return dataset.labels[index] + ': ' + dataset.data[index];
      },
    },
  },
};

const SkillsChart = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Grid
        item
        xs={12}
        style={{
          justifyContent: 'center',
          maxWidth: '600px',
          margin: '0px auto',
        }}
      >
        <Typography variant="h3" className={classes.charts}>
          Skills I'm good at.
        </Typography>
        <Doughnut data={data} options={options} width={200} />
      </Grid>
    </div>
  );
};

export default SkillsChart;

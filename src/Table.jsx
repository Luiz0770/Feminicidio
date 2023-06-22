import React from 'react';
import { Chart } from 'react-google-charts';

const Table = () => {
  const data = [
    ['Ano', ''],
    ['2015', 41],
    ['2016', 63],
    ['2017', 121],
    ['2018', 136],
    ['2019', 184],
    ['2020', 180],
    ['2021', 140],
    ['2022', 195],
  ];

  return (
    <Chart
      width={'500px'}
      height={'300px'}
      chartType="Bar"
      loader={<div>Carregando gráfico...</div>}
      data={data}
    />
  );
};

export default Table;
import React, { useState } from 'react';
import { Chart } from "react-google-charts";
import './App.css';

function Pizza() {
  const [options, setOptions] = useState({
    //title: ''
  })
  const [data, setData] = useState([
    ['Cor', 'Vitimas'],
    ['Branco', 106],
    ['Negro', 11],
    ['Pardo', 75],
    ['Amarela', 1],
    ['Outros', 2],
  ])
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Chart
            width={'600px'}
            height={'500px'}
            chartType="PieChart"
            loader={<div>Carregando gráfico...</div>}
            data={data}
            options={options}
          />
        </div>
      </header>
    </div>
  );
}

export default Pizza;
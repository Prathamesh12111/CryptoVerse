import React from 'react'
import {Line} from 'react-chartjs-2'
import {Row,Col,Typography} from 'antd'
import { Chart, CategoryScale } from 'chart.js';
import 'moment';
import 'chartjs-adapter-moment';

// Register the CategoryScale
Chart.register(CategoryScale);

const {Title} = Typography;

const LineChart = ({coinHistory,currentPrice,coinName}) => {

    const coinPrice = [];
    const coinTimestamp = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
      coinPrice.push(coinHistory?.data?.history[i].price);
    }
 
    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
      coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp*1000).toLocaleDateString());
    }

    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price In USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd'
            }
        ]
    }

    console.log(coinHistory);
      
  return (
    <>
       <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      <Line data={data} />
    </>
  )
}

export default LineChart

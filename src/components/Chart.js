import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useRef, useEffect, useState } from 'react';
import styles from '@/styles/chart.module.css';
import { options, mobileOptions } from '../../chart.config.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart() {
  const chartRef = useRef(null);
  const [background, setBackground] = useState();

  useEffect(() => {
    if (chartRef.current) {
      const bar_ctx = chartRef.current.canvas.getContext('2d');
      if (bar_ctx) {
        console.log(bar_ctx);
        const background_1 = bar_ctx.createLinearGradient(0, 0, 0, 500);
        background_1.addColorStop(0, '#5E94E4');
        background_1.addColorStop(1, '#5245E4');
        setBackground(background_1);
      }
    }
  }, []);

  const [layout, setLayout] = useState('');

  useEffect(() => {
    const setInitialLayout = () => {
      if (window.innerWidth > 768) {
        setLayout('desktop');
      } else {
        setLayout('mobile');
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setLayout('desktop');
      } else {
        setLayout('mobile');
      }
    };

    setInitialLayout();

    window.addEventListener('resize', handleResize);
  }, []);

  const data = {
    labels: [2018, 2019, 2020, 2021, 2022, 2023],
    datasets: [
      {
        label: 'Amount',
        data: [20, 40, 39, 10, 55, 70],
        borderWidth: 2,
        backgroundColor: background,
        borderColor: 'white',
        borderRadius: 6,
        indexAxis: layout === 'mobile' ? 'y' : 'x',
      },
    ],
  };

  return (
    <div className={styles.chart__root}>
      <div className={styles['chart__root-inner']}>
        <div className={styles['chart__root-container']}>
          <Bar
            data={data}
            options={layout === 'mobile' ? mobileOptions : options}
            ref={chartRef}
            width='800'
          />
        </div>
      </div>
    </div>
  );
}

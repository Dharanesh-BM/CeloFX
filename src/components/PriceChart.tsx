import React, { useEffect, useRef } from 'react';
import { createChart, ColorType, IChartApi } from 'lightweight-charts';

interface PriceChartProps {
  data: Array<{
    time: string;
    value: number;
  }>;
}

const PriceChart: React.FC<PriceChartProps> = ({ data }) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      const chart = createChart(chartContainerRef.current, {
        layout: {
          background: { type: ColorType.Solid, color: 'transparent' },
          textColor: '#d1d5db',
        },
        grid: {
          vertLines: { color: '#374151' },
          horzLines: { color: '#374151' },
        },
        width: chartContainerRef.current.clientWidth,
        height: 400,
        timeScale: {
          timeVisible: true,
          secondsVisible: true,
        },
      });

      const lineSeries = chart.addLineSeries({
        color: '#3b82f6',
        lineWidth: 2,
      });

      // Process and deduplicate data
      const processedData = data
        .map(item => ({
          time: Math.floor(new Date(item.time).getTime() / 1000) + Math.random() * 0.1,
          value: item.value,
        }))
        .sort((a, b) => a.time - b.time);

      lineSeries.setData(processedData);
      chartRef.current = chart;

      const handleResize = () => {
        if (chartContainerRef.current) {
          chart.applyOptions({
            width: chartContainerRef.current.clientWidth,
          });
        }
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        chart.remove();
      };
    }
  }, [data]);

  return <div ref={chartContainerRef} />;
};

export default PriceChart;
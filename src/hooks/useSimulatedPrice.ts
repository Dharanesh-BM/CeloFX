import { useState, useEffect, useRef } from 'react';

interface PriceData {
  price: string;
  change: string;
  trending: 'up' | 'down';
}

export const useSimulatedPrice = (basePrice: number, volatility: number = 0.001) => {
  const [priceData, setPriceData] = useState<PriceData>({
    price: basePrice.toFixed(4),
    change: '+0.00%',
    trending: 'up',
  });

  const lastPriceRef = useRef(basePrice);

  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.random() * 2 - 1;
      const change = random * volatility;
      const newPrice = lastPriceRef.current * (1 + change);
      const changePercent = ((newPrice / lastPriceRef.current - 1) * 100).toFixed(2);
      
      lastPriceRef.current = newPrice;
      
      setPriceData({
        price: newPrice.toFixed(4),
        change: `${changePercent.startsWith('-') ? '' : '+'}${changePercent}%`,
        trending: change >= 0 ? 'up' : 'down',
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [volatility]);

  return priceData;
};
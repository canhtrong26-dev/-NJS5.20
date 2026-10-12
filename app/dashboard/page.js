"use client";

import dynamic from 'next/dynamic';
import sortBy from 'lodash/sortBy';
import { useState } from 'react';

const BigDataTable = dynamic(() => import('../components/BigDataTable'));
const HeavyComponent = dynamic(
  () => import('../components/HeavyComponent'),
  { ssr: false }
);

function Dashboard() {
  const [data, setData] = useState([]);

  function handleLoadData() {
    const rawData = [];
    for (let i = 0; i < 1000000; i++) {
      rawData.push({ id: i, value: Math.random() });
    }
    setData(sortBy(rawData, 'value'));
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLoadData}>Tải dữ liệu</button>
      <BigDataTable data={data} />
      <HeavyComponent />
    </div>
  );
}

export default Dashboard;
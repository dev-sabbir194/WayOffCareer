import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Assingment = () => {




const data = [
  {
    name: 'A1',
    Score: 57,
    TotalMarks: 60,
 
  },
  {
    name: 'A2',
   Score: 53,
    TotalMarks: 60,
   
  },
  {
    name: 'A3',
   Score: 58,
    TotalMarks: 60,
    
  },
  {
    name: 'A4',
    Score: 55,
    TotalMarks: 60,
   
  },
  {
    name: 'A5',
   Score: 58,
    TotalMarks: 60,
    
  },
  {
    name: 'A6',
    Score: 31,
    TotalMarks: 60,
  
  },
  {
    name: 'A7',
    Score: 59,
    TotalMarks: 60,
    
  },
  {
    name: 'A8',
    Score: 48,
    TotalMarks: 60,
   
  },
    ];
    
  const totalScore = data.reduce((acc, current) => acc + current.Score, 0);
  const averageScore = (totalScore / data.length).toFixed(2); 

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4%' }}>
            
        <BarChart
          width={800}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
            
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="TotalMarks" fill="#fc3df6" />
          <Bar dataKey="Score" fill="#4d19c5" />
        </BarChart>
        <p style={{ fontSize: '1.5rem', marginTop: '13rem', fontWeight: '800', color: 'green' }}>Average Score: {averageScore}</p>
        </div>
    );
};

export default Assingment;
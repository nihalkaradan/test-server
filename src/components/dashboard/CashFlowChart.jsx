import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

const data = Array.from({ length: 30 }, (_, i) => ({
  date: `Apr ${i + 1}`,
  revenue: Math.floor(Math.random() * 1000000) + 3000000,
  sales: Math.floor(Math.random() * 1000000) + 3000000,
}));

export const CashFlowChart = () => (
  <div className="bg-white p-6 rounded-lg shadow">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-lg font-semibold">Cash Flow</h2>
      <select className="border rounded-md px-2 py-1">
        <option>Last 3 months</option>
      </select>
    </div>
    <AreaChart width={800} height={300} data={data}>
      <defs>
        <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
        </linearGradient>
      </defs>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Area 
        type="monotone" 
        dataKey="revenue" 
        stroke="#3b82f6" 
        fillOpacity={1} 
        fill="url(#revenue)" 
      />
      <Area 
        type="monotone" 
        dataKey="sales" 
        stroke="#60a5fa" 
        fillOpacity={1} 
        fill="url(#revenue)" 
      />
    </AreaChart>
    <div className="flex gap-4 mt-4">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
        <span>Revenue: ₹4032155</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
        <span>Sales: ₹4032155</span>
      </div>
    </div>
  </div>
);
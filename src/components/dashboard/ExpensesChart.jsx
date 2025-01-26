import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Current bill', value: 65.2 },
  { name: 'Purchase', value: 25 },
  { name: 'Employee Salary', value: 9.8 }
];

const COLORS = ['#3b82f6', '#60a5fa', '#93c5fd'];

export const ExpensesChart = () => (
  <div className="bg-white p-6 rounded-lg shadow">
    <h2 className="text-lg font-semibold mb-4">Top Expenses</h2>
    <div className="flex items-center justify-center">
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className="ml-4 space-y-2">
        {data.map((item, index) => (
          <div key={item.name} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: COLORS[index] }}></div>
            <span>{item.name}</span>
            <span className="font-semibold">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);
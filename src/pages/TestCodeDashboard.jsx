import { CashFlowChart } from '../components/dashboard/CashFlowChart';
import { ExpensesChart } from '../components/dashboard/ExpensesChart';
import PropTypes from 'prop-types';

// Define StatCard component and its PropTypes before using it
const StatCard = ({ title, value, change, isPositive }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h3 className="text-sm text-gray-500">{title}</h3>
    <p className="text-2xl font-semibold mt-2">{value}</p>
    <span className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
      {change}
    </span>
  </div>
);

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,
  isPositive: PropTypes.bool.isRequired
};

const TestCodeDashboard = () => {
  const recentLeads = [
    { date: '12/11/2025', fullName: 'Courtney Henry', phoneNumber: '(808) 555-0111', status: 'New Lead' },
    { date: '12/11/2025', fullName: 'Jerome Bell', phoneNumber: '(239) 555-0108', status: 'New Lead' },
    { date: '12/11/2025', fullName: 'Annette Black', phoneNumber: '(207) 555-0119', status: 'Non Potential' },
    { date: '12/11/2025', fullName: 'Ralph Edwards', phoneNumber: '(205) 555-0100', status: 'Non Potential' },
    { date: '12/11/2025', fullName: 'Darlene Robertson', phoneNumber: '(219) 555-0114', status: 'Potential' }
  ];

  const mostSoldItems = [
    { name: 'Window', percentage: 68 },
    { name: 'Window', percentage: 45 },
    { name: 'Window', percentage: 32 },
    { name: 'Window', percentage: 32 },
    { name: 'Other', percentage: 12 }
  ];

  return (
    <div>
      {/* Existing header and stats cards */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <input type="date" className="border rounded-md px-3 py-1" />
          <button className="bg-gray-900 text-white px-4 py-1 rounded-md">
            Download
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Total Pending Orders"
          value="85255"
          change="+20.1% from last month"
          isPositive={true}
        />
        <StatCard
          title="Total Confirmed Orders"
          value="5852"
          change="+14.8% from last month"
          isPositive={true}
        />
        <StatCard
          title="Total Production"
          value="2025"
          change="-23% from last month"
          isPositive={false}
        />
        <StatCard
          title="Total Delivered"
          value="521354"
          change="+41.5% from last month"
          isPositive={true}
        />
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="col-span-2">
          <CashFlowChart />
        </div>
        <ExpensesChart />
      </div>

      {/* Recent Leads and Most Sold Items */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Recent Leads</h2>
            <button className="text-sm text-gray-500">Columns ▼</button>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="py-2">Date</th>
                <th>Full Name</th>
                <th>Phone Number</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentLeads.map((lead, index) => (
                <tr key={index} className="border-t">
                  <td className="py-3">{lead.date}</td>
                  <td>{lead.fullName}</td>
                  <td>{lead.phoneNumber}</td>
                  <td>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      lead.status === 'New Lead' ? 'bg-blue-100 text-blue-800' :
                      lead.status === 'Non Potential' ? 'bg-orange-100 text-orange-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {lead.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Most Sold Items</h2>
          {mostSoldItems.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <span>{item.name}</span>
                <span>{item.percentage}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestCodeDashboard;

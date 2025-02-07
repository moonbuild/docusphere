import React, { useState, useEffect } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer
} from 'recharts';

const PackageTrendDashboard = () => {
  const [packages, setPackages] = useState(['pytest', 'httpx','pytest-asyncio','behave', 'robotframework', 'lettuce', 'doctest', 'nose2']);  // Modified packages list
  const [packageData, setPackageData] = useState([]);

  // Color palette with more distinct colors
  // const colors = [
  //   '#2196F3', // blue
  //   '#F44336', // red
  // ];

  const colors = [
    "#1f77b4", // Blue
    "#ff7f0e", // Orange
    "#2ca02c", // Green
    "#d62728", // Red
    "#9467bd", // Purple
    "#8c564b", // Brown
    "#e377c2", // Pink
    "#7f7f7f"  // Gray
  ];
  
  // Format large numbers to Indian format  
  const formatYAxis = (value) => {
    if (value >= 10000000) { // 1 Crore = 10,000,000
      return `${(value / 10000000).toFixed(1)} Cr`; // Format in Crores
    }
    if (value >= 100000) { // 1 Lakh = 100,000
      return `${(value / 100000).toFixed(1)} L`; // Format in Lakhs
    }
    if (value >= 1000) { // Thousand
      return `${(value / 1000).toFixed(1)} K`; // Format in Thousands
    }
    return value; // Return as is for smaller numbers
  };

  const fetchPackageData = async () => {
    const promises = packages.map(async (packageName) => {
      try {
        // Fetch data using fetch and CORS proxy
        const response = await fetch(`https://api.allorigins.win/get?url=https://pypistats.org/api/packages/${packageName}/overall`);
       
        if (!response.ok) {
          throw new Error(`Failed to fetch data for ${packageName}`);
        }

        var data = await response.json();
        data = JSON.parse(data.contents);

        // Grouping the data by month and aggregating the downloads
        const monthlyDownloads = data.data.reduce((acc, entry) => {
          const month = entry.date.slice(0, 7); // Extract month (YYYY-MM)
          acc[month] = (acc[month] || 0) + entry.downloads; // Sum the downloads for the same month
          return acc;
        }, {});

        return {
          name: packageName,
          downloads: Object.entries(monthlyDownloads).map(([month, downloads]) => ({ month, downloads })),
        };
      } catch (error) {
        console.error(`Error fetching data for ${packageName}:`, error);
        return null;
      }
    });

    const results = await Promise.all(promises);
    setPackageData(results.filter(result => result !== null)); // Filter out failed requests
  };

  useEffect(() => {
    fetchPackageData();
  }, [packages]);

  // Transforming data to merge monthly data from all packages
  const transformedData = packageData.length > 0 
    ? packageData[0].downloads.map((entry) => {
        let obj = { month: entry.month };
        packageData.forEach(pkg => {
          const downloadEntry = pkg.downloads.find(d => d.month === entry.month);
          obj[pkg.name] = downloadEntry ? downloadEntry.downloads : 0; // If no data for a month, set to 0
        });
        return obj;
      })
    : [];

  return (
    <div className="p-4 space-y-6">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Download Trend (All Time - Monthly)</h2>
        <ResponsiveContainer width="100%" height={500}>
          <LineChart data={transformedData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis 
              dataKey="month" 
              label={{ value: "Month", position: "insideBottomRight", offset: -10 }}
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              label={{ value: "Downloads", angle: -90, position: "insideLeft" }}
              tickFormatter={formatYAxis}
              tick={{ fontSize: 12 }}
            />
            <Tooltip 
              formatter={(value) => `${formatYAxis(value)} downloads`} 
              labelFormatter={(label) => `Month: ${label}`}
            />
            <Legend />
            {packages.map((pkg, index) => (
              <Line 
                key={pkg} 
                type="natural" 
                dataKey={pkg} 
                stroke={colors[index]} 
                name={pkg} 
                strokeWidth={2}
                dot={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Package Details</h2>
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-3">Package</th>
              <th className="border p-3">Total Downloads</th>
              <th className="border p-3">Links</th>
            </tr>
          </thead>
          <tbody>
            {packageData.map((pkg, index) => (
              <tr key={pkg.name} className="hover:bg-gray-50">
                <td className="border p-3">
                  <span className="flex items-center">
                    <span 
                      className="w-3 h-3 rounded-full mr-2" 
                      style={{ backgroundColor: colors[index] }}
                    ></span>
                    {pkg.name}
                  </span>
                </td>
                <td className="border p-3">{formatYAxis(pkg.downloads.reduce((sum, entry) => sum + entry.downloads, 0))}</td>
                <td className="border p-3">
                  <a href={`https://pypistats.org/packages/${pkg.name}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PyPi Stats</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PackageTrendDashboard;

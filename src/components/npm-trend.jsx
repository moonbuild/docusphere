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
  const [packages, setPackages] = useState([
    'vitest', 
    'jest',
    'playwright', 
    'cypress'
  ]);
  const [packageData, setPackageData] = useState([]);

  // Color palette with more distinct colors
  const colors = [
    '#2196F3', // blue
    '#F44336', // red
    '#4CAF50', // green
    '#9C27B0'  // purple
  ];

  // Format large numbers to indian format  
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

  let currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() - 1);
  let formattedDate = currentDate.toISOString().split('T')[0];

  const fetchPackageData = async () => {
    const promises = packages.map(async (packageName) => {
      const [downloadResponse, metadataResponse] = await Promise.all([
        fetch(`https://api.npmjs.org/downloads/range/2015-01-01:${formattedDate}/${packageName}`),
        fetch(`https://registry.npmjs.org/${packageName}`)
      ]);

      const downloadData = await downloadResponse.json();
      const metadataData = await metadataResponse.json();

      const monthlyDownloads = downloadData.downloads.reduce((acc, entry) => {
        const month = entry.day.slice(0, 7);
        acc[month] = (acc[month] || 0) + entry.downloads;
        return acc;
      }, {});

      return {
        name: packageName,
        downloads: Object.entries(monthlyDownloads).map(([month, downloads]) => ({ month, downloads })),
        createdDate: metadataData.time.created,
        lastUpdated: metadataData.time.modified,
        totalDownloads: downloadData.downloads.reduce((sum, entry) => sum + entry.downloads, 0),
        npmLink: `https://www.npmjs.com/package/${packageName}`,
        githubLink: metadataData.repository?.url || ''
      };
    });

    const results = await Promise.all(promises);
    setPackageData(results);
  };

  useEffect(() => {
    fetchPackageData();
  }, [packages]);

  const transformedData = packageData.length > 0 
    ? packageData[0].downloads.map((entry) => {
        let obj = { month: entry.month };
        packageData.forEach(pkg => {
          const downloadEntry = pkg.downloads.find(d => d.month === entry.month);
          obj[pkg.name] = downloadEntry ? downloadEntry.downloads : 0;
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
              <th className="border p-3">Created Date</th>
              <th className="border p-3">Last Updated</th>
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
                <td className="border p-3">{new Date(pkg.createdDate).toLocaleDateString()}</td>
                <td className="border p-3">{new Date(pkg.lastUpdated).toLocaleDateString()}</td>
                <td className="border p-3">{formatYAxis(pkg.totalDownloads)}</td>
                <td className="border p-3">
                  <a href={pkg.npmLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">NPM</a>
                  {pkg.githubLink && (
                    <> | <a href={pkg.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a></>
                  )}
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
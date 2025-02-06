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
    'cypress'
  ]);
  const [packageData, setPackageData] = useState([]);

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

      // Aggregate data monthly for smoother trends
      const monthlyDownloads = downloadData.downloads.reduce((acc, entry) => {
        const month = entry.day.slice(0, 7); // Extract YYYY-MM
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

  // Transform data for the line chart
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
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={transformedData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="month" label={{ value: "Month", position: "insideBottomRight", offset: -10 }} />
            <YAxis label={{ value: "Downloads", angle: -90, position: "insideLeft" }} />
            <Tooltip formatter={(value) => value.toLocaleString()} />
            <Legend />
            {packages.map((pkg, index) => (
              <Line 
                key={pkg} 
                type="natural" 
                dataKey={pkg} 
                stroke={`hsl(${index * 120}, 70%, 50%)`} 
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
            {packageData.map(pkg => (
              <tr key={pkg.name} className="hover:bg-gray-50">
                <td className="border p-3 font-medium">{pkg.name}</td>
                <td className="border p-3">{new Date(pkg.createdDate).toLocaleDateString()}</td>
                <td className="border p-3">{new Date(pkg.lastUpdated).toLocaleDateString()}</td>
                <td className="border p-3">{pkg.totalDownloads.toLocaleString()}</td>
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

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";

export default function Dashboard() {
  // Sample scan data
  const riskTrend = [
    { date: "Mon", critical: 5, high: 10, medium: 18, low: 30 },
    { date: "Tue", critical: 4, high: 8, medium: 15, low: 28 },
    { date: "Wed", critical: 6, high: 7, medium: 13, low: 25 },
    { date: "Thu", critical: 3, high: 6, medium: 10, low: 22 },
    { date: "Fri", critical: 2, high: 5, medium: 9, low: 20 },
  ];

  const vulnSeverity = [
    { name: "Critical", value: 5 },
    { name: "High", value: 12 },
    { name: "Medium", value: 20 },
    { name: "Low", value: 35 },
  ];

  const COLORS = ["#d32f2f", "#f57c00", "#fbc02d", "#388e3c"];

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <h1>📊 Cyrelix Dashboard</h1>
      <p>Live Vulnerability Insights (Demo Data)</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", marginTop: "40px" }}>
        
        {/* Line chart: vulnerability trend */}
        <div style={{ flex: "1 1 500px", minHeight: "300px" }}>
          <h3>Vulnerability Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={riskTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="critical" stroke="#d32f2f" />
              <Line type="monotone" dataKey="high" stroke="#f57c00" />
              <Line type="monotone" dataKey="medium" stroke="#fbc02d" />
              <Line type="monotone" dataKey="low" stroke="#388e3c" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie chart: vulnerability severity */}
        <div style={{ flex: "1 1 300px", minHeight: "300px" }}>
          <h3>Severity Breakdown</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={vulnSeverity}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {vulnSeverity.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import api from '../services/api';
import { Users, Briefcase, FileText, TrendingUp, Activity } from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const Dashboard = () => {
  const [stats, setStats] = useState({ users: 0, jobs: 0, apps: 0 });
  
  // Mock data for the chart
  const chartData = [
    { name: 'Mon', apps: 4 },
    { name: 'Tue', apps: 7 },
    { name: 'Wed', apps: 5 },
    { name: 'Thu', apps: 12 },
    { name: 'Fri', apps: 9 },
    { name: 'Sat', apps: 15 },
    { name: 'Sun', apps: 10 },
  ];

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const u = await api.get('/users');
        const j = await api.get('/jobs');
        const a = await api.get('/applications');
        console.log('Stats fetched:', { users: u.data.length, jobs: j.data.length, apps: a.data.length });
        setStats({ users: u.data.length, jobs: j.data.length, apps: a.data.length });
      } catch (err) {
        console.error('Failed to fetch stats:', err.response || err);
      }
    };

    fetchStats();
  }, []);

  return (
    <Layout title="Dashboard Overview">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: '#eef2ff', color: '#4f46e5' }}>
            <Users size={24} />
          </div>
          <div className="stat-info">
            <h3>Total Users</h3>
            <p>{stats.users}</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: '#ecfdf5', color: '#10b981' }}>
            <Briefcase size={24} />
          </div>
          <div className="stat-info">
            <h3>Total Jobs</h3>
            <p>{stats.jobs}</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: '#fff7ed', color: '#f59e0b' }}>
            <FileText size={24} />
          </div>
          <div className="stat-info">
            <h3>Total Applications</h3>
            <p>{stats.apps}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: '#fef2f2', color: '#ef4444' }}>
            <TrendingUp size={24} />
          </div>
          <div className="stat-info">
            <h3>Growth</h3>
            <p>+12.5%</p>
          </div>
        </div>
      </div>

      <div className="grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem', marginTop: '2rem' }}>
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>Application Activity</h3>
            <div className="badge badge-primary">Last 7 Days</div>
          </div>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorApps" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="apps" stroke="var(--primary)" strokeWidth={2} fillOpacity={1} fill="url(#colorApps)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1.5rem' }}>Recent Activity</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ 
                  width: '32px', 
                  height: '32px', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--bg-main)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Activity size={16} color="var(--text-light)" />
                </div>
                <div>
                  <p style={{ fontSize: '0.875rem', fontWeight: 500 }}>New application received</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>{i * 2} hours ago</p>
                </div>
              </div>
            ))}
          </div>
          <button className="btn btn-ghost" style={{ width: '100%', marginTop: '1.5rem', fontSize: '0.875rem' }}>
            View All Activity
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;


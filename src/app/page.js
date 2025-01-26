'use client';
import { useState } from 'react';
import CenterScreen from '@/components/CenterScreen';
import Dashboard from '@/components/Dashboard';
import Internship from '@/components/Internship';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  const [activeComponent, setActiveComponent] = useState('dashboard');  // Start with "dashboard" as default

  const renderComponent = () => {
    switch (activeComponent) {
      case 'dashboard':
        return <Dashboard />;
      case 'centerScreen':
        return <CenterScreen />;
      case 'internship':
        return <Internship />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar setActiveComponent={setActiveComponent} />
        <div className="flex-1 p-0">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}

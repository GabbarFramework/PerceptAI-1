// Section2.js
import React from 'react';
import Sidebar from '../Section2/SideBar/SideBar';
import ProjectGrid from './ProjectGrid/ProjectGrid';
import './Section2.css'
import '../../index.css'

function Section2() {
  return (
    <div className="root flex">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main content with Project Grid */}
      <div className="w-4/5 p-4">
        <ProjectGrid />
      </div>
    </div>
  );
}

export default Section2;

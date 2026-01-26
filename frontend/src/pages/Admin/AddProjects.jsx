import React, { useState } from 'react'
import ProjectsCard from '../../components/common/ProjectsCard';

const AddProjects = () => {
    const [isOpen, setIsOpen] = useState(false);
      // Form data handle karne ke liye (Optional)
        const handleSaveProject = (e) => {
        e.preventDefault();
        // Yahan API call ya data save logic aayega
        console.log("Project Saved!");
    };
    const projects = [
    {
        title: 'E-Commerce Dashboard',
        status: 'Completed',
        desc: 'A comprehensive admin dashboard for managing products, orders, and customer analytics using React and Node.js.',
    },
    {
        title: 'Portfolio Website',
        status: 'In Progress',
        desc: 'A personal responsive portfolio site to showcase my resume and projects, built with Next.js and Tailwind CSS.',
    },
    {
        title: 'Weather Forecast App',
        status: 'Completed',
        desc: 'A real-time weather application that fetches data from the OpenWeather API and displays 5-day forecasts.',
    },
    {
        title: 'Task Management System',
        status: 'Pending',
        desc: 'A collaborative tool for teams to assign, track, and complete tasks, featuring drag-and-drop Kanban boards.',
    },
    {
        title: 'Chat Application',
        status: 'In Progress',
        desc: 'A real-time messaging app supporting group chats and file sharing, utilizing Socket.io and MongoDB.',
    },
    {
        title: 'Recipe Finder',
        status: 'Completed',
        desc: 'An app that allows users to search for recipes based on ingredients they have at home.',
    },
    {
        title: 'Expense Tracker',
        status: 'Completed',
        desc: 'A mobile-friendly application to track daily expenses and visualize spending habits with charts.',
    },
    {
        title: 'Social Media Analytics Tool',
        status: 'Pending',
        desc: 'A tool designed to aggregate social media metrics from Twitter and Instagram into a single report.',
    }
];
  return (
    <div className='mt-6 w-full pr-6'>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-[#212529] text-[#ced4da] py-2 px-8 rounded-md active:bg-[#212529b6]"
      >
        Add Project
      </button>
      <h2 className="mt-20 text-2xl font-medium mb-4">Project List</h2>
      <div className='grid grid-cols-4 gap-6'>
        {projects.map((project,idx)=>(
            <ProjectsCard key={idx}  props={project}/>
        ))}
      </div>
    </div>
  )
}

export default AddProjects

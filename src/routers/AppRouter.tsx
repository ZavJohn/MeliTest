import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/NavBar';
import { SearchPages } from '../components/pages/SearchPages';

export const AppRouter = () => {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Navigate to="search" />} />
            <Route path="search" element={<SearchPages />} />
        </Routes>
    </>
  )
}

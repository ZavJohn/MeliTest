import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/NavBar';
import { HomePages } from '../components/pages/HomePages';
import { ProductPages } from '../components/pages/ProductPages';
import { SearchPages } from '../components/pages/SearchPages';

export const AppRouter = () => {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path="/" element={<HomePages />} />
            <Route path="items:searchText" element={<SearchPages />} />
            <Route path="items/:itemId" element={<ProductPages />} />
        </Routes>
    </>
  )
}

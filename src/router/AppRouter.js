import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/login" element={<LoginScreen />} />
                <Route index path="/" element={<CalendarScreen />} />
                <Route path="*" element={<CalendarScreen />} />
            </Routes>
        </BrowserRouter>
    )
}

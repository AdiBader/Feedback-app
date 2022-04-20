import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './components/pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';




function App() {

  return (
    
    <React.StrictMode>
    <FeedbackProvider>
    <Router>
        <Header text='Feedback UI' />
        <div className='container'>
          <Routes>
            <Route 
            exact path='/'
            element={
                <div>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />
                </div>
            }></Route>
          
            <Route path='/about' element={<AboutPage />} />
            </Routes>
            
            <AboutIconLink /> 
         
        </div>
    </Router>
    </FeedbackProvider>
    </React.StrictMode>
    
  );
}

export default App;

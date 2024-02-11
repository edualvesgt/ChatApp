import React, { useState } from 'react';
import AppRoutes from './routes/routes';
import SlideBar from './components/SlideBar/SlideBar';

function App() {
const [ userChat , setUserChat]= useState(null)

  return (
    <div>
      {/* Other parts of your app */}
      <AppRoutes />
      <SlideBar setUserChat={setUserChat} userChat={userChat}/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Post from './Post'

function App() {
  return (
    <div className="app">
                            {/* Header */}
      <div className='app__header'>
        <img 
          className='app__headerImage'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
          alt=''
        />
      </div>
      <Post username='Luke' caption='It is what it isss' imageUrl='https://i.pinimg.com/564x/0d/e5/0e/0de50e96bd6d65a1610be79e832a2415.jpg'/>
      <Post username='Mohlesh' caption='ma boiii'/>
      <Post username='Bevan' caption='Ayeeee'/>
      <Post username='Darshan' caption='what kind lytie'/>
     

      {/* Posts*/}
      {/* Posts */}
      {/* Posts */}

    </div>
  );
}

export default App;

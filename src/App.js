import React from 'react'
import SocialIcons from './Components/SocialIcons';
import Experience from './Components/Experience';
import ProfileCard from './Components/ProfileCard';

function App() {
  const handleDownloadCV = () => {
    const cvPath = '/path/to/RizkyRamadhan_CV.pdf';
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'RizkyRamadhan_CV.pdf';
    link.click();
  };

  return (
    <div className="App">
      <ProfileCard />
      <SocialIcons />
      <Experience />
      <button onClick={handleDownloadCV}>Download CV</button>
    </div>
  );
}

export default App;

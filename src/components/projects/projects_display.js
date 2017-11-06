import React from 'react';
import ProjectCard from './project_card';

const ProjectsDisplay = () => (
  <div className="projects-display">
    <div className="header-box">
      <img
        className="header-img"
        src="https://avatars3.githubusercontent.com/u/16454542?v=4&s=460"
        alt="github profile"
      />
      <h2 className="header-text">scottdevito</h2>
    </div>

    <div className="project-display">
      <ProjectCard
        name="Lawman Jiu Jitsu Belt List"
        img="https://s3.amazonaws.com/sdevito-web-portfolio/LMJJ+Monitor.svg"
        desc="A React site to allow LMJJ students to log in and access technique information for their current rank."
      />
      <ProjectCard
        name="Good Days"
        img="https://s3.amazonaws.com/sdevito-web-portfolio/Good+Days+Phone.svg"
        desc="A React Native app to help you reflect on what your perfect day would look like."
      />
      <ProjectCard
        name="React Web Portfolio"
        img="https://s3.amazonaws.com/sdevito-web-portfolio/RWP+Monitor.svg"
        desc="A React site to showcase my projects and share my contact information."
      />
      <ProjectCard
        name="Lawman Jiu Jitsu Teaching Assistant"
        img="https://s3.amazonaws.com/sdevito-web-portfolio/LMJJTA+Monitor.svg"
        desc="An interactive teaching assistant app for LMJJ instructors to use on the mat."
      />
    </div>

    <div className="header-box">
      <img
        className="header-img"
        src="https://avatars3.githubusercontent.com/u/31260897?v=4&s=200"
        alt="github profile"
      />
      <h2 className="header-text">Long Island Javascript Meetup</h2>
    </div>

    <div className="project-display">
      <ProjectCard
        name="Array Methods Presentation"
        img="https://s3.amazonaws.com/sdevito-web-portfolio/LIJS%20Array%20Methods%20Monitor.svg?response-content-disposition=inline&X-Amz-Security-Token=AgoGb3JpZ2luEDgaCXVzLWVhc3QtMSKAApEgdEbldob0Jy6BLGCSv1x5pNa8Usb1seEtE5y2aMIX%2BR9w8oP%2Bz3YZ2pcJ1LlOfwsLJcmSqA1RASnVcUs7wijGDjxgEDw7LOtjW8RRBYCiTS9wffEEDPjcvxgqdnfcBP5h1eMK0r4UAqmeZSVNc9c1hfjitNGekviErIaApcI1al%2BhRsEQgk2wpXpAx%2BxK0umwx9md5ANKeuKTC6VzQbG9zqQ2LdtV10dAL31%2FOTEOd7ZUe900j3Mg3egX7tnRX%2Bg%2FWGoUdJ8wI7bV6qF3WqyYS%2FiDrMcsP2O9xfnpGgixxD%2BKinSZj7AQONn3pyCx7LmnMF08xmnR5k%2F2gOhOpR8qnQIIbhAAGgw2MjkyMTAyOTU2NzQiDLdiKNQ11B0HJiGTcSr6AfdydYTMpugo%2BnqvKlCXyfLxtH5%2FcF6sCJdwWFf%2FH7qQOWVbVTe%2FqpoFkq1677NxNeBHbykZwLiM20sGahRgO5BF5e%2BBv1ugo4ec3MDyEbIQgVx8e9EBMzqV8MsSF5XTlTdrChmWHkeKDYU9TQmCGlRCjDLzcH2UCwOfJIhpVOvQqMS8gDOcB0TgyMiQk%2BzR4mkSwOErgNvcnTmpm5PE2ocQeoIc0iN9OYxoLfQcpP3nH5BzeNlpPalQIfCYT1XNCW7GKr10H1W8gIYKLfQSfV%2FILz%2B3%2BZGK%2BT8tcUnLji0QaHr%2Bbff9P2AXq%2BXc8v7dS3AZZSWbAu4MVAcwts7%2FzwU%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20171106T043833Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAJH332WXG3QOBXHPA%2F20171106%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b42dd570ec2afe9db89aafea32754d388708e30903ab6ebe2de5ab8c4ba785a1"
      />
      <ProjectCard
        name="Data Structures and Algorithms Presentation"
        img="https://s3.amazonaws.com/sdevito-web-portfolio/LIJS%20Data%20Structures%20and%20Algos%20Monitor.svg?response-content-disposition=inline&X-Amz-Security-Token=AgoGb3JpZ2luEDgaCXVzLWVhc3QtMSKAApEgdEbldob0Jy6BLGCSv1x5pNa8Usb1seEtE5y2aMIX%2BR9w8oP%2Bz3YZ2pcJ1LlOfwsLJcmSqA1RASnVcUs7wijGDjxgEDw7LOtjW8RRBYCiTS9wffEEDPjcvxgqdnfcBP5h1eMK0r4UAqmeZSVNc9c1hfjitNGekviErIaApcI1al%2BhRsEQgk2wpXpAx%2BxK0umwx9md5ANKeuKTC6VzQbG9zqQ2LdtV10dAL31%2FOTEOd7ZUe900j3Mg3egX7tnRX%2Bg%2FWGoUdJ8wI7bV6qF3WqyYS%2FiDrMcsP2O9xfnpGgixxD%2BKinSZj7AQONn3pyCx7LmnMF08xmnR5k%2F2gOhOpR8qnQIIbhAAGgw2MjkyMTAyOTU2NzQiDLdiKNQ11B0HJiGTcSr6AfdydYTMpugo%2BnqvKlCXyfLxtH5%2FcF6sCJdwWFf%2FH7qQOWVbVTe%2FqpoFkq1677NxNeBHbykZwLiM20sGahRgO5BF5e%2BBv1ugo4ec3MDyEbIQgVx8e9EBMzqV8MsSF5XTlTdrChmWHkeKDYU9TQmCGlRCjDLzcH2UCwOfJIhpVOvQqMS8gDOcB0TgyMiQk%2BzR4mkSwOErgNvcnTmpm5PE2ocQeoIc0iN9OYxoLfQcpP3nH5BzeNlpPalQIfCYT1XNCW7GKr10H1W8gIYKLfQSfV%2FILz%2B3%2BZGK%2BT8tcUnLji0QaHr%2Bbff9P2AXq%2BXc8v7dS3AZZSWbAu4MVAcwts7%2FzwU%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20171106T043842Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAJH332WXG3QOBXHPA%2F20171106%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1408cdcb8ecc17c97d030dc3738846a89f07cee88ae31e983af795e87df8f97b"
      />
    </div>

    <div className="header-box">
      <img
        className="header-img"
        src="https://avatars3.githubusercontent.com/u/31260897?v=4&s=200"
        alt="figma profile"
      />
      <h2 className="header-text">Designs</h2>
    </div>

    <div className="project-display">
      <ProjectCard img="https://s3.amazonaws.com/sdevito-web-portfolio/Mountains.svg" />
      <ProjectCard img="https://s3.amazonaws.com/sdevito-web-portfolio/Autmn+Cabin.svg" />
      <ProjectCard img="https://s3.amazonaws.com/sdevito-web-portfolio/Buttons.svg" />
      <ProjectCard img="https://s3.amazonaws.com/sdevito-web-portfolio/Books+and+Tea.svg" />
    </div>
  </div>
);

export default ProjectsDisplay;

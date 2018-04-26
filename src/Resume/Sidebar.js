import React, { PropTypes } from 'react';
import Languages from './Languages';
import SidebarList from './SidebarList';
// import SidebarHeading from './SidebarHeading';
import ContactLinks from './ContactLinks';
// import HorizontalRule from '../ui/HorizontalRule';
import Education from './Education';

const Sidebar = ({ data }) => (
  <section style={style.main}>
    <div>
      <ContactLinks data={data.links} />
    </div>
    <div>
      <Languages title="+ LANGUAGES" items={data.languages} />
    </div>
    <div>
      <SidebarList title="+ LIBRARIES" items={data.libraries} />
    </div>
    {/*
      </div>
        <SidebarList title="+ DATABASES" items={data.databases} />
      <div>
     */}
    <div>
      <SidebarList title="+ TOOLS" items={data.tools} />
    </div>
    {/*
      </div>
        <SidebarList title="+ INTERESTS" items={data.interests} separator={'<br/>'}/>
      <div>
     */}
    <div>
      {
      data.education[1]
        ? <Education
            university={data.education[0].university}
            degree={data.education[0].degree}
            cert={data.education[0].cert}
            duration={data.education[0].duration}
            courses={data.education[0].courses}
            // activities={data.education[0].activities}
            bootcamp={data.education[1].bootcamp}
            program={data.education[1].program}
            endDate={data.education[1].endDate}
          />
        : <Education
            university={data.education[0].university}
            degree={data.education[0].degree}
            cert={data.education[0].cert}
            duration={data.education[0].duration}
            courses={data.education[0].courses}
          />
      }

    </div>
  </section>
);

const style = {
  main: {
    flex: '1 0 auto',
    width: '34%',
    backgroundColor: 'rgba(118,136,169,0.125)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '0 1.2rem 1.2rem 1.2rem',
    color: 'rgb(21, 44, 85)',
  },
};

Sidebar.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Sidebar;



import { Helmet } from 'react-helmet-async';
import PopularClass from '../components/Home/PopularClass';
import PopularInstructor from '../components/Home/PopularInstructor';
import Show from '../components/Home/Show';
import MySlider from '../components/Home/Slider';
import Content1 from '../components/Home/Content1';
import Content2 from '../components/Home/Content2';
import Contact from '../components/Home/Contact';

const HomeLayout = () => {
  return (
    <div className="dark:bg-slate-700">
      <Helmet>
                <title>Sporty | Home</title>
            </Helmet>
      <div className="relative max-h-screen " >
        <MySlider />
       
      </div>

      <div className="mt-36" >
        <PopularClass />
      </div>
      <PopularInstructor></PopularInstructor>
     <Content1></Content1>
     <Content2></Content2>
     <Contact></Contact>
    </div>
  );
};

export default HomeLayout;

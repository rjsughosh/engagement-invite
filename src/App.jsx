
import './App.css'
import bgBottom from './assets/bg-bottom.png';
import bgTop from './assets/bg-top.png';
import icon1 from './assets/icon1.png';

import './index.css';

function App() {
  return (
    <div className="app-wrapper">
      <div className='image-wrapper'>
        <div className='top-image'>
          <img src={bgTop} alt="Background" className="bg-img" />
        </div>
        <div className="middle-image"></div>
        <div className='bottom-image'>
          <img src={bgBottom} alt="Background" className="bg-img" />
        </div>
      </div>

      <div className="content">
        <div className='heading'>
          We are delighted to invite you along<br /> with your family <br />to grace the auspicious occasion of the <br />Engagement Ceremony <br />of
        </div>

        <div className='name1'>
          SUGHOSH JAHAGIRDAR
        </div>

        <div className='icon1'>
          <img src={icon1} alt="Icon" className='icon1img' />
        </div>

        <div className='name2'>
          SHRUSTHI UMARJI
        </div>

        <div className='on'>
          ON
        </div>

        <div className='date'>
          1 June 2025
        </div>

        <div className='time'>
          10:30 AM Onwards
        </div>


        <div className='addtocalendar'>
          <a
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Shrusthi+%26+Sughosh+Engagement&dates=20250601T050000Z/20250601T070000Z&details=Engagement+Ceremony&location=Shri+Abhayahasta+Ganapathi+Hall"
            target="_blank"
            rel="noopener noreferrer"
            className="invite-link"
          >
            Add to Google Calendar
          </a>
        </div>


        <div className='address'>
          Venue: Shri Abhayahasta Ganapathi Hall<br />
          7, 1st Main Rd, Gnanabharathi, Stage 1, <br />
          Kengeri Satellite Town, <br />
          Bengaluru, Karnataka 560060
        </div>



        <div className='maplink'>
          <a
            href="https://www.google.com/maps?q=Shri+Abhayahasta+Ganapathi+Hall,+7,+1st+Main+Rd,+Gnanabharathi,+Stage+1,+Kengeri+Satellite+Town,+Bengaluru,+560060"
            target="_blank"
            rel="noopener noreferrer"
            className="invite-link"
          >
            Open in Maps
          </a>
        </div>

      </div>
    </div>
  );
}

export default App

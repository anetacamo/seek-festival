
import TimeLineItem from './components/TimeLineItem'
import timelineData from './timeline.json'
import aboutData from './about.json'
import './App.css'

function App() {

  return (
    <>
      <nav>
        <div className='logo'>logo</div>
        <div className='menu-items'>
          <div>about</div>
          <div>timeline</div>
        </div>
      </nav>

      <section>
        <h1>{aboutData.title}</h1>
        <p>{aboutData.description}</p>
      </section>
      <section>
        <h2>Timeline</h2>
        <p>description of timeline</p>
        <TimeLineItem text={timelineData[0].description} reverse={timelineData[0].reverse} />
        <TimeLineItem text={timelineData[1].description} reverse={timelineData[1].reverse} />
        <TimeLineItem text={timelineData[2].description} reverse={timelineData[2].reverse} />
      </section>


    </>
  )
}

export default App

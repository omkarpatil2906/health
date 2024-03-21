import React from 'react'

function ExpertPanel() {

    const slidesData = [
        {
          link: '/patient_stories/diagnosis-with-covid-19/',
          image: '/static/1-3f020b31dcc4641bdc3bbb90d648370e.png',
          date: '21 July',
          title: 'Diagnosis with Covid-19',
          description: 'This 75 year old, female patient was diagnosed with Covid-19, and admitted in this multi-special...'
        },
        {
          link: '/patient_stories/diagnosed-with-acute-demyelinating-encephalopathy-and-seizure-disorders/',
          image: '/static/2-c4239c848b88bb4e333d11dc6aeb7fd6.png',
          date: '07 June',
          title: 'Diagnosed with Acute Demyelinating Encephalopathy and Seizure Disorders',
          description: 'This 32 year old, female patient diagnosed with acute demyelinating encephalopathy and seizure d...'
        },
        // Add other slide data here
      ];
  return (
    <div className="slick-list">
    <div className="slick-track" style={{ width: '100%', opacity: 1, transform: 'translate3d(-4032px, 0px, 0px)' }}>
      {slidesData.map((slide, index) => (
        <div key={index} className="slick-slide" style={{ outline: 'none', width: '448px' }}>
          <div className="case-card" style={{ width: '100%', display: 'inline-block' }}>
            <a href={slide.link}>
              <div className="gatsby-image-wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
                <img src={slide.image} alt="" loading="lazy" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', opacity: 1, transition: 'none 0s ease 0s' }} />
              </div>
              <label>{slide.date}</label>
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default ExpertPanel

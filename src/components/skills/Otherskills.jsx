import React from 'react'

const Otherskills = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Additional Abilities</h3>
    <div className="skills__box">
      <div className="skills__group">
        <div className="skills__data">
        <i class='bx bxs-video'></i>
          <div>
            <h3 className="skills__name">Video Editing</h3>
            <span className="skills__level">Advanced</span>
          </div>
        </div>

        <div className="skills__data">
          <i class='bx bxs-palette'></i>
          <div>
            <h3 className="skills__name">Graphics Designing</h3>
            <span className="skills__level">Intermediate</span>
          </div>
        </div>

        <div className="skills__data">
         <i class='bx bxl-youtube'></i>
          <div>
            <h3 className="skills__name">Thumbnail Desginer</h3>
            <span className="skills__level">Advanced</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Otherskills
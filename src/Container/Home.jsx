import React from 'react'
import styles, { layout } from '../styles'



const Home = () => {
  return (
    <section >
        <div className="relative">
            <img src="img/bg-svg.svg" alt=""  className='w-full  '/>
            <div className='absolute bottom-[3rem] left-[1rem] tablet:bottom-[6rem] tablet:left-[2rem] laptop:bottom-[7.5rem] laptop:left-[3rem] 2xl:bottom-[15rem] 2xl:left-[4rem]'>
                <h1 className={`${styles.scriptHeading1} text-skin-white`}>Jd and Alma </h1>
                <p className={`${styles.ovoParagraph} text-skin-white`}>The best things in life are meant to be shared. Come and witness our wedding</p>
            <div>
            
          </div>

        </div>
        </div>

    </section>
  )
}

export default Home
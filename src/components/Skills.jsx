import React from 'react'
import { skills } from '../utils'

const Skills = () => {

  return (
    <section id='skills' className='py-10 relative'>
      <div className='mt-10 text-teal-700 text-center'>
        <h3 className='text-3xl md:text-4xl font-semibold text-green-500'>Minhas <span className='text-teal-700'>Habilidades</span></h3>
        <p className='text-teal-700 mt-3 text-lg'>Meus conhecimentos</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills.map((skill, i) => (
            <div key={i} className='border-2 group border-teal-100 relative min-w-[10rem] max-w-[16rem] bg-gray-100 p-10 rounded-xl hover:shadow-lg'>
              <div style={{
                background: `conic-gradient(rgb(15, 118, 110) ${skill.count}%, rgb(153, 246, 228) ${skill.count}%)`
              }} className='w-32 h-32 flex items-center justify-center rounded-full'>
                <div className='text-6xl w-28 h-28 bg-gray-100 rounded-full flex items-center justify-center group-hover:text-teal-500'>
                  <ion-icon name={skill.logo}></ion-icon>
                </div>
              </div>
              <p className='text-lg mt-3'>{skill.name}</p>
              <p className='text-xl mt-3'>{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
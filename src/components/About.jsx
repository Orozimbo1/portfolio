import React from 'react'

import avatar from '../assets/images/avatar-2.png'

import curriculo from '../assets/Curriculo_MatheusOrozimbo_Oficial.pdf'

const About = () => {
  const info = [
    {text: 'Anos de experiência', count: '02'},
    {text: 'Projetos completos', count: '07'}
  ]

  return (
    <section id='about' className='py-10 text-white'>
      <div className='text-center mt-8'>
        <h3 className='text-4xl font-semibold text-green-500'>
          Sobre <span className='text-teal-700'>mim</span>
        </h3>
        <p className='text-teal-700 my-3 text-lg'>Introdução</p>
        <div className='flex lg:flex-row flex-col-reverse items-center lg:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
          <div className='p-2'>
            <div className='text-teal-800 my-3'>
              <p className='text-justify leading-7 w-full lg:w-10/12'>
                Olá! Sou um desenvolvedor full stack especializado em criar experiências digitais envolventes. No front-end, trabalho com React.js, Next.js, Vite.js, HTML, CSS e SASS para produzir interfaces intuitivas e visualmente impactantes. No back-end, tenho experiência em Node.js, Flask e Django, e trabalho com bancos de dados como PostgreSQL, MongoDB, MySQL e Firebase para garantir soluções robustas e escaláveis. Vamos transformar suas ideias em realidade digital juntos!
              </p>
            </div>
            <div className='flex items-center mt-10 gap-7'>
              {
                  info.map((content, i) => (     
                    <div key={i}>
                      <h3 className='lg:text-4xl text-2xl font-semibold text-green-500'>{content.count}<span>+</span></h3>
                      <span className='text-teal-800 lg:text-base text-xs'>{content.text}</span>
                    </div>
                  ))
              }
            </div>
            <a href={curriculo} download>
              <button className='btn-primary mt-7'>
                Download CV
              </button>
            </a>
          </div>
          <div className='flex-1 lg:mt-0 mt-6 flex justify-center items-center'>
              <div className='lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg'>
                <img src={avatar} alt="" className='w-full object-cover bg-teal-200 rounded-xl' />
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
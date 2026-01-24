import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/projects/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


const Projects = () => {

  const projects = [{
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
  },{
    image1: 'https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479',
    image2: 'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c'
  }
]


  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })

  return (
    <div>
      <div className='lg:p-4 p-2 mb-[5vh]'>
      <div className=' pt-[45vh]'>
        <h2 className='font-[font2] lg:text-[9.5vw] text-7xl uppercase'>Projets</h2>
      </div>
      <div className='-lg:mt-20 lol'>
        {projects.map(function (elem, idx) {
          return <div key={idx} className='hero w-full lg:h-[850px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
        })}

      </div>
    </div>
    <div className='h-[500px] w-full bg-black  '>
     <div className='justify-between mt-1.5 flex '>
       <div className='mt-2 flex '>
        <button className='text-white lg:text-[5.5vw] text-5xl lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-20 flex items-center  px-3 pt-2 lg:px-7 border-white rounded-full uppercase'>FB</button>
        <button className='text-white lg:text-[5.5vw] text-5xl lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-20 flex items-center  px-3 pt-2 lg:px-7 border-white rounded-full uppercase'>IG</button>
        <button className='text-white lg:text-[5.5vw] text-5xl lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-20 flex items-center  px-3 pt-2 lg:px-7 border-white rounded-full uppercase'>IN</button>
        <button className='text-white lg:text-[5.5vw] text-5xl lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-20 flex items-center  px-3 pt-2 lg:px-7 border-white rounded-full uppercase'>BE</button>
      </div>
      <div mt-2>
        <button className='text-white lg:text-[5.5vw] text-5xl lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-20 flex items-center  px-3 pt-2 lg:px-7 border-white rounded-full uppercase'>CONTACT</button>
      </div>


     </div>
    

    </div>
    </div>
  )
}

export default Projects
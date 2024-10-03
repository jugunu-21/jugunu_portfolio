import Image from 'next/image';
import AppButton from './AppButton';
import Link from 'next/link';

const AppProject = ({ project,id }) => (
  <div id={id} className="bg-white border border-light-gray rounded-lg px-4 pt-6 text-center ">
    <div className="mb-3">
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <h3 className="text-black text-base lg:text-xl font-semibold transition duration-300 hover:text-primary ">
          {project.name}
        </h3>
      </a>
      <div className='p-2 flex flex-wrap gap-2'>
  {project.stack.map((tech, index) => (
    <div key={index} className="rounded-md bg-black opacity-90 py-0.5 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm">
    {tech}
  </div>
    // <div
    //   key={index}
    //   className="inline-flex items-center p border border-light-gray bg-light-gray bg-opacity-50 whitespace-normal"
    //   style={{
    //     maxWidth: 'calc(100% - 1rem)',
    //     overflowWrap: 'break-word',
    //     hyphens: 'auto'
    //   }}
    // >
    //   {tech}
    // </div>
  ))}
</div>
    </div>
    <div className="shadow-xl">
      <Image
        src={project.image}
        alt={project.name}
        layout="responsive"
        width={100}
        height={60}
        quality={10}
        placeholder="blur"
        blurDataURL={project.image}
        className="transition duration-300 transform translate-y-5 hover:translate-y-0 "
      />  </div>
  
      <div className='flex  justify-end items-center py-6 space-x-1'>
       
        <hr className='border-b-2 w-16 mt-4'/>
        <div className=" flex justify-between space-x-4">
        <Link  href={project.url} target="blank" className=' flex transition duration-300 transform translate-y-2 hover:translate-y-0 hover:text-primary' > <div className='text-sm font-semibold px-1'>Live Project</div><Image  height={18} width={18} src="External Link Icon.svg"></Image></Link>
        <Link   target="blank"  className="transition duration-300 transform translate-y-2 hover:translate-y-0 " href={project.giturl} > <Image   height={20} width={20} src="skills/skill-github.svg"></Image></Link>
        </div></div>
      {project.name === "Urstyle" &&
        <div className='flex '><div className='text-sm'>Doc Track</div><Link  href="https://docs.google.com/document/d/1wMP4RwivDJPyXU9inwbKTFNp9SsKX8zw75BW7EV1cPE/edit#heading=h.9c16xpraei2c">Tracker</Link></div>
      }
    </div>

);
export default AppProject; 

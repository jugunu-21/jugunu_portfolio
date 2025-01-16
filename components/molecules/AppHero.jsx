import DATA from '../../data/user.json';
import AppContainer from '../atomics/AppContainer';
import AppButton from '../atomics/AppButton';
import Image from 'next/image';
const AppHero = () => (
  <header className="bg-hero-pattern bg-no-repeat bg-center px-3">
    <AppContainer>
      <div className=' flex  items-center  justify-center '>
        <div className="h-screen flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
          <Image className='lg:hidden  mx-auto  rounded-lg' src="/profile-img.png" height="200" width="200"></Image>
          <span className="text-xs md:text-sm text-black flex items-center">
            <span>Hi, I&apos;m</span>
            <span className="block w-6 lg:w-11 h-1 bg-primary ml-2 rounded-lg" />
          </span>
          <h1 className="text-5xl lg:text-8xl font-bold text-black">
            {DATA.name}
          </h1>
          <h2 className="text-xl lg:text-4xl font-bold text-primary mt-2">
            [{DATA.status}]
          </h2>
          <p className="text-xs lg:text-base text-gray max-w-md tracking-widest mt-2 lg:mt-3 md:ml-1">
            {DATA.description}
          </p>
          <div className='space-x-2 md:flex'>
            <AppButton className="bg-primary" title="View   Projects" href="/#project" />
            {/* <AppButton className="bg-gray" title="View Resume" href="/resume.pdf" /> */}
          </div>
        </div>
        <Image className='hidden lg:block rounded-lg  aspect-square h-full w-full p-14 mr-0' src="/profile-img.png" height={200} width={200} alt="Developer profile picture"></Image>
      </div>
    </AppContainer>
  </header>
);

export default AppHero;

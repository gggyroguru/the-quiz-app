import { useState } from 'react';

const Navbar = ({ profile,setProfilePage, allCategory, category, setCategory, setTypes, goHome}) => {

  const [toggle, setToggle] = useState(false)

  const active = () => {
    setToggle(toggle => !toggle)
  }

  const remove = () => {
    setToggle(false)
  }

  const categories = (x, y) => {
    setCategory(x)
    setTypes(y)
    remove()
  }
  
  return (
    <>
      {/* <div className={'w-[90%] m-auto text-white fixed top-6 left-0 right-0 bg-indigo-600 rounded-3xl'}>
        <div className={'w-[90%] h-12 m-auto flex flex-wrap items-center justify-between'}>
            
              <div className={'cursor-pointer'} onClick={goHome}>
                Coding Guru
              </div>
              
        
            <div className={'cursor-pointer'} onClick={() => setProfilePage(true)}>
              <img className={'w-6 h-6'} src={profile?.avatar} />
            </div>
        </div>
      </div> */}
      <div className={`w-[90%] m-auto mt-6 text-white fixed top-0 left-0 right-0 bg-blue-600 transition-all duration-300 overflow-hidden rounded-xl`}>
          <div className={'w-[90%] m-auto flex relative flex-wrap items-center justify-between'}>
              <div className={'w-full h-12 flex items-center justify-between relative z-50 bg-blue-600 lg:w-fit lg:bg-transparent'}>
                <div className={'cursor-pointer'} onClick={goHome}>
                  Coding Guru
                </div>

                <div className={'cursor-pointer absolute right-0 lg:hidden'} onClick={() => setProfilePage(true)}>
                  <img className={'w-6 h-6'} src={profile?.avatar} />
                </div>
                
                  {/* <div className={'w-6 flex flex-col items-end gap-[.35rem] cursor-pointer lg:hidden'} onClick={active}>
                      <div className={`w-full h-[.1rem] bg-white transition-all duration-300 ${toggle ? 'translate-y-[.45rem] -rotate-45' : ''}`}></div>
                      <div className={`h-[.1rem] bg-white transition-all duration-300 ${toggle ? 'w-0 opacity-0' : 'w-1/2'}`}></div>
                      <div className={`h-[.1rem] bg-white transition-all duration-300 ${toggle ? 'w-full -translate-y-[.45rem] rotate-45' : 'w-3/4'}`}></div>
                  </div> */}
              </div>
              <div className={` w-full h-28 ${toggle?'mt-0':'-mt-28'} flex transition-all duration-300 bg-blue-600 relative lg:w-fit lg:h-fit lg:mt-0 lg:bg-transparent`}>
                  <div className={'w-full flex flex-col justify-center gap-4 relative lg:w-fit lg:flex-row lg:gap-12'}>
                    
        

                    {/* <div className={'w-fit cursor-pointer'} onClick={() => categories('coding','html')}>Coding</div>

                    <div className={'w-fit cursor-pointer'} onClick={() => categories('general','kid')}>General</div> */}

                    <div className={'cursor-pointer hidden lg:flex'} onClick={() => setProfilePage(true)}>
                      <img className={'w-6 h-6'} src={profile?.avatar} />
                    </div>


                  </div>
              </div>
          </div>
      </div>
    </>
  );
};

export default Navbar;
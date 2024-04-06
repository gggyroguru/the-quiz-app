import { useEffect, useState } from "react";

const Profile = ({ profile, setProfile, date, setDate, profilePage, setProfilePage, deleteAccount, editAccount }) => {
  
  const today = new Date().getDate();

  useEffect(() => {
    if (today!==date) {
        if (profile?.coin < 1) {
          setProfile(pre => ({...pre, coin:1}))
          setDate(today)
        }
    }
  }, [])

  // useEffect(() => {
  //   setDate(16)
  // }, [])


  

  

  return (
    <>
      <div className={`w-screen h-screen ${profilePage ? 'flex' : 'hidden'} items-center justify-center bg-stone-900 fixed z-50`}>
        <div className={'w-80 h-fit  p-6 rounded-3xl bg-indigo-600'}>
          <div className={'flex justify-between gap-6'}>
            <div className={'w-full flex justify-between'}>
              <div className='text-white flex gap-3'>
                <img className="w-8 h-8 self-center" src={profile?.avatar} />
                <span className="self-center">{profile?.name}</span>
              </div>
              <div className={'cursor-pointer self-center'} onClick={editAccount}><img className={'w-6 h-6'} src={'https://cdn-icons-png.flaticon.com/128/10747/10747218.png'} /></div>
            </div>

            <div className={'w-7 flex flex-col items-end gap-[.8rem] cursor-pointer'} onClick={() => setProfilePage(false)}>
              <div className={`w-full h-[.1rem] bg-white translate-y-[.45rem] -rotate-45 rounded-full`}></div>
              <div className={`h-[.1rem] bg-white w-full -translate-y-[.45rem] rotate-45 rounded-full`}></div>
            </div>
          </div>

          <div className={'mt-6 flex items-center justify-between'}>
            <div className={'flex gap-3 '}>
              <img className={'w-6 h-6 '} src={'https://cdn-icons-png.flaticon.com/128/9729/9729309.png'} />
              <span className='text-white'>{profile?.coin}</span>
            </div>

            <div className='text-white'>
              <button className='rounded-lg px-3 py-1.5 bg-indigo-900' onClick={() => setProfile(pre => ({...pre, coin:pre.coin+1}))}>Add Coin</button>
            </div>
          </div>
          <div className='mt-6'>
            <div className='text-white'>Score</div>
            <div className='mt-3 h-64 text-white p-3 rounded-lg bg-indigo-500 overflow-auto'>
              <div className='flex flex-col gap-3'>
                {profile?.score?.length > 0 ?
                  profile?.score?.map((result, key) => {

                    return (<div key={key} className={' flex items-center px-3 py-1.5 rounded-lg justify-between  bg-indigo-800 uppercase'}><span>{result?.score}</span><span className={'text-xs font-light self-end '}>{result.date}</span></div>
                    )
                  })

                  :
                  <span className='opacity-90'>Not Played Yet</span>
                }


              </div>
            </div>
          </div>
          <div className='mt-6 text-end'>
            <button className='text-white px-3 py-1.5 rounded-lg bg-rose-600' onClick={deleteAccount}>Detele Account</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile
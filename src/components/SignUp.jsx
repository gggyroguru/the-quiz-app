import { useEffect, useState } from 'react'



const SignUp = ({ profile, avatars, user, setUser, register, save, setEdit }) => {


  const [avatar, setAvatar] = useState([]);

  useEffect(() => {
    let array = []

    for (let i = 1; array.length < avatars.length; i++) {
      let random = Math.abs(Math.round(Math.random() * (avatars.length - 1)))
      array.push(avatars[random])
      let uniqe = [...new Set(array)]
      array = uniqe
    }
    setAvatar(array)
  }, [])

  return (
    <>
      <div className={'w-screen h-screen flex items-center justify-center bg-stone-900 fixed z-[100]'}>

        <div className={'w-80 h-fit p-6 rounded-2xl bg-blue-600 relative'}>

          {profile !== null && <div className={'w-6 flex flex-col items-end gap-[.35rem] cursor-pointer absolute top-4 right-3'} onClick={() => setEdit(false)}>
            <div className={`w-full h-[.1rem] bg-white transition-all duration-300 translate-y-[.45rem] -rotate-45`}></div>
            <div className={`h-[.1rem] bg-white transition-all duration-300 w-0 opacity-0`}></div>
            <div className={`h-[.1rem] bg-white transition-all duration-300 w-full -translate-y-[.45rem] rotate-45`}></div>
          </div>}
          <div className='text-white text-center text-xl font-medium'>{profile === null ? 'Sign Up' : 'Edit'}</div>

          <div className='mt-6 text-white'> Choose Avatar
          </div>

          <div className='mt-3 h-44 p-3 rounded-md flex flex-wrap gap-6 justify-between overflow-auto bg-blue-500'>
            {
              avatar?.map(avatar =>
                <span className='relative' key={avatar.id} onClick={() => setUser((pre) => ({ ...pre, avatar: avatar.src }))}>
                  <img className={`w-16 h-16 ${user.avatar === avatar.src ? 'opacity-100' : 'opacity-50'} cursor-pointer`} src={avatar.src} />
                  {avatar.category === 'premium' &&
                    <span className={`absolute top-0 right-0`}><img className='w-5 h-5' src='https://cdn-icons-png.flaticon.com/128/4907/4907289.png' /></span>
                  }
                </span>
              )
            }

          </div>

          <div className='mt-6 text-white flex flex-col gap-3'>
            <span>Name</span>
            <input className='w-full px-3 py-1.5 outline-0 rounded-md bg-blue-500' type='text' value={user.name} onChange={(e) => setUser((pre) => ({ ...pre, name: e.target.value }))} />
            <span>Password</span>
            <input className='w-full px-3 py-1.5 outline-0 rounded-md bg-blue-500' type='text' value={user.password} onChange={(e) => setUser((pre) => ({ ...pre, password: e.target.value }))} />

          </div>

          <div className='mt-6 text-end'>
            {
              profile === null ? <button className='text-white px-3 py-1.5 rounded-md bg-blue-900' onClick={register}>Register</button> : <button className='text-white px-3 py-1.5 rounded-md bg-blue-900' onClick={save}>Save</button>
            }
          </div>

        </div>
      </div>
    </>
  )
}

export default SignUp
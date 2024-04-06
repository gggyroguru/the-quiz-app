const Modal = ({modal, setModal, coin, setCoin}) => {
  
  return (
    <>
      <div className={`w-screen h-screen ${modal? 'flex' : 'hidden'} justify-center bg-stone-900 fixed transition-all z-50`}>
        <div className={'w-80 h-fit mt-28 p-6 rounded-xl bg-blue-600'}>
          <div className='flex justify-between'>
          <div>
            <div className={'flex items-center gap-3 justify-center'}>
            <div className={'w-6 h-6'}><img src={'https://pngimg.com/uploads/coin/coin_PNG36871.png'}/></div><div className='text-white'>{coin}</div>
          </div>
          </div>
          <div>
            <div className={'w-6 flex flex-col items-end gap-[.35rem] cursor-pointer'} onClick={() => setModal(false)}>
                            <div className={`w-full h-[.1rem] bg-white transition-all duration-300 ${modal ? 'translate-y-[.45rem] -rotate-45' : ''}`}></div>
                            <div className={`h-[.1rem] bg-white transition-all duration-300 ${modal ? 'w-0 opacity-0' : 'w-1/2'}`}></div>
                            <div className={`h-[.1rem] bg-white transition-all duration-300 ${modal ? 'w-full -translate-y-[.45rem] rotate-45' : 'w-3/4'}`}></div>
                        </div>
          </div>
            </div>
          <div className='mt-6'>
            <div className='text-white'>
          <button className='rounded-md px-3 py-1.5 bg-indigo-900' onClick={() => setCoin(pre => pre+1)}>Add Coin</button>
              </div>
        </div>
        </div>
        
      </div>
    </>
  )
}

export default Modal
const PopUp = ({popUpText}) => {
  return (
    <>
      {/* { popUpText ==='Correct' || popUpText ==='wrong' ?  
      <div className={`px-3 py-1.5 text-white rounded-lg ${popUpText === 'Correct'? 'bg-emerald-600' : 'bg-rose-600'} fixed top-6 right-6 z-50`}>
        {popUpText === 'Correct' ? 'Correct' : 'wrong'}
      </div> : 
        <div>{ popUpText &&
        <div className={`px-3 py-1.5 text-white rounded-lg bg-orange-500 fixed top-6 right-6 z-50`}>
        {popUpText}
      </div>}
          </div>
      } */}

      { popUpText && 
      <div className={`px-3 py-1.5 text-white transition-all capitalize rounded-lg ${popUpText==='Correct' && 'bg-emerald-600'} ${popUpText==='wrong' && 'bg-rose-600'} ${popUpText && 'bg-amber-600'} fixed top-6 right-6 z-[1000]`}>
        {popUpText==='Correct'&&'Correct'}
        {popUpText==='wrong'&&'wrong'}
        {popUpText!='Correct' && popUpText!='wrong' && popUpText}
      </div>
      }
      
    </>
  )
}

export default PopUp
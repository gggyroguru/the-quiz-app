import { useEffect, useState } from 'react'

const Score = ({ quiz, wrongAnswer, playAgain, types, goHome, setProfile }) => {

  // const [score, setScore] = useState([])

  // (new Date().getDate(),new Date().getMonth()+1,new Date().getFullYear(),new Date().getHours(), new Date().getMinutes())

  useEffect(() => {

    const scorePercent = (quiz?.length-wrongAnswer?.length)/quiz?.length*(100)
    const currentDate = `${new Date().getHours()}:${new Date().getMinutes()} / ${new Date().getDate()}-${new Date().getMonth()+1}-${new Date().getFullYear()}`
    
    const pScore = {
      score: `${scorePercent}% (${types})`,
      date: currentDate
    }
    setProfile(pre => ({...pre, score:[pScore, ...pre.score]}))
  },[])

  

  return (
    <>
      <div className={'flex flex-col items-center justify-center'}>
        <div className={'w-80 p-6 flex items-center justify-center rounded-xl bg-blue-600 md:w-96'}>
          <div className='w-full'>
            <div className={' px-3 py-1.5 rounded-lg bg-blue-900'}>
              <div className={'text-white text-center text-2xl'}>
                Congratulations!
              </div>
              <div className={'mt-3 text-white text-center'}>
               <span className='text-2xl'>{(quiz?.length-wrongAnswer?.length)/quiz?.length*(100)}% Score</span>
              </div>


            </div>
            <div className='mt-6 max-h-64 px-3 py-1.5 rounded-lg bg-blue-500 overflow-auto'>
              {wrongAnswer.length > 0 && <div className='text-white text-lg'>
                Wrong Answer(Question)
              </div>}
              <div className={'mt-5'}>
                <div>
                  {
                    wrongAnswer.length > 0 && wrongAnswer.map((question, index) => (
                      <div key={index} className={'mt-3'}>
                        <div className={'text-white px-3 py-1.5 rounded-lg bg-blue-900'}>{question?.question}</div>
                        <div className={'text-white px-3 py-1.5 mt-3 rounded-lg bg-blue-600'}>{question?.correct}</div>
                      </div>
                    ))
                  }
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className={'mt-6 w-fit m-auto flex gap-3'}>
        <div className={'text-white px-3 py-1.5 rounded-lg bg-blue-600 cursor-pointer'} onClick={playAgain}>Play Again</div>
          <div className={'text-white px-3 py-1.5 rounded-lg bg-blue-600 cursor-pointer'} onClick={goHome}>Go Home</div>
          
        </div>
      </div>
    </>
  )
}

export default Score
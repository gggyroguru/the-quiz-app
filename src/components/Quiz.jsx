import { useEffect, useState } from 'react'

const Quiz = ({profile, quiz, question, select, playerAnswer, submit, time, timer, showHint, setHintUse, setModal, setWrongAnswer, setTimer, setPopUpText, setQuestion, setScore, setStart, setSelect }) => {


  useEffect(() => {
    const countDown = setTimeout(() => {
      setTimer(pre => pre > 0 ? pre - 1 : 0)
      if (timer < 1) {
        setTimer(time)
          if (select.length > 0) {
            setSelect('')
            setTimer(time)
            if (question + 1 === quiz.length) {

              setStart(false)
              setScore(true)
              setHintUse(true)

              if (select === quiz[question].correct) {
                setPopUpText('Correct')
              }

              else {
                const wrong = quiz.filter((q) => q.id === quiz[question].id)
                setWrongAnswer(pre => [...pre, ...wrong])
                setPopUpText('wrong')
              }

            }

            else {

              setQuestion(pre => pre + 1)
              setHintUse(true)

              if (select === quiz[question].correct) {
                setPopUpText('Correct')
              }

              else {
                const wrong = quiz.filter((q) => q.id === quiz[question].id)
                setWrongAnswer(pre => [...pre, ...wrong])
                setPopUpText('wrong')
              }

            }

          }
        else {
          if (question + 1 === quiz.length) {

            setStart(false)
            setScore(true)

            if (select === quiz[question].correct) {
              setPopUpText('Correct')
            }

            else {
              const wrong = quiz.filter((q) => q.id === quiz[question].id)
              setWrongAnswer(pre => [...pre, ...wrong])
              setPopUpText('wrong')
            }

          }

          else {

            setQuestion(pre => pre + 1)
            setHintUse(true)

            if (select === quiz[question].correct) {
              setPopUpText('Correct')
            }

            else {
              const wrong = quiz.filter((q) => q.id === quiz[question].id)
              setWrongAnswer(pre => [...pre, ...wrong])
              setPopUpText('wrong')
            }

          }
        }
        
      }
    }, 1000)

    return () => clearTimeout(countDown)
    
  }, [timer])


  return (
    <>
      <div className='w-fit h-fit'>
      <div className='w-full h-6 rounded-full border-solid border-4 relative -top-20 border-blue-950 mt-28'>
        <div className='h-full rounded-full bg-blue-600' style={{width: `${(timer/time)*100}%`}}></div>
      </div>
      <div className={'w-80 p-6 flex items-center justify-center rounded-3xl relative bg-blue-600 md:w-96'}>
        <div className={'px-3 py-1.5 w-30 h-10 absolute flex rounded-full items-center gap-3 justify-center left-0 -top-[3.5rem] bg-blue-600'}>
          <div className={'w-6 h-6'}><img src={'https://cdn-icons-png.flaticon.com/128/9729/9729309.png'} /></div><div className='text-white'>{profile?.coin}</div>
        </div>
        <div className={'px-3 py-1.5 absolute flex gap-3 right-0 -top-16'}>
          <div className={'w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 cursor-pointer'} onClick={showHint}><img className={'w-7'} src={'https://cdn-icons-png.flaticon.com/128/1582/1582439.png'} />
          </div>
          <div className={'w-10 h-10 rounded-full flex items-center justify-center bg-blue-600'}><div className={'w-8 h-8 rounded-full flex items-center justify-center bg-blue-900 text-white text-lg'}>{timer}</div></div>
        </div>

        <div className={'absolute -top-8'}>
          <div className={'w-16 h-16 flex items-center justify-center rounded-full  bg-blue-600'}>
            <div className={'w-12 h-12 flex items-center justify-center rounded-full bg-blue-900 '}>
              <div className={'text-white text-lg'}>{question + 1}<span className='text-xs'>/{quiz?.length}</span></div>
            </div>
          </div>
        </div>
        <div className={'w-full'}>
          <div className={'mt-6 px-3 py-1.5 rounded-lg bg-blue-900'}>
            <div className={'text-lg text-white'}>{quiz[question]?.question}</div>
          </div>
          <div className={'mt-9 w-full flex flex-col gap-3'}>
            {
              quiz[question]?.options?.map((option, key) => (
                <div key={key} className={`px-3 py-1.5 rounded-lg ${select === option ? 'bg-blue-800' : 'bg-blue-500'} cursor-pointer`} onClick={() => playerAnswer(option)}>
                  <div className={'text-white'}>
                    {option}
                  </div>
                </div>
              ))
            }
          </div>
          <div className={'mt-9 text-end'}>
            <button className={'px-3 py-1.5 text-white rounded-lg bg-stone-900'} onClick={submit}>Submit</button>
          </div>
        </div>
      </div>
</div>
    </>
  )
}

export default Quiz
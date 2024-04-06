import './App.css'
import { useEffect, useState } from 'react'
import avatars from './api/avatars'
import quizzes from './api/quizzes'
import Quiz from './components/Quiz'
import SignUp from './components/SignUp'
import Score from './components/Score'
import Profile from './components/Profile'
import PopUp from './components/PopUp'
import Navbar from './components/Navbar'
import Category from './Category'

// localStorage.clear()

// localStorage.removeItem('result')

// localStorage.setItem('coin', 999999)

// const courses = Object.keys(quizzes[0]['coding'][0])


const getProfile = () => {

  const storage = localStorage.getItem('profile')
  if (storage) {
    return JSON.parse(storage)
  }
  else {
    return null
  }
}

const getDate = () => {

  const date = localStorage.getItem('date')
  if (date) {
    return JSON.parse(date)
  }
  else {
    return new Date().getDate()
  }
}


const App = () => {
  const [user, setUser] = useState({
    avatar: '',
    name: '',
    password: '',
    coin: 1,
    score: []
  })
  const [date, setDate] = useState(getDate());
  const [profile, setProfile] = useState(getProfile());
  const [edit, setEdit] = useState(false);
  const [profilePage, setProfilePage] = useState(false);
  const [start, setStart] = useState(false);
  const [allCategory, setAllCategory] = useState(Object.keys(quizzes[0]));
  const [category, setCategory] = useState('coding');
  const [types, setTypes] = useState('html');
  const [quiz, setquiz] = useState(quizzes[0][category][0][types]);
  const [courses, setCourses] = useState(Object.keys(quizzes[0][category][0]));
  const [question, setQuestion] = useState(0);
  const [select, setSelect] = useState('');
  const [wrongAnswer, setWrongAnswer] = useState([]);
  const [popUpText, setPopUpText] = useState('');
  const [time, setTime] = useState(30);
  const [timer, setTimer] = useState(time);
  const [hint, setHint] = useState('');
  const [hintUse, setHintUse] = useState(true);
  const [score, setScore] = useState(false);
  const [modal, setModal] = useState(false);
  

  // console.log(allCategory)

  // localStorage.clear()


  // console.log(profile)

  useEffect(() => {
    localStorage.setItem('profile', JSON.stringify(profile))
  }, [profile])

  useEffect(() => {
    localStorage.setItem('date', JSON.stringify(date))
  }, [date])

  useEffect(() => {
  setquiz(quizzes[0][category][0][types])
  setCourses(Object.keys(quizzes[0][category][0]))
  }, [category, types]);

  // useEffect(() => {
  //   if (profile.name==='Hinata Hayuga') {
  //     setProfile(pre => ({ ...pre, coin: pre.coin + 999999 }))
  //   }
  // },[])

  // useEffect(() => {
  //   const array = avatars.filter(item=> 
  //   item.category === 'premium'
  //   ).filter(item => item.src === user.avatar)
  //   console.log(array)
    
  //   if(array[0]?.src === user?.avatar) {
  //     console.log('premium')
  //     if (profile?.coin>0) {
  //       // setProfile(pre => ({ ...pre, coin: pre.coin - 1 }))
  //       console.log('paid')
  //     }
  //   }
  //   else {
  //     console.log('free')
  //   }
  // },[user])

  // console.log(user)

  const register = () => {

    const array = avatars.filter(item=> 
    item.category === 'premium'
    ).filter(item => item.src === user.avatar)

    if (user.avatar.length < 1) {
      setPopUpText('Avatar Not Selected')
    }

    else if (user.name.length < 3) {
      setPopUpText('name must 3 letter')
    }

    else if (user.password.length < 6) {
      setPopUpText('Password must 6 character')
    }
     else if (array[0]?.src === user?.avatar) {
        if (profile?.coin>0) {
          setProfile(pre => ({ ...pre, coin: pre.coin - 1 }))
        }
        else {
          setPopUpText("You Don't Have Coin")
        }
      }
    else {
      setProfile(user)
      setPopUpText('Successfully Registered')
    }

    // if(array[0]?.src === user?.avatar) {
    // // console.log('premium')
    // if (profile?.coin>0) {
    //   // setProfile(pre => ({ ...pre, coin: pre.coin - 1 }))
    // }
    // else {
    //   setPopUpText("You Don't Have Coin")
    // }

  }
  


  const selectCourse = (setCourse) => {
    setStart(true)
    setTypes(setCourse)
    setTimer(time)
  }

  const showHint = () => {
    if (hintUse) {
      if (profile?.coin > 0) {
        setHintUse(false)
        setProfile(pre => ({ ...pre, coin: pre.coin - 1 }))
        setSelect(quiz[question].correct)
      }
      else {
        setPopUpText("You Don't Have Coin")
      }
    }
    else {
      setPopUpText('Already Used')
    }
  }

  const playerAnswer = (option) => {
    setSelect(option)
  }

  // console.log((quiz?.length)-(wrongAnswer?.length))

  // const pScore = ((quiz?.length)-(wrongAnswer?.length))

  const submit = () => {

    if (select.length > 0) {
      setSelect('')
      setTimer(time)
    
      if (question + 1 === quiz?.length) {
        setHintUse(true)
        setStart(false)
        setScore(true)

        // const date = new Date()
        // const playerScore = {
        //   score: pScore,
        //   date: date
        // }
        // setResult(pre => [playerScore , ...pre])

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
      setPopUpText('Select Answer')
    }

    if (hint) {
      setHint('')
    }

  }


  useEffect(() => {
    let array = []
    for (let i = 1; array.length < courses.length; i++) {
      let random = Math.abs(Math.round(Math.random() * courses.length-1))
      array.push(courses[random])
      let uniqe = [...new Set(array)]
      array = uniqe
    }
    setCourses(array)
  }, [category])


  const playAgain = () => {
    let array = []
    for (let i = 1; array.length < 5; i++) {
      let random = Math.abs(Math.round(Math.random() * (quizzes[0][category][0][types]?.length - 1)))
      array.push(quizzes[0][category][0][types][random])
      let uniqe = [...new Set(array)]
      array = uniqe
    }
    setquiz(array)
    setQuestion(0)
    setTimer(time)
    setWrongAnswer([])
    setScore(false)
    setStart(true)
    setSelect('')
  }

  const goHome = () => {
    // let arr = []
    // for (let i = 1; arr.length < courses.length; i++) {
    //   let random = Math.abs(Math.round(Math.random() * courses.length-1))
    //   arr.push(courses[random])
    //   let uniqe = [...new Set(arr)]
    //   arr = uniqe
    // }
    // setCourses(arr)
    let array = []
    for (let i = 1; array.length < 5; i++) {
      let random = Math.abs(Math.round(Math.random() * (quizzes[0][category][0][types]?.length - 1)))
      array.push(quizzes[0][category][0][types][random])
      let uniqe = [...new Set(array)]
      array = uniqe
    }
    setquiz(array)
    setStart(false)
    setScore(false)
    setQuestion(0)
    setWrongAnswer([])
    setSelect('')
  }
  

  useEffect(() => {
    let array = []
    for (let i = 1; array.length < 5; i++) {
      let random = Math.abs(Math.round(Math.random() * (quizzes[0][category][0][types]?.length - 1)))
      array.push(quizzes[0][category][0][types][random])
      let uniqe = [...new Set(array)]
      array = uniqe
    }
    setquiz(array)
  }, [types])

  // console.log(courses)
  

  
  
  const editAccount = () => {
    setEdit(true)
    setUser(profile)
  }

  const save = () => {
    const array = avatars.filter(item=> 
      item.category === 'premium'
      ).filter(item => item.src === user.avatar)
    if (user.avatar.length < 1) {
      setPopUpText('Avatar Not Selected')
    }

    else if (user.name.length < 3) {
      setPopUpText('name must 3 letter')
    }

    else if (user.password.length < 6) {
      setPopUpText('Password must 6 character')
    }

      else if (user.avatar === profile?.avatar) {
        setPopUpText('avatar alreary selected')
      }

      else if (array[0]?.src === user?.avatar) {
        if (profile?.coin > 0) {
          setProfile(pre => ({ ...user, coin: pre.coin - 1 }))
          setEdit(false)
          setPopUpText('Successfully Edit')
        }
        else {
          setPopUpText("You Don't Have Coin")
        }
      }

    else {
      setProfile(user)
      setEdit(false)
      setPopUpText('Successfully Edit')
    }
  }
  
const deleteAccount = () => {
  setProfilePage(false)
  setProfile(null)
  setUser({
           avatar: '',
           name: '',
           password: '',
           coin: 1,
           score: []
         })
}

  useEffect(() => {
    if (popUpText) {
      setTimeout(() => {
        setPopUpText('')
      }, 600)
    }
  }, [popUpText])

  // 50-50 option
  // useEffect(() => {
  //   let option = []
    
  // },[quiz, question])

  return (
    <>
    
    
      {profile === null &&
        <SignUp profile={profile} avatars={avatars} user={user} setUser={setUser} register={register} />
      }

      {edit &&
        <SignUp profile={profile} avatars={avatars} user={user} setUser={setUser} register={register} save={save} setEdit={setEdit} />
      }

      <div className={'w-screen h-screen flex items-center justify-center'}>

        {/* <div className={'absolute top-6 right-6'} onClick={() => setProfilePage(true)}>
          <div className={'w-fit rounded-full cursor-pointer'}><img className={'w-10 h-10'} src={profile?.avatar} /></div>
        </div> */}

        <Profile profile={profile} setProfile={setProfile} date={date} setDate={setDate} profilePage={profilePage} setProfilePage={setProfilePage}  deleteAccount={deleteAccount} editAccount={editAccount} />

        <PopUp popUpText={popUpText} hint={hint} />

        {start ?
          <>
            <Quiz profile={profile} quiz={quiz} question={question} select={select} playerAnswer={playerAnswer} submit={submit} time={time} timer={timer} showHint={showHint} setHintUse={setHintUse} setModal={setModal} setWrongAnswer={setWrongAnswer} setTimer={setTimer} setPopUpText={setPopUpText} setQuestion={setQuestion} setScore={setScore} setStart={setStart} setSelect={setSelect} />
          </> :
          <>
            {!start && !score &&
              <>
                {/* <div className='text-white w-fit m-auto absolute left-0 top-16 right-0 text-2xl -z-50'>The Quiz App</div> */}
                <Navbar profile={profile} setProfilePage={setProfilePage} allCategory={allCategory} category={category} setCategory={setCategory} setTypes={setTypes} goHome={goHome} />
                <div className='w-fit m-auto flex flex-wrap gap-y-6'>
                  {
                    courses?.map((course, key) => (
                      <div key={key} className={'w-1/2 md:w-1/3 flex justify-center'}>
                      <button  className={'w-36 px-3 py-1.5 text-white uppercase rounded-lg bg-blue-600'}
                        onClick={() => selectCourse(course)}>{course}</button>
                        </div>
                    ))
                  }

                </div>

              </>
            }
          </>
        }
        {
          score && <Score quiz={quiz} wrongAnswer={wrongAnswer} playAgain={playAgain} types={types} goHome={goHome} setProfile={setProfile} />
        }
      </div>
    </>
  )
}

export default App
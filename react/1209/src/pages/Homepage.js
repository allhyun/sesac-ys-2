import SignUp from "../components/SignUp"
import PracHook from "../components/PracHook"


export default function Homepage () {
  return (
    <>
     <div> 여기는 메인 페이지 </div>
     {<SignUp />}

     <hr/>

     {<PracHook/>}
    </>
  )
}
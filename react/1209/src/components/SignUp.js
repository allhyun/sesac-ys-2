import{useForm} from "react-hook-form"


export default function SignUp () {
  const {register,
  handleSubmit,
  // watch,
formState:{errors}
} =useForm()

const onVaild = (data) =>{
  console.log("성공",data)
}


const genderRegister = {required:'성별은 필수값'}

// 실패한 이유를 보여준다..?
const onInvaild= (err) =>{
  console.log("실패",err)
}

// onsole.log(watch("ID"))
  return(
    <>
    <div>react hook form 테스트</div>
    {/* handleSubmit(onVaild, onInvaild) */}
    {/* onVaild : 폼을 정상적으로 제출할 수 잇는 상태일 때 ,실행시킬 함수 */}
    {/* onInvaild:(선택값)폼을 제출할 수 없을 때 실행시킬 함수 */}
    {/* register("ID") =>{name=ID} 객체를 리턴하는 함수 */}
    {/* ...register("ID") => 객체를 전개해서 리턴한다 */}
    
       
    <form onSubmit={handleSubmit(onVaild,onInvaild)}>
      
      <input type="text" 
      placeholder="아이디" 
      {...register("ID",{
        required: "아이디는 필수값입니다",
      })}/>
      {/* { errors.ID && message} */}

      {/* 에러.아이디. 메세지를 띄우겠다.. */}
      {errors.ID?.message}


      <br></br>

     
      <input type="text"
       placeholder="이름" 
       {...register("username",{
        required: "이름은 필수값입니다",
        minLength:{
          value:2, //최소값지정
          message:"이름은 두글자 이상 입력해야합니다."
        }
      })}/>
      {errors.username?.message}

      <br/>
      <input type="text" 
      placeholder="이메일" 
      {...register("email",{
        required: "이메일 필수값입니다",

        validate:
          // 콜백합수
          (v)=> v.includes("gmail.com")||"gmail로만 가입이 가능합니다"
        


        // pattern:{
        // value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        //   // value:2, //최소값지정
        //   // message:"이름은 두글자 이상 입력해야합니다."
        // }
        }
      )}/>
       {errors.email?.message}

       <br />
       <label htmlFor="gender-women">

       <input type="radio" name="gender" value="여자"
       {...genderRegister} />{""}여자
       </label>

       <label htmlFor="gender-men">
       <input type="radio" name="gender" value="남자" 
       {...genderRegister}/>{""}남자
       </label>
       {errors.geneder?.message}

       <br />

       <select {...register("option",{required:"옵션을 필수값"})}>
        <option value="">옵셥</option>
        <option value="option-1">옵셥1</option>

        <option value="option-2">옵셥2</option>

        <option value="option-3">옵셥3</option>

       </select>
       {errors.option?.message}



      <button type="submit">회원가입</button>
    </form>
    
    </>
  )
}
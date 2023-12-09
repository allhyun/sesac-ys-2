import{useForm} from "react-hook-form"

export default function PracHook(){

  const {register,
    handleSubmit,
    formState:{errors}
  }=useForm()



  const onVaild = (data) =>{
    console.log("성공",data)
  }
  const onInvaild= (err) =>{
    console.log("실패",err)
  }
  return(
    <>
    <form onSubmit={handleSubmit(onVaild,onInvaild)}>
      <input type="text"
      placeholder="아름" 
      {...register("NAME",{
        required: "이름은 필수값입니다",
      })}/>
      {errors.NAME?.message}
      <input type="number"
      placeholder="나이"
      {...register("AGE",{
        required: "나이는 0이상 입력 가능 ",
        validate:
          // 콜백합수
          (v)=> v>0||"나이는 0이상 입력 가능"
      })}
    
      />
        {errors.AGE?.message}



      <button type="submit">제출</button>

    </form>
    </>
  )
}
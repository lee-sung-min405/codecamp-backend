 function createTokenOfPhone(PhoneNumber){ //qqq : 매개변수(Parameter)
    
    //1. 휴대폰 번호 유효성 검사 (10 ~ 11자리)
    if(PhoneNumber.length < 10 || PhoneNumber.length > 11){ // => early-exit 패턴 : 먼저 에러를 찾아서 일찍 종료
        console.log("에러 : 핸드폰 번호를 제대로 입력해주세요")

        return
    }

    //2. 핸드폰 토큰 6자리 만들기
    const Token = String(Math.floor(Math.random() *1000000)).padStart(6, "0")
    console.log(Token)

    //3. 핸드폰 번호에 토큰 전송하기
    console.log(PhoneNumber + " 번호로 인증번호 " + Token + "(을)를 전송합니다.")
 }

 createTokenOfPhone("01012345678") //01012345678: 인자(argument)
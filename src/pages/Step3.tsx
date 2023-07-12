import { useForm } from "react-hook-form";
import * as yup from "yup";
import * as S from "./Step";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormData {
  id: string;
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const schema = yup.object().shape({
  id: yup
    .string()
    .matches(/^[a-z0-9]+$/i, "아아디는 영문,숫자만 가능합니다")
    .required("아이디를 입력해주세요"),
  name: yup
    .string()
    .max(8, "이름은 8글자 이내로만 가능합니다")
    .required("이름을 입력해주세요"),
  email: yup
    .string()
    .email("유효하지 않은 이메일 주소입니다")
    .required("이메일을 입력해주세요"),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/,
      "비밀번호는 영문,숫자,특수문자를 포함한 8~16자리만 가능합니다"
    )
    .required("비밀번호를 입력해주세요"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다")
    .required("비밀번호 확인을 입력해주세요"),
});

const Step3 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver<FormData>(schema),
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    alert(`회원가입이 완료되었습니다`);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.Wrapper>
        <S.Title>회원 가입</S.Title>
        <S.InputWrapper>
          <S.InputBox {...register("id")} placeholder="ID" />
          <S.Error>{errors.id?.message}</S.Error>
          <S.InputBox {...register("name")} placeholder="Name" />
          <S.Error>{errors.name?.message}</S.Error>
          <S.InputBox {...register("email")} placeholder="Email" />
          <S.Error>{errors.email?.message}</S.Error>
          <S.InputBox {...register("password")} placeholder="Password" />
          <S.Error>{errors.password?.message}</S.Error>
          <S.InputBox
            {...register("passwordConfirm")}
            placeholder="Confirm Password"
          />
          <S.Error>{errors.passwordConfirm?.message}</S.Error>
          <S.InputBox type="submit" />
        </S.InputWrapper>
      </S.Wrapper>
    </form>
  );
};

export default Step3;

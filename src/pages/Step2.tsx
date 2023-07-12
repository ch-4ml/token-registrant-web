import React from 'react';
import * as S from "./Step";
import { useForm } from "react-hook-form";

interface FormData {
  id: string;
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const Step2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    alert(`회원가입이 완료되었습니다`);
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.Wrapper>
        <S.Title>회원 가입</S.Title>
        <S.InputWrapper>
          <S.InputBox
            {...register("id", {
              required: "아이디를 입력해주세요",
              pattern: {
                value: /^[a-z0-9]+$/i,
                message: "아이디는 영문, 숫자만 가능합니다",
              },
            })}
            placeholder="ID"
          />
          {errors.id && <S.Error>{errors.id.message}</S.Error>}
          <S.InputBox
            {...register("name", {
              required: "이름을 입력해주세요",
              maxLength: {
                value: 8,
                message: "이름은 8글자 이내로 입력해주세요",
              },
            })}
            placeholder="Name"
          />
          {errors.name && <S.Error>{errors.name.message}</S.Error>}
          <S.InputBox
            {...register("email", {
              required: "이메일을 입력해주세요",
              pattern: {
                value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                message: "유효한 이메일 주소를 입력해주세요",
              },
            })}
            placeholder="Email"
          />
          {errors.email && <S.Error>{errors.email.message}</S.Error>}
          <S.InputBox
            {...register("password", {
              required: "비밀번호를 입력해주세요",
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/,
                message:
                  "비밀번호는 영문, 숫자, 특수문자를 포함한 8~16자리로 입력해주세요",
              },
            })}
            placeholder="Password"
          />
          {errors.password && <S.Error>{errors.password.message}</S.Error>}
          <S.InputBox
            {...register("passwordConfirm", {
              required: "비밀번호 확인을 입력해주세요",
              validate: (value) =>
                value === watch("password") || "비밀번호가 일치하지 않습니다",
            })}
            placeholder="Confirm Password"
          />
          {errors.passwordConfirm &&
            <S.Error>{errors.passwordConfirm.message}</S.Error>}
          <S.InputBox type="submit" />
        </S.InputWrapper>
      </S.Wrapper>
    </form>
  );
};

export default Step2;

import React , { useState } from 'react';
import * as S from './Step'

const Step1 = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = () => {
    const data = { id, name, email, password, passwordConfirm };
    if (id && name && email && password && passwordConfirm) {
      alert(`회원가입이 완료되었습니다`);
    }
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <S.Wrapper>
        <S.Title>회원 가입</S.Title>
        <S.InputWrapper>
          <S.InputBox
            value={id}
            onChange={e => setId(e.target.value)}
            placeholder="ID"
          />
          <S.InputBox
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
          />
          <S.InputBox
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
          />
          <S.InputBox
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
          />
          <S.InputBox
            value={passwordConfirm}
            onChange={e => setPasswordConfirm(e.target.value)}
            placeholder="Confirm Password"
          />
          <S.InputBox type="button" onClick={handleSubmit} value="제출"/>
        </S.InputWrapper>
      </S.Wrapper>
    </form>
  );
};

export default Step1;

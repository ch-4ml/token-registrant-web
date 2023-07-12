import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  text-align: center;
  background: linear-gradient(to bottom right, red, orange, yellow, green, blue, indigo, violet);
  background-image: url('https://pbs.twimg.com/media/E3sXKUHVoAEpnUU.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const Title = styled.div`
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 20px;
`
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f3bfd2;
`
export const InputBox = styled.input`
  width: 450px;
  height: 60px;
  padding: 15px;
  margin: 10px;
  font-size: 1.3rem;
`

export const Error = styled.div`
  font-color: red;
`
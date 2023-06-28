import {useState} from 'react'
import {
  PasswordValidatorContainer,
  Heading,
  PasswordInput,
  ErrorMsg,
  MainContainer,
  Text,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangePassword = event => setPassword(event.target.value)
  const showErrorMessage = password.length < 8
  return (
    <MainContainer>
      <PasswordValidatorContainer>
        <Heading>Password Validator</Heading>
        <Text>Check how strong and secure is your password</Text>
        <PasswordInput
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        {showErrorMessage && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </PasswordValidatorContainer>
    </MainContainer>
  )
}
export default PasswordValidator

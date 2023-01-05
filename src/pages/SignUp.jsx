import Input from '../reusables/inputFields/Inputs';

function SignUp() {
  return (
    <form>
      <Input label='Email' type='email' />
      <Input label='Password' type='password' />
      <Input label='Confirm Password' type='password' />

      <button type='submit'>Sign Up</button>
    </form>
  );
}

export default SignUp;

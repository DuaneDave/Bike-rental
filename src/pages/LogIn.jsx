import Input from "../reusables/inputFields/Inputs";

function LogIn() {
  return (
    <form>
      <Input label="Email" />
      <Input label="Password" />

      <button type="submit">Log In</button>
    </form>
  );
}

import React from "react";

function AppInp() {
  return(
    <>
      <main>
        <RegisterForm />
      </main>
      <ConfirmDialog />
    </>
  )
}

function RegisterForm() {
  return(
    <>
      <h1>Please register</h1>

      <form onSubmit={() => console.log('Done')}>

        <AppInput
          name='email'
          label='email'
          type='email'
          onChange={console.log}
          required={true}
        />

        <AppInput
          name='pwd'
          label='password'
          type='email'
          onChange={console.log}
          required={false}
        />

        <button>Submit</button>

      </form>
    </>
  )
}

function ConfirmDialog([title, children, confirm, cancel, open]) {
  return(
    <dialog open={open}>
      <div>{title}</div>
      <div>{children}</div>
      <div>
        <button type="button" onClick={confirm}>
          Confirm
        </button>
        <button type="button" onClick={cancel}>
          Cancel
        </button>
      </div>
    </dialog>
  )
}

function AppInput([label, name, ...rest]) {
  return(
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} {...rest} />
    </div>
  )
}

export default AppInp
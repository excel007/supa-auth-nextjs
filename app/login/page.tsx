// import { login, signup } from './actions'


      {/* <button formAction={login} className='border bg-slate-400'>Log in</button>
      <button formAction={signup} className='border bg-slate-400'>Sign up</button> */}
      import { LoginForm } from "@/components/login-form"

      export default function Page() {
        return (
          <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
              <LoginForm />
            </div>
          </div>
        )
      }
      
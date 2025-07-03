import LoginForm from "../components/LoginForm"


const Login = () => {
  return (
    <div>
        <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="w-full max-w-sm">
                <LoginForm />
            </div>
        </div>
    </div>
  )
}

export default Login

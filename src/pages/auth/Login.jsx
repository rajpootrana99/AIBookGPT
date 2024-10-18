import { ROUTES } from "src/routes"
import { Button } from "src/components/Button"
import { Input } from "src/components/Input"
import { SocialButton } from "src/components/SocialButton"


const Login = () => {
  return (
    <div className=" w-screen h-screen flex justify-center items-center">
      <div className="w-[28em]">
        <div>
          <h2 className="text-[36px] font-bold mb-[10px] text-indigo-950">Sign In</h2>
          <p className="font-medium text-gray-500 text-base mb-[36px]">Enter your email and password to sign in!</p>
        </div>
        <SocialButton text="Sign in with Google"/>
        <div className="flex justify-center items-center mb-[25px] gap-3">
          <div className="h-[1px] w-full bg-gray-200"></div>
          <p className="font-medium text-gray-500">or</p>
          <div className="h-[1px] w-full bg-gray-200"></div>
        </div>
        <form>
          <p className="mb-[8px] font-medium text-indigo-950">Email<span className="text-indigo-600">*</span></p>
          <Input type="email" placeholder="Enter your email address" name="email" />

          <p className="mb-[8px] font-medium text-indigo-950">Password<span className="text-indigo-600">*</span></p>
          <Input type="password" placeholder="Enter your password" name="password" />

          <p className="text-end mb-[24px]"><a href={ROUTES.FORGOT} className="text-base font-semibold text-indigo-600">Forgot password?</a></p>

          <Button type="submit" value="Sign In" />

          <p className="text-indigo-950 font-medium text-sm text-center">Not registered yet? <a href={ROUTES.SIGNUP} className="text-base font-semibold text-indigo-600">Create an Account</a></p>
        </form>
      </div>
    </div>
  )
}



export default Login;
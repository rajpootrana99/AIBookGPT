import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { SocialButton } from "../../components/SocialButton"

export const Register = () => {
  return (
    <div className=" w-screen h-screen flex justify-center items-center">
      <div className="w-[28em]">
        <div>
          <h2 className="text-[36px] font-bold mb-[10px] text-indigo-950">Create account</h2>
          <p className="font-medium text-gray-500 text-base mb-[36px]">Enter your credentials to create your account!</p>
        </div>
        <SocialButton text="Continue with Google"/>
        <div className="flex justify-center items-center mb-[25px] gap-3">
          <div className="h-[1px] w-full bg-gray-200"></div>
          <p className="font-medium text-gray-500">or</p>
          <div className="h-[1px] w-full bg-gray-200"></div>
        </div>
        <form>
          <p className="mb-[8px] font-medium text-indigo-950">Name<span className="text-indigo-600">*</span></p>
          <Input type="text" placeholder="Enter your name" name="name" />

          <p className="mb-[8px] font-medium text-indigo-950">Email<span className="text-indigo-600">*</span></p>
          <Input type="email" placeholder="Enter your email address" name="email" />

          <p className="mb-[8px] font-medium text-indigo-950">Password<span className="text-indigo-600">*</span></p>
          <Input type="password" placeholder="Enter your password" name="password" />

          <p className="mb-[8px] font-medium text-indigo-950">Confirm Password<span className="text-indigo-600">*</span></p>
          <Input type="password" placeholder="Enter your password again" name="confirmPassword" />

          <Button type="submit" value="Create your Account" />

          <p className="text-indigo-950 font-medium text-sm text-center">Already have an account? <a href="" className="text-base font-semibold text-indigo-600">Login here</a></p>
        </form>
      </div>
    </div>
  )
}


import { ROUTES } from "src/routes";
import { Button } from "src/components/Button"
import { Input } from "src/components/Input"

const ForgotPassword = () => {
  return (
    <div className=" w-screen h-screen flex justify-center items-center">
      <div className="w-[28em]">
        <div>
          <h2 className="text-[24px] font-bold mb-[10px] text-indigo-950">Remember Your Password?</h2>
          <p className="font-medium text-gray-500 text-base mb-[36px]">One time password reset link will be sent to this email</p>
        </div>

        <form>
          <p className="mb-[8px] font-medium text-indigo-950">Email<span className="text-indigo-600">*</span></p>
          <Input type="email" placeholder="Enter your email address" name="email" />

          <Button type="submit" value="Get Password Reset Link" />

          <p className="text-indigo-950 font-medium text-sm text-center">Already know credentials? <a href={ROUTES.LOGIN} className="text-base font-semibold text-indigo-600">Login here</a></p>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword;

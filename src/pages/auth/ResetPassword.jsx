import { Button } from "src/components/Button"
import { Input } from "src/components/Input"

const ResetPassword = () => {
  return (
    <div className=" w-screen h-screen flex justify-center items-center">
      <div className="w-[28em]">
        <div>
          <h2 className="text-[36px] font-bold mb-[10px] text-indigo-950">Reset Password</h2>
          <p className="font-medium text-gray-500 text-base mb-[36px]">Please enter your password and confirm password</p>
        </div>

        <form>
          <p className="mb-[8px] font-medium text-indigo-950">New Password<span className="text-indigo-600">*</span></p>
          <Input type="password" placeholder="Enter your new password" name="password" />

          <p className="mb-[8px] font-medium text-indigo-950">Confirm Password<span className="text-indigo-600">*</span></p>
          <Input type="password" placeholder="Enter your password again" name="confirmPassword" />

          <Button type="submit" value="Change Password" />
        </form>
      </div>
    </div>
  )
}


export default ResetPassword;


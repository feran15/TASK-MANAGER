import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
const Nav = () => {
  const navigate = useNavigate()
  const gotoLoginPage = () => {
    navigate('/Login')
  }
  return (
    <div className="flex justify-between items-center bg-[white] p-1 relative">
      <div className="basis-[20%]">
      <h1 className="text-dark font-bold text-2xl ml-3">
          <Link to={"/"}>E-Task Management</Link>
        </h1>
      </div>
      <div className="basis-[50%] flex justify-center gap-10 items-center">
        <div className="text-xl font-medium text-black-300 ">
          <p>
            <Link to={"/AddTask"}>Add Task</Link>
          </p>
        </div>
        <div className="text-xl font-medium text-black-300 cursor-pointer">
          <p>See All Tasks</p>
        </div>
        <div className="text-xl font-medium text-black-300 cursor-pointer">
          <p>Account</p>
        </div>
      </div>
      <div className="basis-[20%] flex justify-center gap-5 items-center">
        <div className="bg-white border-2 px-4 py-2 border-[white] rounded-lg ">
          <p className="text-[white] bg-black px-4 border-[none] rounded-md py-1 font-bold text-xl">
            <button onClick={gotoLoginPage}>Login</button>
          </p>
        </div>
        <div className="bg-[red] border-2 px-4 py-2 border-[none] rounded-lg hover:bg-white">
          <p className="text-white font-bold text-xl hover:text-[red]">
            <Link to={"/register"}>Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nav;

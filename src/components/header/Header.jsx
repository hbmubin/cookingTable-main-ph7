import Profile from "../../assets/Frame 5.png";
const Header = () => {
  return (
    <header>
      <div className="md:navbar bg-base-100 justify-between py-6">
        <div className="">
          <a className="btn btn-ghost text-3xl">Calorie Crafters</a>
        </div>
        <div className="md:w-auto md:h-auto h-0 w-0 overflow-hidden">
          <ul className="flex gap-5 text-stone-600">
            <li>Home</li>
            <li>Recipes</li>
            <li>About</li>
            <li>Search</li>
          </ul>
        </div>
        <div className="md:flex-none md:flex-row flex flex-col-reverse gap-2 items-center">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-40 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img src={Profile} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

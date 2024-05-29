import { Button } from "../ui/button";

export function Navbar() {
  return (
    <nav className="px-6 py-2 bg-slate-400 flex justify-between items-center w-full ">
      <img src="" alt="logo of the page" />

      <ul className="flex gap-4">
        <img src="/bell.svg" alt="The icon of a bell" width={30} height={30} />
        <div className="flex items-center">
          <div className="bg-red-400 w-10 h-10"></div>
          <p>Name of the user</p>
        </div>
        <Button>Sign out</Button>
      </ul>
    </nav>
  );
}

export default function MyClass() {
  return (
    <div className="flex flex-row items-stretch h-screen bg-blue-500 w-full">
      {/* left-sidebar */}
      <div className="w-1/6 h-full bg-red-400"></div>

      {/* main content */}
      <div className="w-full">

        {/* topbar */}
        <div className="py-2 bg-violet-500 flex-row">
          <i className="bi bi-list"></i>
          <h1>My Class</h1>
        </div>

      </div>
    </div>
  )
}

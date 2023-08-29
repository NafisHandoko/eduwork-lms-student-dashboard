import { useState } from "react"

export default function ListClass() {
    const [isExpand, setIsExpand] = useState(true)

    return (
      <div className="flex flex-row items-stretch h-screen bg-blue-500 w-full">
        {/* left-sidebar */}
        <div className={`h-full bg-red-400 transition-all ${isExpand?'w-1/6':'w-[5%]'}`}></div>
  
        {/* main content */}
        <div className="w-full">
  
          {/* topbar */}
          <div className="py-3 px-4 bg-violet-500 flex flex-row gap-4">
            <button onClick={() => setIsExpand(!isExpand)}><i className="bi bi-list text-2xl font-bold"></i></button>
            <h1 className="text-2xl font-bold">List Community</h1>
          </div>

        </div>
      </div>
    )
  }
  
import { FC, ReactNode, useState } from "react";

export default function Pagination({items, view}: {items: any[], view: FC}) {
  // Define the number of items to display per page
  const itemsPerPage = 5;

  // Define the current page (e.g., as a state variable in your React component)
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the starting index of the current page
  const startIndex = (currentPage - 1) * itemsPerPage;

  // Slice the array to get the items for the current page
  const itemsOnCurrentPage = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      {
        view(itemsOnCurrentPage)
      }
      <div className="flex items-center justify-between bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <a
            href="#"
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="#"
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover-bg-gray-50"
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          {/* Render pagination links based on the total number of items */}
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            {/* Render pagination links dynamically */}
            {Array.from({ length: Math.ceil(items.length / itemsPerPage) }).map((_, index) => (
              <a
                key={index}
                href="#"
                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                  currentPage === index + 1
                    ? 'bg-indigo-600 text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover-bg-gray-50 focus:z-20 focus:outline-offset-0'
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
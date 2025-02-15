interface Props {
  totalUsers: number
  userPerPage: number
  currentPage: number
  paginate: (pageNumber: number) => void
}

export default function PaginationComponent({
  totalUsers,
  userPerPage,
  currentPage,
  paginate,
}: Props) {

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalUsers / userPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <>
      <nav className="flex justify-center mt-4">
        <ul className="flex space-x-2">
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`px-3 py-1 rounded-md cursor-pointer ${currentPage === number ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              onClick={() => paginate(number)}
            >
              {number}
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}


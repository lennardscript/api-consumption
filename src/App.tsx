import { useEffect, useState } from "react";
import { fetchUsers, setCurrentPage } from "./store/userSlice";
import { useAppDispatch, useAppSelector } from "./hooks";
import UserCardComponent from "./components/UserCardComponent";
import SearchBarComponent from "./components/SearchBarComponent";
import SkeletronComponent from "./components/SkeletronComponent";
import PaginationComponent from "./components/PaginationComponent";

export default function App() {
  const dispatch = useAppDispatch()
  const [searchTerm, setSearchTeam] = useState<string>("");

  // Acceder el estado global de Redux
  const { users, loading, currentPage, userPerPage } = useAppSelector(
    (state: any) => state.users
  )

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  // Restablecer la página actual cuando el término de búsqueda cambia
  useEffect(() => {
    dispatch(setCurrentPage(1))
  }, [searchTerm, dispatch])

  // Filtrar usuarios por término de busqueda
  const filteredUsers = users.filter((user: any) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginación
  const indexOfLastUser = currentPage * userPerPage
  const indexOfFirstUser = indexOfLastUser - userPerPage
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser)

  // Cambiar página
  const paginate = (pageNumber: number) => {
    dispatch(setCurrentPage(pageNumber))
  }

  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl text-center font-bold mb-4">Consumo de API</h1>
        <SearchBarComponent value={searchTerm} onChange={(e) => setSearchTeam(e.target.value)} />
        <div className="mt-4">
          {loading && <SkeletronComponent />}
          {filteredUsers.length === 0 && searchTerm.trim() !== "" && (
            <p className="text-center text-gray-600">
              No se encontro ningún usuario con el nombre "{searchTerm}".
            </p>
          )}
          {currentUsers.length > 0 && (
            <>
              <UserCardComponent users={currentUsers} />
              <PaginationComponent
                totalUsers={filteredUsers.length}
                userPerPage={userPerPage}
                currentPage={currentPage}
                paginate={paginate}
              />
            </>
          )}
        </div>
      </div>
    </>
  )
}


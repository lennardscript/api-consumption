import { useState } from "react";
import useFetchData from "./hooks/useFetchData";
import UserCardComponent from "./components/UserCardComponent";
import SearchBarComponent from "./components/SearchBarComponent";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export default function App() {
  const [searchTerm, setSearchTeam] = useState<string>("");
  const { data, loading, error } = useFetchData(API_URL)

  const filteredUsers = data.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl text-center font-bold mb-4">Consumo de API</h1>
        <SearchBarComponent value={searchTerm} onChange={(e) => setSearchTeam(e.target.value)} />
        <div className="mt-4">
          <UserCardComponent users={filteredUsers} />
        </div>
      </div>
    </>
  )
}



interface User {
  id: number;
  name: string;
  email: string;
  company: { name: string }
}

export default function UserCardComponent({ users }: { users: User[] }) {
  return (
    <>
      <div className="p-2 items-center space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between p-4 bg-white border-l-4 rounded-lg shadow-sm max-w-sm mx-auto"
          >
            <div>
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-500">Compañía: {user.company.name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}


interface User {
  id: number;
  name: string;
  email: string;
  company: { name: string }
}

export default function UserCardComponent({ user }: { user: User }) {
  return (
    <>
      <div className='border p-4 rounded shadow-md'>
        <h2 className='text-xl font-semibold'>{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
        <p className="mt-2">Compañía: {user.company.name}</p>
      </div>
    </>
  )
}

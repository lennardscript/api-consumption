export default function SkeletronComponent() {
  return (
    <>
      <div className="animate-pulse p-4 max-w-sm mx-auto">
        <div className="h-4 bg-gray-200 rounded-full dark:bg-neutral-700 w-1/3 mb-4"></div>
        <ul className="space-y-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <li key={index} className="h-4 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
          ))}
        </ul>
      </div>
    </>
  )
}


import { useRouter } from 'next/router'
import useSWR from 'swr'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Guitar() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.id && `/api/guitars/${query.id}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
    <table>
      <thead>
        <tr>
          <th>Brand</th>
          <th>Color</th>
          <th>Model</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.brand}</td>
          <td>{data.color}</td>
          <td>{data.model}</td>
          <td>{data.year}</td>
        </tr>
      </tbody>
    </table>
  )
}

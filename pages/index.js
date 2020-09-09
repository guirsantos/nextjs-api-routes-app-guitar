import useSWR from 'swr'
import Guitar from '../components/Guitar'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSWR('/api/guitars', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul>
      {data.map((p, i) => (
        <Guitar key={i} guitar={p} />
      ))}
    </ul>
  )
}

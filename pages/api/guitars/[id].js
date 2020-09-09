import { guitars } from '../../../data'

export default function guitarsHandler({ query: { id } }, res) {
  const filtered = guitars.filter((g) => g.id === id)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Guitar with id: ${id} not found.` })
  }
}
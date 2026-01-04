import { useEffect, useState } from 'react'

function useGithubRepos(username, count = 12) {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=${count}`
        )
        if (!res.ok) {
          throw new Error('Unable to load GitHub repositories.')
        }
        const data = await res.json()
        setRepos(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [username, count])

  return { repos, loading }
}

export default useGithubRepos

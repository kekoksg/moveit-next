// Tudo que será repetido no projeto inteiro fica no _app.tsx
import { ChallengesProvider } from '../contexts/ChallengesContext'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  const { level, currentExperience, challengesCompleted } = pageProps;

  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
      >
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp

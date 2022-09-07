// Tudo que será repetido no projeto inteiro fica no _app.tsx
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

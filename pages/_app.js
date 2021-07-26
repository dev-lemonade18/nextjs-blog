// すべての異なるページに共通する最上位のコンポーネント
import '../styles/global.css'

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}
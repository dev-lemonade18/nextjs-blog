// すべての異なるページに共通する最上位のコンポーネント
//グローバルCSSファイルは_app.jsにのみインポート可能（そういう仕様らしい）
import '../styles/global.css'

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}
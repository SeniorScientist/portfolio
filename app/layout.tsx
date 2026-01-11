import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio | 生成AI/LLM 実践エンジニア',
  description: '生成AI/LLMを実運用まで導くエンジニアのポートフォリオ。技術とビジネスの両面から成果を創出します。',
  keywords: 'エンジニア, 生成AI, LLM, RAG, TypeScript, AWS, ポートフォリオ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}

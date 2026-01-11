import { BarChart2, Check } from 'lucide-react'

export default function Skills() {
  const skillGroups = [
    {
      level: '1. 強み（深い実務）',
      desc: '設計から運用まで、自力で完遂できる',
      items: [
        { name: 'LLM (LangChain / RAG)', note: '業務向け本番設計〜運用' },
        { name: 'AWS (Terraform / CDK)', note: 'セキュアなインフラ構築' },
        { name: 'TypeScript / Next.js', note: '大規模SPA設計・運用' }
      ],
      color: 'bg-blue-600',
      textColor: 'text-blue-600'
    },
    {
      level: '2. 実務経験',
      desc: 'チーム開発で機能実装・レビューができる',
      items: [
        { name: 'Python', note: 'AI連携・API開発' },
        { name: 'Go', note: 'サーバーサイド実装' },
        { name: 'Ruby on Rails', note: 'Webアプリケーション開発' },
        { name: 'PHP', note: 'バックエンド開発' },
        { name: 'Elasticsearch', note: '検索ロジック・分析' }
      ],
      color: 'bg-emerald-600',
      textColor: 'text-emerald-600'
    },
    {
      level: '3. 基礎実務・即キャッチアップ可能',
      desc: '短期間で実務レベルに到達できる',
      items: [
        { name: 'GraphQL / Prisma', note: '基本的なCRUD・スキーマ設計' },
        { name: 'Vercel AI SDK / OpenAI Agents SDK', note: 'AIアプリケーション開発' },
        { name: 'LangChain / OpenAI API / Vertex AI', note: 'LLM統合・エージェント設計' },
        { name: 'Pinecone / PGVector', note: 'RAG用ベクトルDB構築' }
      ],
      color: 'bg-slate-500',
      textColor: 'text-slate-500'
    }
  ]

  return (
    <section id="skills" className="bg-slate-50 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <div className="bg-slate-900 text-white p-2 rounded mr-3">
              <BarChart2 className="w-6 h-6" />
            </div>
            スキル一覧
          </h2>
          <p className="text-slate-600">採用判断のためのスキルレベル整理</p>
        </div>

        <div className="space-y-6">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200">
              <div className={`${group.color} text-white px-6 py-3 flex flex-col md:flex-row md:items-center justify-between`}>
                <h3 className="font-bold text-lg">{group.level}</h3>
                <span className="text-sm opacity-90">{group.desc}</span>
              </div>
              <div className="p-6">
                <ul className="grid md:grid-cols-1 gap-3">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-center border-b border-slate-50 pb-2 last:border-0 last:pb-0">
                      <Check className={`${group.textColor} mr-3 flex-shrink-0 w-5 h-5`} />
                      <div className="flex flex-col md:flex-row md:items-center w-full">
                        <span className="font-bold text-slate-800 w-48">{item.name}</span>
                        <span className="text-sm text-slate-600 md:border-l md:border-slate-200 md:pl-3">{item.note}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

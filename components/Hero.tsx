'use client'

import { MessageCircle, Shield, Rocket, ArrowRight } from 'lucide-react'

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-[var(--primary-color)] text-white py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-blue-900/50 px-3 py-1 rounded-full border border-blue-700 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-sm font-medium text-blue-100">AIエンジニア / テックリード</span>
          </div>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 leading-relaxed">
            生成AIをPoCで終わらせず、<br />
            本番運用まで確実に実装・安定化できるエンジニアです。<br />
            <span className="text-blue-400 text-xl md:text-2xl mt-4 block font-medium">
              AIプラットフォーム、SaaS開発、<br className="md:hidden" />PCI DSS対応の実務経験があります。
            </span>
          </h1>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8 backdrop-blur-sm">
            <p className="text-sm text-slate-400 mb-3 font-bold uppercase tracking-wider">お話しできるテーマ</p>
            <ul className="space-y-3 text-slate-200 font-medium">
              <li className="flex items-center">
                <MessageCircle className="w-5 h-5 text-blue-400 mr-3" />
                AI×業務改善システム全体の設計
              </li>
              <li className="flex items-center">
                <Shield className="w-5 h-5 text-blue-400 mr-3" />
                堅牢なAWSインフラ / PCI DSS
              </li>
              <li className="flex items-center">
                <Rocket className="w-5 h-5 text-blue-400 mr-3" />
                プロダクト開発〜運用の自走経験
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo('projects')}
              className="px-6 py-3 bg-[var(--accent-color)] hover:bg-blue-600 text-white font-bold rounded-lg transition-colors flex items-center shadow-lg shadow-blue-900/50"
            >
              実績を見る
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button
              onClick={() => scrollTo('detail')}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-colors backdrop-blur-sm border border-white/20"
            >
              詳細プロフィール
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

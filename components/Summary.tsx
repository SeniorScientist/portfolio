import { FileText } from 'lucide-react'

export default function Summary() {
  return (
    <section id="summary" className="section-container">
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="bg-slate-900 text-white p-6 md:p-8">
          <h2 className="text-2xl font-bold flex items-center mb-2">
            <div className="bg-white text-slate-900 p-2 rounded mr-3">
              <FileText className="w-6 h-6" />
            </div>
            CEO向け：1ページ要約
          </h2>
          <p className="text-slate-400">最後に、私の提供価値のまとめ</p>
        </div>

        <div className="p-6 md:p-10 space-y-8">
          {/* Who I am */}
          <div>
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2 border-b border-slate-100 pb-1">■ 私は何ができるか</h3>
            <p className="text-xl font-bold text-slate-900 leading-relaxed mb-2">
              生成AIを本番運用まで落とし込み、安定サービスをつくるエンジニアです。
            </p>
            <p className="text-slate-700">
              AWSインフラとセキュリティ設計（PCI DSS準拠）も対応できます。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Achievements */}
            <div>
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2 border-b border-slate-100 pb-1">■ 強い実績</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-bold text-[var(--accent-color)] mr-2">1)</span>
                  <div>
                    <span className="font-bold text-slate-800">対話AIプラットフォーム</span>
                    <span className="text-sm text-slate-600 block">設計〜運用まで一貫してリード</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-[var(--accent-color)] mr-2">2)</span>
                  <div>
                    <span className="font-bold text-slate-800">決済基盤セキュリティ</span>
                    <span className="text-sm text-slate-600 block">PCI DSS準拠の安全性設計</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-[var(--accent-color)] mr-2">3)</span>
                  <div>
                    <span className="font-bold text-slate-800">営業支援SaaS</span>
                    <span className="text-sm text-slate-600 block">API刷新・フロント改善・運用安定化</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Fit & Attitude */}
            <div>
              <div className="mb-6">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2 border-b border-slate-100 pb-1">■ 向いている課題</h3>
                <p className="text-slate-800 font-medium">
                  AI活用、セキュアな決済/インフラ構築、<br />
                  新規プロダクトの0→1立ち上げ
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2 border-b border-slate-100 pb-1">■ 働き方</h3>
                <p className="text-slate-800 font-medium">
                  最後まで責任を持ち、<br />
                  期限と品質を両立させます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

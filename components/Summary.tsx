import { FileText, Check } from 'lucide-react'

export default function Summary() {
  const mainAchievements = [
    '生成AI × 業務システムで、本番運用に成功',
    '堅牢なAWSインフラ設計（PCI DSS準拠）',
    'プロダクトの安定運用と継続改善'
  ]

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
              生成AIをPoCで終わらせず、本番運用まで確実に実装・安定化できるエンジニアです。
            </p>
            <p className="text-slate-700">
              AWSインフラとセキュリティ設計（PCI DSS準拠）も対応できます。
            </p>
          </div>

          {/* Main Achievements - Running Value */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
            <h3 className="text-sm font-bold text-emerald-700 uppercase tracking-wider mb-3">◆ 主な成果（3つ）</h3>
            <ul className="space-y-2">
              {mainAchievements.map((achievement, idx) => (
                <li key={idx} className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0" />
                  <span className="text-slate-800 font-medium">{achievement}</span>
                </li>
              ))}
            </ul>
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
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-800 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)] mr-2"></span>
                    AI活用・検索精度の改善
                  </li>
                  <li className="flex items-center text-slate-800 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)] mr-2"></span>
                    セキュアな決済/インフラ構築
                  </li>
                  <li className="flex items-center text-slate-800 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)] mr-2"></span>
                    新規プロダクトの0→1立ち上げ
                  </li>
                  <li className="flex items-center text-slate-800 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)] mr-2"></span>
                    API設計・スケール対応
                  </li>
                </ul>
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

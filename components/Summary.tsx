import { FileText, Check } from 'lucide-react'

export default function Summary() {
  const mainAchievements = [
    '曖昧な要求を整理し、実運用できるプロダクトとして形にする',
    'フロント・バックエンド・インフラを横断して一貫対応',
    '生成AIを含む案件をPoCで終わらせず本番リリースまで完遂'
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
              AIも含めて、複雑な要求を実運用できるプロダクトに落とし込むエンジニアです。
            </p>
            <p className="text-slate-700">
              要件整理から設計、実装、テスト、リリース、運用改善まで一貫して担当。<br />
              フロント、バックエンド、インフラを横断し、必要に応じてBiz/PMとの仕様すり合わせも行います。
            </p>
          </div>

          {/* Main Achievements - Running Value */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
            <h3 className="text-sm font-bold text-emerald-700 uppercase tracking-wider mb-3">◆ 主な強み（3つ）</h3>
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
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2 border-b border-slate-100 pb-1">■ 代表的な実績</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-bold text-[var(--accent-color)] mr-2">1)</span>
                  <div>
                    <span className="font-bold text-slate-800">対話型AIプラットフォーム</span>
                    <span className="text-sm text-slate-600 block">CEOに近い距離で、要件整理から本番リリースまで広く担当</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-[var(--accent-color)] mr-2">2)</span>
                  <div>
                    <span className="font-bold text-slate-800">決済基盤セキュリティ</span>
                    <span className="text-sm text-slate-600 block">バックエンドとインフラを中心に、安全に動かせる形を設計</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-[var(--accent-color)] mr-2">3)</span>
                  <div>
                    <span className="font-bold text-slate-800">営業支援SaaS</span>
                    <span className="text-sm text-slate-600 block">フロント・API・インフラを横断して継続的に改善</span>
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
                    要件が曖昧な0→1の立ち上げ
                  </li>
                  <li className="flex items-center text-slate-800 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)] mr-2"></span>
                    生成AI活用プロダクトの設計・運用
                  </li>
                  <li className="flex items-center text-slate-800 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)] mr-2"></span>
                    セキュアな決済/インフラ構築
                  </li>
                  <li className="flex items-center text-slate-800 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)] mr-2"></span>
                    既存SaaSの継続開発・改善
                  </li>
                  <li className="flex items-center text-slate-800 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)] mr-2"></span>
                    日本・海外混合チームでの開発
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2 border-b border-slate-100 pb-1">■ 働き方</h3>
                <p className="text-slate-800 font-medium">
                  背景とゴールを最初に合わせ、<br />
                  実装単位に分けて進めます。<br />
                  最後まで責任を持ち、期限と品質を両立させます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

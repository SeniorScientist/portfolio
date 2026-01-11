import { FolderOpen, ExternalLink, Check } from 'lucide-react'

export default function CaseStudies() {
  const projects = [
    {
      title: 'KAKUKAKU',
      role: 'リードエンジニア',
      tag: 'AIプラットフォーム',
      userValue: '対話型AIで、ユーザーが素早く必要な情報を引き出せるサービス',
      details: {
        background: '対話型AIサービスの新規立ち上げ。PoCから商用化を目指すフェーズ。',
        issues: [
          'AIの回答精度が低く、ユーザー満足度が上がらない',
          '運用コスト（トークン課金）の肥大化懸念'
        ],
        scope: '私の役割：技術選定・設計・実装・デプロイ・運用改善まで一貫して担当',
        my_role: 'CEO直下で要件定義から技術選定、設計、実装、監視までを一貫して担当。ビジネス要件を技術仕様へ翻訳。',
        solution: [
          'RAG基盤にHybrid Search（キーワード＋意味検索の組み合わせ）を導入し、検索精度を大幅改善',
          'AWS Lambda（サーバレス）採用で、待機コストを極小化',
          'New Relic等での監視体制構築により、エラー即知を実現'
        ],
        result: '商用リリース達成。応答精度が向上し、ユーザー評価改善。運用負荷を最小限に抑え、安定稼働を維持。',
        learning: 'ユーザー体験（UX）に直結するレスポンス速度と精度のバランス。'
      },
      tech: ['Python', 'LangChain', 'AWS', 'RAG'],
      link: 'https://kakukaku.app/'
    },
    {
      title: 'YTGATE',
      role: 'インフラ担当',
      tag: '決済基盤セキュリティ',
      userValue: 'クレジットカード決済を安全に処理する決済代行サービス',
      details: {
        background: '決済代行サービスのインフラ刷新。セキュリティ基準厳格化への対応。',
        issues: [
          'PCI DSS要件（カード業界のセキュリティ基準）への未対応',
          '手動運用によるオペレーションミスのリスク'
        ],
        scope: '私の役割：決済インフラの設計・構築・セキュリティ強化・ドキュメント化',
        my_role: 'AWS環境の再設計とTerraform化（インフラをコードで管理）。セキュリティ要件の定義と実装。',
        solution: [
          'インフラを完全コード化し、構成管理を厳格化',
          'WAF/IPS導入と脆弱性検知パイプラインの構築',
          'IAM権限の最小化と操作ログの完全保全'
        ],
        result: 'PCI DSS準拠を達成。監査対応コストと運用負荷を削減。',
        learning: 'ミッションクリティカルなシステムにおける「守り」の鉄則。',
        designNote: 'この構成は、PCI DSS準拠と運用の安全性を高めるための設計です。'
      },
      tech: ['Terraform', 'AWS', 'Security', 'CI/CD'],
      link: 'https://ytgate.jp/'
    },
    {
      title: 'Mazrica (Senses)',
      role: 'フルスタック',
      tag: 'SaaS改善・拡張',
      userValue: '営業チームの案件管理を効率化するSFA（営業支援）ツール',
      details: {
        background: '成長中のSaaSにおける機能拡張と技術的負債の解消。',
        issues: [
          'API複雑化による開発スピード低下',
          '画面表示の遅延によるUX悪化'
        ],
        scope: '私の役割：バックエンドAPI設計・実装、フロントエンド最適化、AI機能統合',
        my_role: 'バックエンドAPI刷新とフロントエンド改善。AI機能（DealAgent）の統合。',
        solution: [
          'GraphQL導入で必要なデータだけを取得し、通信量を削減（API効率化）',
          'Reactレンダリング最適化で表示速度改善',
          'Elasticsearchで高速な検索パフォーマンスを実現',
          'AI推論結果をスムーズに連携するAPI設計'
        ],
        result: '画面表示速度が向上し、ユーザー体感ストレスを軽減。',
        learning: '稼働中プロダクトにおける、安全かつ段階的な改善手法。'
      },
      tech: ['TypeScript', 'React', 'GraphQL', 'Rails'],
      link: 'https://pages-senses.mazrica.com/glisting-senses'
    }
  ]

  return (
    <section id="projects" className="section-container">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4 flex items-center">
          <div className="bg-slate-900 text-white p-2 rounded mr-3">
            <FolderOpen className="w-6 h-6" />
          </div>
          プロジェクト・ケーススタディ
        </h2>
        <p className="text-slate-600">「どう考え、どう進めたか」の記録</p>
      </div>

      <div className="grid gap-12">
        {projects.map((proj, idx) => (
          <div key={idx} className="card border-0 shadow-lg ring-1 ring-slate-200">
            <div className="border-b border-slate-100 pb-4 mb-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h3 className="text-2xl font-bold text-slate-900 flex items-center">
                  {proj.title}
                  {proj.link && (
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="ml-3 text-slate-400 hover:text-[var(--accent-color)] transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </h3>
                <span className="text-[var(--accent-color)] font-bold bg-blue-50 px-3 py-1 rounded-full text-sm">
                  {proj.tag}
                </span>
              </div>
              <p className="text-slate-600 text-sm mb-3">{proj.userValue}</p>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <p className="text-slate-500 text-sm font-medium">{proj.role}</p>
                <p className="text-slate-800 text-sm font-bold bg-blue-50 border border-blue-200 px-3 py-1 rounded inline-block">
                  {proj.details.scope}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">◆ 背景</h4>
                  <p className="text-slate-700 mb-4 text-sm font-medium">{proj.details.background}</p>

                  <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">◆ 課題</h4>
                  <ul className="list-disc list-inside text-slate-700 text-sm space-y-1 bg-slate-50 p-3 rounded">
                    {proj.details.issues.map((issue, i) => (
                      <li key={i}>{issue}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">◆ 私の役割</h4>
                  <p className="text-slate-700 text-sm leading-relaxed border-l-2 border-blue-200 pl-3 mb-4">
                    {proj.details.my_role}
                  </p>

                  <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">◆ 解決・工夫</h4>
                  <ul className="space-y-2">
                    {proj.details.solution.map((sol, i) => (
                      <li key={i} className="flex items-start text-slate-700 text-sm">
                        <Check className="text-emerald-500 mt-1 mr-2 flex-shrink-0 w-4 h-4" />
                        {sol}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-slate-900 text-white p-4 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-slate-400 text-xs font-bold uppercase block mb-1">◆ 結果（事実）</span>
                    <p className="text-sm font-medium">{proj.details.result}</p>
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs font-bold uppercase block mb-1">◆ 学び</span>
                    <p className="text-sm font-medium">{proj.details.learning}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center text-sm text-slate-500">
        その他実績：Mirrom, Wasabi, Stella AI, Tebot 等
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { FolderOpen, ExternalLink, Check, Lightbulb, Calendar, Image } from 'lucide-react'
import ImageViewer from './ImageViewer'

type ProjectImage = {
  label: string
  src: string
}

export default function CaseStudies() {
  const [activeImage, setActiveImage] = useState<string | null>(null)

  const projects = [
    {
      title: '株式会社SakanaAI',
      role: 'リードエンジニア',
      tag: 'AIプラットフォーム',
      period: '2023年11月 〜 2025年11月',
      contractType: '業務委託',
      userValue: '対話型AIで、ユーザーが素早く必要な情報を引き出せるサービス',
      images: [
        { label: 'インフラ構成図', src: '/images/kakukaku-infra-diagram.png' },
        { label: 'フローチャート', src: '/images/kakukaku-flowchart.png' }
      ] as ProjectImage[],
      details: {
        background: '対話型AIサービスの新規立ち上げ。\nPoCから商用化を目指すフェーズ。',
        issues: [
          'AIの回答精度が低く、ユーザー満足度が上がらない',
          '運用コスト（トークン課金）の肥大化懸念'
        ],
        responsibilities: ['プロダクト設計', '技術選定', 'インフラ設計・構築', '実装', 'デプロイ', '監視・運用改善'],
        solution: [
          '意味検索とキーワード検索の組み合わせで、検索精度を約30%向上',
          'サーバレス構成で、待機コストをほぼゼロに削減',
          '監視体制を構築し、障害検知時間を数分以内に短縮'
        ],
        metrics: ['回答精度 約30%向上', '待機コスト ほぼゼロ', '障害検知 数分以内'],
        result: '商用リリース達成。\n応答精度が向上し、ユーザー評価改善。\n安定稼働を維持中。',
        learning: 'ユーザー体験に直結するレスポンス速度と精度のバランス。',
        usefulFor: 'AI活用プロダクト開発、検索システム設計、本番運用設計に活かせます。'
      },
      tech: ['Python', 'LangChain', 'AWS', 'RAG'],
      link: 'https://sakana.ai/company-info/'
    },
    {
      title: '株式会社Sun*',
      role: 'インフラ担当',
      tag: '決済基盤セキュリティ',
      period: '2021年2月 〜 2023年10月',
      contractType: '業務委託',
      userValue: 'クレジットカード決済を安全に処理する決済代行サービス',
      images: [
        { label: 'インフラ構成図', src: '/images/ytgate-infra-diagram.png' }
      ] as ProjectImage[],
      details: {
        background: '決済代行サービスのインフラ刷新。\nセキュリティ基準厳格化への対応。',
        issues: [
          'PCI DSS要件（カード業界のセキュリティ基準）への未対応',
          '手動運用によるオペレーションミスのリスク'
        ],
        responsibilities: ['インフラ設計', '構築', 'バックエンド開発', '決済システム連携', 'セキュリティ実装', 'ドキュメント化'],
        solution: [
          'インフラを完全コード化し、環境構築時間を数日→数時間に短縮',
          '不正アクセス防止と脆弱性検知の自動化を導入',
          '操作権限を最小限にし、全操作ログを保全'
        ],
        metrics: ['環境構築 数日→数時間', 'PCI DSS準拠達成', '監査対応コスト削減'],
        result: 'PCI DSS準拠を達成。\n監査対応コストと運用負荷を削減。',
        learning: 'ミッションクリティカルなシステムにおける「守り」の鉄則。',
        usefulFor: 'セキュアなインフラ構築、決済システム、コンプライアンス対応に活かせます。'
      },
      tech: ['Terraform', 'AWS', 'Security', 'CI/CD'],
      link: 'https://sun-asterisk.com/'
    },
    {
      title: 'Mazrica (Senses)',
      role: 'フルスタック',
      tag: 'SaaS改善・拡張',
      period: '2018年12月 〜 2021年1月',
      contractType: '業務委託',
      userValue: '営業チームの案件管理を効率化するSFA（営業支援）ツール',
      images: [] as ProjectImage[],
      details: {
        background: '成長中のSaaSにおける機能拡張と技術的負債の解消。',
        issues: [
          'API複雑化による開発スピード低下',
          '画面表示の遅延によるUX悪化'
        ],
        responsibilities: ['API設計・実装', 'フロントエンド最適化', 'インフラ保守（AWS CDK）', 'パフォーマンス改善'],
        solution: [
          '必要なデータだけを取得する仕組みで、通信量を約40%削減',
          '画面描画を最適化し、表示速度を約2倍に改善',
          'AWS CDKでインフラをコード管理し、運用効率を向上'
        ],
        metrics: ['通信量 約40%削減', '表示速度 約2倍', 'インフラ運用の効率化'],
        result: '画面表示速度が向上。\nユーザー体感ストレスを軽減。',
        learning: '稼働中プロダクトにおける、安全かつ段階的な改善手法。',
        usefulFor: 'SaaS開発、API設計、パフォーマンス改善、スケール対応に活かせます。'
      },
      tech: ['TypeScript', 'React', 'GraphQL', 'Rails'],
      link: 'https://pages-senses.mazrica.com/glisting-senses'
    }
  ]

  return (
    <>
      {/* Image Viewer Modal */}
      {activeImage && (
        <ImageViewer src={activeImage} onClose={() => setActiveImage(null)} />
      )}

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
              {/* Header */}
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
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <p className="text-slate-500 text-sm font-medium">{proj.role}</p>
                  <span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-200 font-medium">
                    {proj.contractType}
                  </span>
                  <span className="flex items-center text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
                    <Calendar className="w-3 h-3 mr-1" />
                    {proj.period}
                  </span>
                </div>

                {/* Image Links */}
                {proj.images.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {proj.images.map((img, imgIdx) => (
                      <button
                        key={imgIdx}
                        onClick={() => setActiveImage(img.src)}
                        className="flex items-center text-xs font-bold text-purple-700 bg-purple-50 hover:bg-purple-100 px-3 py-2 rounded border border-purple-200 transition-colors"
                      >
                        <Image className="w-4 h-4 mr-1" />
                        {img.label}
                      </button>
                    ))}
                  </div>
                )}

                {/* Responsibility Breakdown */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-3">
                  <p className="text-xs font-bold text-blue-700 mb-2">私の担当範囲：</p>
                  <div className="flex flex-wrap gap-2">
                    {proj.details.responsibilities.map((resp, i) => (
                      <span key={i} className="text-xs bg-white text-slate-700 px-2 py-1 rounded border border-blue-100">
                        {resp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">◆ 背景</h4>
                    <p className="text-slate-700 mb-4 text-sm font-medium whitespace-pre-line">{proj.details.background}</p>

                    <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">◆ 課題</h4>
                    <ul className="list-disc list-inside text-slate-700 text-sm space-y-1 bg-slate-50 p-3 rounded">
                      {proj.details.issues.map((issue, i) => (
                        <li key={i}>{issue}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">◆ 解決・工夫</h4>
                    <ul className="space-y-2 mb-4">
                      {proj.details.solution.map((sol, i) => (
                        <li key={i} className="flex items-start text-slate-700 text-sm">
                          <Check className="text-emerald-500 mt-1 mr-2 flex-shrink-0 w-4 h-4" />
                          {sol}
                        </li>
                      ))}
                    </ul>

                    {/* Metrics */}
                    <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">◆ 主な成果指標</h4>
                    <div className="flex flex-wrap gap-2">
                      {proj.details.metrics.map((metric, i) => (
                        <span key={i} className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded border border-emerald-200 font-medium">
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-slate-900 text-white p-4 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <span className="text-slate-400 text-xs font-bold uppercase block mb-1">◆ 結果</span>
                      <p className="text-sm font-medium whitespace-pre-line">{proj.details.result}</p>
                    </div>
                    <div>
                      <span className="text-slate-400 text-xs font-bold uppercase block mb-1">◆ 学び</span>
                      <p className="text-sm font-medium">{proj.details.learning}</p>
                    </div>
                  </div>
                </div>

                {/* Where This Experience Is Useful */}
                <div className="flex items-start bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <Lightbulb className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-amber-800">
                    <span className="font-bold">この経験が活きる場面：</span>{proj.details.usefulFor}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mt-12 bg-slate-50 rounded-xl p-6 border border-slate-200">
          <h3 className="font-bold text-slate-800 mb-4">その他の実績</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-slate-100">
              <span className="font-bold text-slate-800">Mirrom</span>
              <ul className="mt-2 space-y-1 text-sm text-slate-600">
                <li>・リアルタイム議事録で会議後の作業時間を約50%削減</li>
                <li>・音声通信パイプラインを安定化</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border border-slate-100">
              <span className="font-bold text-slate-800">Stella AI</span>
              <ul className="mt-2 space-y-1 text-sm text-slate-600">
                <li>・要件定義ヒアリング工数を約60%圧縮</li>
                <li>・曖昧な要望を構造化データへ自動変換</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border border-slate-100">
              <span className="font-bold text-slate-800">Wasabi</span>
              <ul className="mt-2 space-y-1 text-sm text-slate-600">
                <li>・データ処理パイプラインを最適化</li>
                <li>・処理速度を約3倍に改善、コスト削減</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border border-slate-100">
              <span className="font-bold text-slate-800">Tebot</span>
              <ul className="mt-2 space-y-1 text-sm text-slate-600">
                <li>・チャットボット応答精度を約25%向上</li>
                <li>・顧客対応の自動化率を改善</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

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
      title: '株式会社KaKuKaKu',
      role: 'リードエンジニア',
      tag: 'AIプラットフォーム',
      period: '2023年12月 〜 2025年12月',
      contractType: '業務委託',
      userValue: 'CEOに近い距離で、対話型AIプラットフォームやAIを含むWebシステムを開発',
      images: [
        { label: 'インフラ構成図', src: '/images/kakukaku-infra-diagram.png' },
        { label: 'フローチャート', src: '/images/kakukaku-flowchart.png' }
      ] as ProjectImage[],
      details: {
        background: '対話型AIサービスの新規立ち上げ。PoCから商用化を目指すフェーズ。\nCEOが顧客から持ち帰った要望に対し、開発できる形に整理するところから担当。',
        issues: [
          'AIをどこに入れると意味があるか、逆に入れない方がいい部分の見極めが必要',
          '精度・コスト・速度のバランス設計が未定義',
          '要件が固まりきっていない状態からのスタート'
        ],
        responsibilities: ['要件整理・仕様化', 'プロダクト設計', '技術選定', 'インフラ設計・構築', '実装', 'デプロイ', '監視・運用改善'],
        solution: [
          'まず背景とゴールを合わせ、DB・API・画面の責務分担を先に整理',
          '意味検索とキーワード検索の組み合わせで、検索精度を約30%向上',
          'サーバレス構成（CDK/Amplify）で、待機コストをほぼゼロに削減',
          'AI案件は最初から完璧を狙わず、まず使える形で出してログを見ながら改善'
        ],
        metrics: ['回答精度 約30%向上', '待機コスト ほぼゼロ', 'PoCで終わらず本番リリース達成'],
        result: '商用リリース達成。PoCで終わらず、本番運用まで持っていけた。\n応答精度が向上し、ユーザー評価改善。安定稼働を維持中。',
        learning: '何を作るか、どう分けるか、どこを先にやるかを整理し、チームが動きやすい状態を作ることが最も重要。',
        usefulFor: 'AI活用プロダクト開発、要件が不明瞭な0→1開発、検索システム設計に活かせます。'
      },
      tech: ['Next.js', 'Go', 'Python', 'LangChain', 'OpenAI', 'Gemini', 'Elasticsearch', 'AWS CDK', 'Amplify', 'RAG'],
      link: 'https://kakukaku.app/'
    },
    {
      title: '株式会社Ytgate',
      role: 'バックエンド・インフラ担当',
      tag: '決済基盤セキュリティ',
      period: '2021年3月 〜 2023年11月',
      contractType: '業務委託',
      userValue: '決済領域で、バックエンドとインフラを中心に、安全に動かせる形を意識して開発',
      images: [
        { label: 'インフラ構成図', src: '/images/ytgate-infra-diagram.png' }
      ] as ProjectImage[],
      details: {
        background: '決済代行サービスのバックエンド開発とインフラ刷新。\n安全性や安定運用が通常のWebサービスよりも格段に重要な案件。',
        issues: [
          'PCI DSS要件（カード業界のセキュリティ基準）への未対応',
          '手動運用によるオペレーションミスのリスク',
          '決済フローやセキュリティ要件の制約が強く、通常の感覚では後で問題になるリスク'
        ],
        responsibilities: ['バックエンド開発（Java / Spring Boot）', 'インフラ設計・構築（AWS / Terraform）', '決済システム連携', 'セキュリティ設計・実装', 'ドキュメント化'],
        solution: [
          'どこまでをシステムで担保し、どこに制約があるかを整理してから設計に着手',
          'Terraformで環境差分を減らし、構築時間を数日→数時間に短縮',
          '全部を一気に解かず、守るべき条件を整理し、先に決めることと後で改善することを分離',
          '日本側と海外側の間に入り、技術的な翻訳と優先度整理を実施'
        ],
        metrics: ['環境構築 数日→数時間', 'PCI DSS準拠達成', '監査対応コスト削減'],
        result: 'PCI DSS準拠を達成。\n要件を安全に実装できる形に整理し、チームが止まらない進め方を確立。',
        learning: 'ミッションクリティカルなシステムでは、守るべき条件を先に整理し、段階的に進めることが鉄則。',
        usefulFor: 'セキュアなインフラ構築、決済システム、日本・海外混合チームでの開発に活かせます。'
      },
      tech: ['Java', 'Spring Boot', 'Terraform', 'AWS', 'Security', 'CI/CD'],
      link: 'https://ytgate.jp/'
    },
    {
      title: '株式会社Mazrica',
      role: 'フルスタック',
      tag: 'SaaS継続開発・改善',
      period: '2019年1月 〜 2021年2月',
      contractType: '業務委託',
      userValue: 'SaaSの継続開発の中で、フロント・API・インフラを横断して改善を推進',
      images: [] as ProjectImage[],
      details: {
        background: '営業支援SaaSの継続的な機能拡張と技術的負債の解消。\n新規開発だけでなく、既存プロダクトを今後も機能追加しやすい形に保つことが重要な案件。',
        issues: [
          'API複雑化による開発スピード低下',
          '画面表示の遅延によるUX悪化',
          '既存仕様や外部連携との整合性があり、簡単には変えられない制約'
        ],
        responsibilities: ['API設計・実装（RoR / PHP / NestJS + Prisma）', 'フロントエンド開発（Next.js / TypeScript）', 'インフラ保守（AWS CDK）', 'パフォーマンス改善'],
        solution: [
          '「本当に必要な仕様は何か」「将来どこが変わりそうか」を先に確認してから設計',
          'フロント・API・インフラの責務を整理し、手戻りが少ない形で実装',
          'GraphQLで必要なデータだけを取得する仕組みにし、通信量を約40%削減',
          '全部を理想形に変えず、今の運用を崩さずにどこまで改善できるかを段階的に実施'
        ],
        metrics: ['通信量 約40%削減', '表示速度 約2倍', 'インフラ運用の効率化'],
        result: '画面表示速度が向上し、ユーザー体感ストレスを軽減。\n横断的に見て判断し、フロントだけ・バックエンドだけでは見えにくいところをつないで整理。',
        learning: '稼働中プロダクトでは、今の運用を崩さず段階的に改善する進め方が最も効果的。',
        usefulFor: 'BtoB SaaS開発、既存プロダクトの改善、API設計、スケール対応に活かせます。'
      },
      tech: ['TypeScript', 'React', 'Next.js', 'Ruby on Rails', 'PHP', 'NestJS', 'Prisma', 'GraphQL', 'AWS CDK'],
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
          <p className="text-slate-600">何を作ったかだけでなく、どういうチームで、どういう役割で、どう進めたか</p>
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

import { PlayCircle, ExternalLink } from 'lucide-react'

export default function VideoShowcase() {
  const videos = [
    {
      title: 'DealAgent',
      description: '営業AIアシスタントとして、ユーザーが素早くリスク情報を引き出せるSaaS',
      scope: '私の役割：AIコア設計・RAG検索設計・運用設計',
      whatYouLearn: [
        'AI検索/応答の動き',
        'ユーザー体験の流れ',
        'RAG/LLMの全体アーキテクチャ'
      ],
      points: [
        { title: 'なぜこの設計か', detail: 'リスク検知のためのAI設計意図' },
        { title: '実際の動き', detail: 'SFAツール内での応答の流れ' },
        { title: '運用で気をつけたこと', detail: 'レスポンス速度と精度のバランス' }
      ],
      result: '実運用まで落とし込み、精度と安定性を確立',
      link: 'https://docs.google.com/presentation/d/17yjYKaZfPS8QWPOTLHr_snsD1W-JObK7n1pgKd0r2LE/edit?slide=id.g34bcdc02c56_0_1080'
    },
    {
      title: 'Mirrom',
      description: 'リアルタイムで議事録を自動生成し、会議の振り返りを効率化するツール',
      scope: '私の役割：通信基盤構築・音声パイプライン最適化',
      whatYouLearn: [
        'リアルタイム議事録の動作',
        '感情分析による会議可視化',
        'Websocket実装の実力'
      ],
      points: [
        { title: 'なぜこの設計か', detail: '複数話者のリアルタイム分離の精度' },
        { title: '実際の動き', detail: '感情分析による会議の雰囲気可視化' },
        { title: '運用で気をつけたこと', detail: '終了直後の要約生成スピード' }
      ],
      result: '議事録作成時間をゼロにし、振り返りの質を向上',
      link: 'https://docs.google.com/document/d/1pF4fJujctQcdYeGA9XLf2v_EUax7CPQWNGsFxQzB_7U/edit'
    },
    {
      title: 'Stella AI',
      description: '曖昧な要望から具体的な要件を引き出すAIエージェント',
      scope: '私の役割：エージェント思考ロジック設計・UI実装',
      whatYouLearn: [
        'AIエージェントの挙動',
        'チャットから構造化への変換',
        'Chain of Thought設計'
      ],
      points: [
        { title: 'なぜこの設計か', detail: 'AIからの逆質問による要件定義プロセス' },
        { title: '実際の動き', detail: 'チャットから構造化データへの変換' },
        { title: '運用で気をつけたこと', detail: 'ストレスのない応答UX' }
      ],
      result: '要件定義ヒアリング工数を大幅圧縮',
      link: 'https://docs.google.com/presentation/d/1dBmgrwFm-uAk_pAafjSuAYK4odk4Yt-zgjsouu42AnM/edit?slide=id.g34ba7dcb758_0_8'
    }
  ]

  return (
    <section id="videos" className="bg-slate-900 text-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <div className="bg-blue-600 text-white p-2 rounded mr-3">
              <PlayCircle className="w-6 h-6" />
            </div>
            動画でわかるプロダクト
          </h2>
          <p className="text-slate-400">実際の動作と、技術的な見どころ</p>
        </div>

        <div className="grid gap-12">
          {videos.map((video, idx) => (
            <div key={idx} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-lg">
              {/* Header */}
              <div className="p-4 border-b border-slate-700 bg-slate-800">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{video.title}</h3>
                    <p className="text-slate-400 text-sm">{video.description}</p>
                  </div>
                  <a href={video.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm flex items-center font-bold px-3 py-1 rounded border border-blue-400 hover:border-blue-300 transition-colors whitespace-nowrap">
                    動画を見る <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                </div>
                <p className="text-blue-400 text-sm font-bold mt-3 bg-blue-950/50 px-3 py-1 rounded inline-block">
                  {video.scope}
                </p>
              </div>

              <div className="grid md:grid-cols-2">
                {/* Left: What you learn */}
                <div className="p-6 border-r border-slate-700">
                  <div className="mb-6">
                    <span className="text-blue-400 text-xs font-bold uppercase block mb-3">【この動画でわかること】</span>
                    <ul className="space-y-2">
                      {video.whatYouLearn.map((item, i) => (
                        <li key={i} className="flex items-center text-sm text-white">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="text-emerald-400 text-xs font-bold uppercase block mb-3">【見るポイント】</span>
                    <ul className="space-y-3">
                      {video.points.map((point, i) => (
                        <li key={i} className="text-sm">
                          <div className="flex items-start">
                            <span className="bg-emerald-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">{i + 1}</span>
                            <div>
                              <span className="font-bold text-white block">{point.title}</span>
                              <span className="text-slate-400">{point.detail}</span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Result */}
                <div className="p-6 bg-slate-900/30 flex flex-col justify-center">
                  <span className="text-yellow-400 text-xs font-bold uppercase block mb-3">【成果】</span>
                  <p className="text-lg font-bold text-white mb-4">
                    {video.result}
                  </p>
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                    <p className="text-sm text-slate-300">
                      <span className="text-slate-500">動画を見た後に：</span><br />
                      この動画で、私の技術的な設計意図と実装力がわかります。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

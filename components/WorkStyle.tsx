import { Briefcase, Handshake, Target, Clock, AlertTriangle, TestTube, Shield, MessageSquare } from 'lucide-react'

export default function WorkStyle() {
  const values = [
    {
      icon: Target,
      title: '目的の共有',
      shortDesc: '最初にゴールを合わせてズレを防ぐ',
      desc: '「何のために、どこまでやるか」を最初に握ります。\n認識のズレを防ぎ、無駄な手戻りをなくします。'
    },
    {
      icon: Clock,
      title: '短いスパンで進捗',
      shortDesc: '2〜3日で報告、価値を早く示す',
      desc: '1週間待たせません。\n2〜3日で現状を見せます。\n早い段階でのフィードバックを歓迎します。'
    },
    {
      icon: AlertTriangle,
      title: 'リスクの早期報告',
      shortDesc: '悪い情報ほど早く共有',
      desc: '「間に合わないかも」「技術的に難しい」\nそういった悪い情報ほど、隠さずに早く伝えて相談します。'
    },
    {
      icon: TestTube,
      title: 'テストと監視の初期設計',
      shortDesc: '作る前に運用を考える',
      desc: '作る前に考えます。\n「どうテストするか」「どう監視するか」\nリリース後の運用負荷を下げます。'
    },
    {
      icon: Shield,
      title: '運用までの責任',
      shortDesc: '安定稼働まで見届ける',
      desc: '作って終わりではありません。\nユーザーが使い始め、安定稼働するまでを自分の仕事として責任を持ちます。'
    }
  ]

  const communicationDetails = [
    '毎週必ず進捗＋課題を共有',
    '障害発生時の即応手順を明確化',
    '変更時は影響範囲を事前説明',
    'ドキュメントは常に最新化'
  ]

  return (
    <section id="style" className="section-container">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4 flex items-center">
          <div className="bg-slate-900 text-white p-2 rounded mr-3">
            <Briefcase className="w-6 h-6" />
          </div>
          仕事の進め方
        </h2>
        <p className="text-slate-600">日本のチームで働く上で、徹底していること</p>
      </div>

      {/* Summary Box for Quick Scan - CEO/CTO向け */}
      <div className="bg-slate-900 text-white rounded-xl p-6 mb-8">
        <h3 className="font-bold text-lg mb-4 text-blue-400">■ 私の仕事の進め方（まとめ）</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {values.map((val, idx) => {
            const Icon = val.icon
            return (
              <div key={idx} className="flex items-center">
                <Icon className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                <span className="text-sm">{val.shortDesc}</span>
              </div>
            )
          })}
        </div>
        
        {/* Communication Details */}
        <div className="border-t border-slate-700 pt-4">
          <div className="flex items-center mb-3">
            <MessageSquare className="w-4 h-4 text-emerald-400 mr-2" />
            <span className="text-sm font-bold text-emerald-400">コミュニケーションの具体例</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-2">
            {communicationDetails.map((detail, idx) => (
              <div key={idx} className="flex items-center text-sm text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2"></span>
                {detail}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((val, idx) => {
          const Icon = val.icon
          return (
            <div key={idx} className="card bg-white hover:shadow-md transition-shadow border-l-4 border-l-[var(--accent-color)]">
              <div className="flex items-center mb-2">
                <div className="bg-blue-50 p-2 rounded mr-3">
                  <Icon className="w-5 h-5 text-[var(--accent-color)]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">■ {val.title}</h3>
                  <p className="text-xs text-[var(--accent-color)] font-medium">{val.shortDesc}</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mt-3 whitespace-pre-line">
                {val.desc}
              </p>
            </div>
          )
        })}

        <div className="card bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center text-center p-6 border-l-4 border-l-slate-300">
          <div>
            <div className="bg-white p-3 rounded-full inline-block mb-3 shadow-sm">
              <Handshake className="text-slate-500 w-8 h-8" />
            </div>
            <p className="text-sm text-slate-700 font-medium">
              安心感を持って<br />
              任せていただけるよう、<br />
              <span className="text-[var(--accent-color)]">丁寧な対話</span>を心がけています。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

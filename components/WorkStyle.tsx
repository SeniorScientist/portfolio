import { Briefcase, Handshake, Target, Clock, AlertTriangle, TestTube, Shield, MessageSquare, Users } from 'lucide-react'

export default function WorkStyle() {
  const values = [
    {
      icon: Target,
      title: '背景とゴールの共有',
      shortDesc: '最初に背景とゴールを合わせる',
      desc: 'まず背景とゴールを合わせて、そのあと実装単位に分けて話します。\nBiz/PMとは「何を実現したいか」を、エンジニア同士では「責務」と「未確定事項」を明確にします。'
    },
    {
      icon: Clock,
      title: '短いスパンで進捗',
      shortDesc: '2〜3日で報告、価値を早く示す',
      desc: '1週間待たせません。\n2〜3日で現状を見せます。\n図や簡単なメモで早めに認識を合わせることを重視しています。'
    },
    {
      icon: AlertTriangle,
      title: 'リスクの早期報告',
      shortDesc: '詰まりや判断が必要な点を早めに共有',
      desc: 'Slackと定例で、詰まっているところや判断が必要なところを早めに共有。\n曖昧なまま実装に入らないようにしています。'
    },
    {
      icon: TestTube,
      title: '要件の整理と分離',
      shortDesc: '先に決めることと後で改善することを分ける',
      desc: '何を先に決めるべきか、どこまでをシステムで持つか、どこを運用で吸収するかを整理。\n全部を一気に解かず、段階的に進めます。'
    },
    {
      icon: Shield,
      title: '運用までの責任',
      shortDesc: '安定稼働まで見届ける',
      desc: '作って終わりではありません。\nユーザーが使い始め、安定稼働するまでを自分の仕事として責任を持ちます。'
    }
  ]

  const communicationDetails = [
    'Biz/PMとは「何を実現したいか」を合わせる',
    'エンジニアとは「責務」「未確定事項」を明確に',
    '口頭だけで終わらず、Slackやチケットに要点を残す',
    '日本語での要件整理・仕様すり合わせに対応',
    '海外メンバーには英語で対応、判断理由は文章に残す'
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
        <p className="text-slate-600">背景とゴールを合わせ、実装単位に分けて進める</p>
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
              認識差分を埋めながら<br />
              進めるのが得意です。<br />
              <span className="text-[var(--accent-color)]">丁寧な要件整理と対話</span>を<br />心がけています。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Briefcase, Handshake, Target, Clock, AlertTriangle, TestTube, Shield } from 'lucide-react'

export default function WorkStyle() {
  const values = [
    {
      icon: Target,
      title: '目的とゴールの共有',
      desc: '最初に「何のために、どこまでやるか」を握ります。認識のズレを防ぎ、無駄な手戻りをなくします。'
    },
    {
      icon: Clock,
      title: '短いスパンでの進捗共有',
      desc: '1週間待たせるのではなく、2〜3日で現状を見せます。早い段階でのフィードバックを歓迎します。'
    },
    {
      icon: AlertTriangle,
      title: 'リスクの早期報告',
      desc: '「間に合わないかも」「技術的に難しい」といった悪い情報ほど、隠さずに早く伝えて相談します。'
    },
    {
      icon: TestTube,
      title: 'テストと監視の初期設計',
      desc: '作る前に「どうテストするか」「どう監視するか」を考えます。リリース後の運用負荷を下げます。'
    },
    {
      icon: Shield,
      title: '運用までの責任',
      desc: '作って終わりではありません。ユーザーが使い始め、安定稼働するまでを自分の仕事として責任を持ちます。'
    }
  ]

  const summary = [
    '目的を最初にすり合わせる',
    '短い期間で進捗共有',
    '問題は早めに共有・対応',
    '品質と運用設計を両立',
    '最後まで責任を持つ'
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

      {/* Summary Box for Quick Scan */}
      <div className="bg-slate-900 text-white rounded-xl p-6 mb-8">
        <h3 className="font-bold text-lg mb-4 text-blue-400">■ 私の仕事の進め方（まとめ）</h3>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {summary.map((item, idx) => (
            <li key={idx} className="flex items-center text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2 flex-shrink-0"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((val, idx) => {
          const Icon = val.icon
          return (
            <div key={idx} className="card bg-white hover:shadow-md transition-shadow border-t-4 border-t-slate-200 hover:border-t-[var(--accent-color)]">
              <div className="flex items-center mb-3">
                <Icon className="w-5 h-5 text-[var(--accent-color)] mr-2" />
                <h3 className="font-bold text-lg text-slate-800">{val.title}</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {val.desc}
              </p>
            </div>
          )
        })}

        <div className="card bg-slate-50 flex items-center justify-center text-center p-6">
          <div>
            <Handshake className="text-slate-400 w-8 h-8 mx-auto mb-2" />
            <p className="text-sm text-slate-600 font-medium">
              安心感を持って<br />
              任せていただけるよう、<br />
              丁寧な対話を心がけています。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

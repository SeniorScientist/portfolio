import { Terminal, Cpu, Cloud } from 'lucide-react'

export default function DetailedProfile() {
  return (
    <section id="detail" className="bg-slate-50 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <div className="bg-slate-900 text-white p-2 rounded mr-3">
              <Terminal className="w-6 h-6" />
            </div>
            詳細版：技術・経験
          </h2>
          <p className="text-slate-600">CTO / Tech Lead向け詳細情報</p>
        </div>

        <div className="space-y-8">
          {/* Core Competence */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-6 border-b pb-2">コアコンピタンス</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-slate-800 mb-3 flex items-center">
                  <Cpu className="mr-2 text-blue-600 w-5 h-5" />
                  生成AI / LLM エンジニアリング
                </h4>
                <p className="text-slate-600 text-sm mb-4">
                  GPT-4, Claude 3, Gemini 等のモデル特性を理解し、LangChainや独自スクリプトで制御。
                  RAG構築における検索精度向上（Hybrid Search, Re-ranking）や、AIエージェントの自律動作設計に強み。
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-3 flex items-center">
                  <Cloud className="mr-2 text-blue-600 w-5 h-5" />
                  クラウドネイティブ開発
                </h4>
                <p className="text-slate-600 text-sm mb-4">
                  AWS（CDK/Terraform）を用いたIaCを徹底。
                  サーバレス（Lambda/Fargate）を基本とし、スケーラビリティと運用コストを最適化したアーキテクチャを構築。
                </p>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-6 border-b pb-2">技術スタック・得意領域</h3>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center">
                <span className="w-32 font-bold text-slate-700 flex-shrink-0">AI / LLM</span>
                <div className="flex-grow flex flex-wrap gap-2">
                  {['OpenAI API', 'Claude API', 'Gemini', 'LangChain', 'LlamaIndex', 'RAG', 'Vector DB', 'Prompt Eng.'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-sm font-medium">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center">
                <span className="w-32 font-bold text-slate-700 flex-shrink-0">Backend</span>
                <div className="flex-grow flex flex-wrap gap-2">
                  {['Go', 'Python', 'Node.js', 'TypeScript', 'GraphQL', 'REST API', 'gRPC'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-700 rounded text-sm font-medium">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center">
                <span className="w-32 font-bold text-slate-700 flex-shrink-0">Infra / Cloud</span>
                <div className="flex-grow flex flex-wrap gap-2">
                  {['AWS', 'Terraform', 'CDK', 'Docker', 'Elasticsearch', 'CI/CD (GitHub Actions)'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-700 rounded text-sm font-medium">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center">
                <span className="w-32 font-bold text-slate-700 flex-shrink-0">Frontend</span>
                <div className="flex-grow flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-700 rounded text-sm font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Twitter, Github, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-6">Contact</h2>
        <p className="mb-8 max-w-xl mx-auto">
          カジュアル面談、技術に関するご相談など、お気軽にご連絡ください。<br />
          スタートアップのスピード感に合わせて、柔軟に対応いたします。
        </p>

        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://x.com/Trickle_HQ" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <div className="text-sm border-t border-slate-800 pt-8">
          <p>&copy; {currentYear} AI Engineer Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

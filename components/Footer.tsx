import { Github, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-5xl mx-auto px-6">
        {/* Contact Info */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
          <p className="mb-6 max-w-xl mx-auto text-sm">
            カジュアル面談、技術に関するご相談など、お気軽にご連絡ください。<br />
            スタートアップのスピード感に合わせて、柔軟に対応いたします。
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://github.com/ThanhTam1122" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="mailto:f.nowak.w@gmail.com" 
              className="hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <p className="text-sm text-slate-500">
            f.nowak.w@gmail.com
          </p>
        </div>

        <div className="text-sm border-t border-slate-800 pt-8 text-center">
          <p>&copy; {currentYear} ダオ・タム. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

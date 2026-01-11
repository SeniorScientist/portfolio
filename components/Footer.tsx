import { Twitter, Github, Mail, MessageCircle } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-5xl mx-auto px-6">
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 mb-12 text-center text-white">
          <MessageCircle className="w-10 h-10 mx-auto mb-4 opacity-90" />
          <h2 className="text-2xl font-bold mb-3">ご覧いただきありがとうございます</h2>
          <p className="mb-6 text-blue-100 max-w-lg mx-auto">
            面談・技術ディスカッションをご希望の方は、<br />
            お気軽にご連絡ください。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://x.com/Trickle_HQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
            >
              <Twitter className="w-5 h-5 mr-2" />
              X（Twitter）でDM
            </a>
            <a 
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-400 transition-colors border border-blue-400"
            >
              <Mail className="w-5 h-5 mr-2" />
              メールで連絡
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
          <p className="mb-6 max-w-xl mx-auto text-sm">
            カジュアル面談、技術に関するご相談など、お気軽にご連絡ください。<br />
            スタートアップのスピード感に合わせて、柔軟に対応いたします。
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://x.com/Trickle_HQ" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="text-sm border-t border-slate-800 pt-8 text-center">
          <p>&copy; {currentYear} AI Engineer Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

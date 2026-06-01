export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Chrome Extension
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Schedule Browser Form Submissions{" "}
          <span className="text-[#58a6ff]">Automatically</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Record any form once, then let FormScheduler replay it on your schedule — daily reports, recurring applications, compliance filings — hands-free.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get FormScheduler — $19/mo
          </a>
          <a
            href="#faq"
            className="px-8 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-[#8b949e]">
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Record any web form</li>
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Cron-style scheduling</li>
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> CAPTCHA handling</li>
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Dashboard management</li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited form recordings</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Up to 50 scheduled jobs</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Headless Puppeteer execution</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Email run notifications</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Priority support</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Start Now
          </a>
          <p className="mt-4 text-xs text-[#8b949e]">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does form recording work?</h3>
            <p className="text-[#8b949e] text-sm">Install the Chrome extension, click Record, fill out any form as you normally would, then click Stop. FormScheduler captures every field interaction and stores it securely for replay.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can it handle CAPTCHAs?</h3>
            <p className="text-[#8b949e] text-sm">Yes. FormScheduler integrates with leading CAPTCHA-solving services to automatically resolve common challenges during headless playback, keeping your scheduled jobs running without interruption.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is my form data secure?</h3>
            <p className="text-[#8b949e] text-sm">All recorded data is encrypted at rest and in transit. Sensitive fields like passwords are stored using AES-256 encryption and are never exposed in plain text in the dashboard.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#8b949e]">
        © {new Date().getFullYear()} FormScheduler. All rights reserved.
      </footer>
    </main>
  );
}

export const metadata = { title: "Privacy Policy — ZARINÉ" };

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 leading-relaxed text-white/80">
      <h1 className="text-4xl font-semibold mb-6 text-white">Privacy Policy</h1>

      <p className="mb-6">
        Your privacy is important to us. This Privacy Policy explains how ZARINÉ collects,
        uses, and protects your personal information when you visit our website or make a
        purchase.
      </p>

      <h2 className="text-2xl mt-8 mb-4 text-white">1. Data Controller</h2>
      <p className="mb-4">
        The data controller responsible for your information is ZARINÉ, Torino, Italy.
        You may contact us at <a href="mailto:info@zarine.com" className="underline">info@zarine.com</a>.
      </p>

      <h2 className="text-2xl mt-8 mb-4 text-white">2. Data We Collect</h2>
      <p className="mb-4">
        We collect personal data such as your name, email, shipping address, and payment
        information only when necessary to process your order or respond to inquiries.
        We also collect anonymous data (e.g., browser type, device, and page visits)
        through cookies for analytics purposes.
      </p>

      <h2 className="text-2xl mt-8 mb-4 text-white">3. How We Use Your Data</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>To process your purchases and provide customer support</li>
        <li>To improve the performance and design of our website</li>
        <li>To send updates or promotional materials (only if you opt in)</li>
      </ul>

      <h2 className="text-2xl mt-8 mb-4 text-white">4. Data Retention</h2>
      <p className="mb-4">
        Your personal data is retained only as long as necessary for the purposes
        described above, unless otherwise required by law.
      </p>

      <h2 className="text-2xl mt-8 mb-4 text-white">5. Data Security</h2>
      <p className="mb-4">
        We employ secure payment systems and encryption methods to protect your personal
        information. No payment data is stored on our servers.
      </p>

      <h2 className="text-2xl mt-8 mb-4 text-white">6. Your Rights</h2>
      <p className="mb-4">
        Under the EU GDPR, you have the right to access, correct, delete, or restrict
        your data. To exercise these rights, contact us at
        <a href="mailto:info@zarine.com" className="underline"> info@zarine.com</a>.
      </p>

      <h2 className="text-2xl mt-8 mb-4 text-white">7. Updates</h2>
      <p>
        ZARINÉ may update this policy periodically. Any changes will be posted on this
        page with a revised date.
      </p>
    </div>
  );
}

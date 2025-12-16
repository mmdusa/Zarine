export const metadata = { title: "Cookie Policy — ZARINÉ" };

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 leading-relaxed text-white/80">
      <h1 className="text-4xl font-semibold mb-6 text-white">Cookie Policy</h1>

      <p className="mb-6">
        ZARINÉ uses cookies to enhance your browsing experience and to understand how
        visitors use our website. This page explains what cookies are, which types we
        use, and how you can control them.
      </p>

      <h2 className="text-2xl mt-8 mb-4 text-white">1. What Are Cookies?</h2>
      <p className="mb-4">
        Cookies are small text files stored on your device when you visit a website. They
        help the site remember your preferences and improve performance.
      </p>

      <h2 className="text-2xl mt-8 mb-4 text-white">2. Types of Cookies We Use</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><b>Essential Cookies</b> — required for site functionality (e.g. navigation, cart).</li>
        <li><b>Analytics Cookies</b> — help us understand how visitors interact with the website.</li>
        <li><b>Preference Cookies</b> — remember your choices like language or location.</li>
        <li><b>Third-Party Cookies</b> — may come from tools such as Google Analytics or embedded videos.</li>
      </ul>

      <h2 className="text-2xl mt-8 mb-4 text-white">3. How to Manage Cookies</h2>
      <p className="mb-4">
        You can disable cookies directly from your browser settings. Please note that
        disabling essential cookies may affect the proper functioning of the site.
      </p>

      <h2 className="text-2xl mt-8 mb-4 text-white">4. Consent</h2>
      <p>
        By continuing to browse this website, you consent to the use of cookies in
        accordance with this policy.
      </p>
    </div>
  );
}

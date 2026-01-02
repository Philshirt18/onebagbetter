export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-display text-3xl font-bold text-gray-800 mb-8 text-center">
            Privacy Policy
          </h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <div className="bg-lime-50 border border-lime-200 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-bold text-lime-800 mb-2">🌱 Our Privacy Promise</h2>
              <p className="text-lime-700">
                <strong>We don't collect personal data or payments. We only collect rubbish—so together we can win time for what matters.</strong>
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                One Bag Better is designed with privacy in mind. We collect minimal, non-personal information:
              </p>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">What We DO Collect:</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li><strong>Trash Collection Data:</strong> Amount collected (bags, kg, lbs)</li>
                <li><strong>Optional Location:</strong> General location if you choose to share (e.g., "Berlin", "Central Park")</li>
                <li><strong>Optional Name:</strong> First name or nickname if you want credit for your cleanup</li>
                <li><strong>Timestamps:</strong> When collection entries are created</li>
                <li><strong>Local Storage:</strong> Your welcome banner preference (stored in your browser only)</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">What We DON'T Collect:</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>❌ Email addresses</li>
                <li>❌ Phone numbers</li>
                <li>❌ Payment information</li>
                <li>❌ Personal identification documents</li>
                <li>❌ Tracking cookies</li>
                <li>❌ IP addresses for tracking</li>
                <li>❌ Device fingerprinting</li>
                <li>❌ Third-party analytics</li>
                <li>❌ Advertising data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                The minimal data we collect is used exclusively for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Displaying community statistics (total bags collected, entries, etc.)</li>
                <li>Showing recent community activity in the activity feed</li>
                <li>Calculating environmental impact estimates (bottles saved, garbage trucks filled)</li>
                <li>Providing milestone celebrations and progress tracking</li>
                <li>Generating shareable social media content (only when you choose to share)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">3. Data Storage & Security</h2>
              <p className="text-gray-600 mb-4">
                Your collection data is stored securely on our servers with the following protections:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Data is stored in a secure database with access controls</li>
                <li>No personal identifiers are linked to collection entries</li>
                <li>Data is used solely for community statistics and motivation</li>
                <li>We do not create user profiles or track individual behavior</li>
                <li>Local storage (browser-based) is used only for UI preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">4. Data Sharing</h2>
              <p className="text-gray-600 mb-4">
                <strong>We do not share, sell, or distribute your data to third parties.</strong>
              </p>
              <p className="text-gray-600 mb-4">
                The only "sharing" that occurs is:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Community statistics displayed publicly on the website (aggregated, anonymous)</li>
                <li>Recent activity feed showing optional names/locations you chose to provide</li>
                <li>Social media sharing features that YOU control and initiate</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">5. Social Media Integration</h2>
              <p className="text-gray-600 mb-4">
                Our platform includes optional social media features:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Share buttons generate text based on your collection entry</li>
                <li>You control what gets posted to your social media accounts</li>
                <li>We link to our Instagram account @onebagbetter for community building</li>
                <li>No automatic posting or data sharing with social media platforms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">6. Cookies & Tracking</h2>
              <p className="text-gray-600 mb-4">
                We use minimal browser storage:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li><strong>Local Storage:</strong> Remembers if you've seen the welcome banner</li>
                <li><strong>No Tracking Cookies:</strong> We don't use cookies to track your behavior</li>
                <li><strong>No Third-Party Analytics:</strong> No Google Analytics, Facebook Pixel, etc.</li>
                <li><strong>No Advertising:</strong> No ad networks or marketing pixels</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">7. Your Rights</h2>
              <p className="text-gray-600 mb-4">
                Since we collect minimal, non-personal data, your rights are straightforward:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li><strong>Transparency:</strong> This policy explains exactly what we collect</li>
                <li><strong>Control:</strong> You choose what optional information to provide</li>
                <li><strong>Access:</strong> Community data is visible to everyone on the platform</li>
                <li><strong>No Account Required:</strong> Use the service without creating accounts</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">8. Children's Privacy</h2>
              <p className="text-gray-600 mb-4">
                Our service is safe for all ages since we don't collect personal information. 
                However, we recommend adult supervision for children participating in cleanup activities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-600 mb-4">
                We may update this privacy policy to reflect changes in our service. 
                Any changes will be posted on this page with an updated date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">10. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                Questions about privacy? Reach out to us on Instagram 
                <a href="https://www.instagram.com/onebagbetter/" target="_blank" rel="noopener noreferrer" 
                   className="text-lime-600 hover:text-lime-700 font-medium">
                  @onebagbetter
                </a>
              </p>
            </section>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <a 
              href="/" 
              className="btn-adventure inline-block px-6 py-3 font-medium"
            >
              Back to One Bag Better
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
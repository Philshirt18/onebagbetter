export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-display text-3xl font-bold text-gray-800 mb-8 text-center">
            Terms & Conditions
          </h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">1. About One Bag Better</h2>
              <p className="text-gray-600 mb-4">
                One Bag Better is a community platform that tracks trash collection efforts to inspire environmental action. 
                We believe in transparency and simplicity - we don't collect personal data or payments, we only collect rubbish data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">2. What We Collect</h2>
              <p className="text-gray-600 mb-4">
                When you use our service, we only collect:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Amount of trash collected (in bags, kg, or lbs)</li>
                <li>Optional location information (if you choose to provide it)</li>
                <li>Optional name (if you choose to provide it for credit)</li>
                <li>Timestamp of when the entry was created</li>
              </ul>
              <p className="text-gray-600 mb-4">
                <strong>We do NOT collect:</strong> Email addresses, phone numbers, payment information, 
                personal identification, tracking cookies, or any other personal data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                The minimal information we collect is used solely to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Display community statistics and progress</li>
                <li>Show recent collection activities (if you provide a name/location)</li>
                <li>Calculate environmental impact metrics</li>
                <li>Motivate the community with milestone achievements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">4. Data Storage</h2>
              <p className="text-gray-600 mb-4">
                Your collection data is stored locally on our servers solely for the purpose of 
                displaying community statistics. We do not share, sell, or distribute this information 
                to third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">5. Social Media Integration</h2>
              <p className="text-gray-600 mb-4">
                Our platform includes social media sharing features that help you share your 
                environmental impact. When you use these features:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>We generate shareable text based on your collection entry</li>
                <li>You control what gets shared on your social media accounts</li>
                <li>We encourage use of the hashtag #onebagbetter to build community</li>
                <li>We may link to our Instagram account @onebagbetter</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">6. User Responsibilities</h2>
              <p className="text-gray-600 mb-4">
                By using One Bag Better, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Provide accurate information about your trash collection activities</li>
                <li>Use the platform for its intended environmental purpose</li>
                <li>Respect the community and avoid spam or inappropriate content</li>
                <li>Take responsibility for your own safety during cleanup activities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">7. Disclaimer</h2>
              <p className="text-gray-600 mb-4">
                One Bag Better is provided "as is" for community motivation and environmental awareness. 
                We are not responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Safety during trash collection activities</li>
                <li>Accuracy of user-submitted data</li>
                <li>Availability of the service at all times</li>
                <li>Environmental impact calculations (these are estimates)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">8. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We may update these terms occasionally to reflect changes in our service. 
                Continued use of the platform constitutes acceptance of any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">9. Contact</h2>
              <p className="text-gray-600 mb-4">
                Questions about these terms? Reach out to us on Instagram 
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
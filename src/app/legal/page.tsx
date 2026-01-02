export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-display text-3xl font-bold text-gray-800 mb-8 text-center">
            Legal Notice / Aviso Legal
          </h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <div className="bg-lime-50 border border-lime-200 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-bold text-lime-800 mb-2">🌱 Environmental Initiative</h2>
              <p className="text-lime-700">
                This website is operated for non-commercial, environmental purposes to encourage community cleanup efforts.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Website Operator Information</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-2">
                  <strong>Operator:</strong> Philipp Schaefer
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Based in:</strong> Almayate, Spain
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> appfactorymalaga@gmail.com
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Purpose and Nature</h2>
              <p className="text-gray-600 mb-4">
                One Bag Better is a non-commercial environmental initiative designed to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Encourage community participation in environmental cleanup efforts</li>
                <li>Track collective impact of trash collection activities</li>
                <li>Provide motivation and recognition for environmental stewardship</li>
                <li>Build awareness about environmental responsibility</li>
              </ul>
              <p className="text-gray-600">
                This website operates without commercial intent and does not generate revenue.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Applicable Law and Jurisdiction</h2>
              <p className="text-gray-600 mb-4">
                This website is operated from Spain and complies with Spanish law, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li><strong>LSSI-CE</strong> (Ley de Servicios de la Sociedad de la Información y de Comercio Electrónico)</li>
                <li><strong>GDPR</strong> (General Data Protection Regulation)</li>
                <li><strong>Spanish Data Protection Law</strong> (LOPDGDD)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                The content, design, and functionality of this website are owned by the operator. 
                The environmental mission and community data are shared for the common good of environmental protection.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                This website is provided "as is" for environmental and educational purposes. 
                The operator makes no warranties regarding the accuracy of community-submitted data 
                and is not liable for any damages arising from the use of this website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For questions about this legal notice or the website's operation, please contact:
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700">
                  <strong>Email:</strong> appfactorymalaga@gmail.com<br />
                  <strong>Instagram:</strong> 
                  <a href="https://www.instagram.com/onebagbetter/" target="_blank" rel="noopener noreferrer" 
                     className="text-lime-600 hover:text-lime-700 font-medium ml-1">
                    @onebagbetter
                  </a>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Related Legal Documents</h2>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/privacy" 
                  className="text-lime-600 hover:text-lime-700 font-medium underline"
                >
                  Privacy Policy
                </a>
                <a 
                  href="/terms" 
                  className="text-lime-600 hover:text-lime-700 font-medium underline"
                >
                  Terms & Conditions
                </a>
              </div>
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
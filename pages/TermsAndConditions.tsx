import React from 'react';
import { Layout } from '../components/Layout';
import { FileText } from 'lucide-react';

export const TermsAndConditions: React.FC = () => {
  return (
    <Layout>
      <section className="min-h-screen bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-8 h-8 text-brand-highlight" />
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark">Terms & Conditions</h1>
            </div>
            <p className="text-gray-600 text-lg">Last Updated: March 2026</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on iConstructions Real Estate's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">3. Disclaimer</h2>
              <p>
                The materials on iConstructions Real Estate's website are provided on an 'as is' basis. iConstructions Real Estate makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">4. Limitations</h2>
              <p>
                In no event shall iConstructions Real Estate or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on iConstructions Real Estate's website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">5. Accuracy of Materials</h2>
              <p>
                The materials appearing on iConstructions Real Estate's website could include technical, typographical, or photographic errors. iConstructions Real Estate does not warrant that any of the materials on its website are accurate, complete, or current. iConstructions Real Estate may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">6. Links</h2>
              <p>
                iConstructions Real Estate has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by iConstructions Real Estate of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">7. Modifications</h2>
              <p>
                iConstructions Real Estate may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">8. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in Ananthapur, Andhra Pradesh.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">9. Contact Information</h2>
              <p>
                If you have any questions about these Terms & Conditions, please contact us at:<br />
                Email: hello@iconstructions.in<br />
                Phone: +91 93472 44397
              </p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};


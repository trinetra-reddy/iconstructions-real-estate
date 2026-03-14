import React from 'react';
import { Layout } from '../components/Layout';
import { CheckCircle, Award } from 'lucide-react';

export const RERACompliance: React.FC = () => {
  return (
    <Layout>
      <section className="min-h-screen bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-8 h-8 text-brand-highlight" />
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark">RERA Compliance</h1>
            </div>
            <p className="text-gray-600 text-lg">Real Estate Regulatory Authority Compliance & Certifications</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">About RERA</h2>
              <p>
                The Real Estate (Regulation and Development) Act, 2016 (RERA) is a landmark legislation enacted by the Government of India to regulate the real estate sector and protect the interests of homebuyers. iConstructions Real Estate is fully compliant with all RERA regulations and requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">Our RERA Certifications</h2>
              <div className="bg-brand-light p-6 rounded-lg space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-highlight flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-brand-dark">All Projects RERA Registered</p>
                    <p className="text-sm text-gray-600">Every residential and commercial project is registered with RERA before launch</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-highlight flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-brand-dark">Transparent Pricing & Specifications</p>
                    <p className="text-sm text-gray-600">All project details, pricing, and specifications are disclosed upfront</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-highlight flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-brand-dark">Buyer Protection Fund</p>
                    <p className="text-sm text-gray-600">All projects maintain a buyer protection fund as per RERA guidelines</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-highlight flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-brand-dark">Timely Delivery Commitment</p>
                    <p className="text-sm text-gray-600">We commit to timely project delivery with penalty clauses for delays</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">RERA Compliance Features</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Project Registration:</strong> All projects registered with RERA before sales commencement</li>
                <li><strong>Escrow Account:</strong> Buyer funds held in separate escrow accounts for security</li>
                <li><strong>Transparent Agreements:</strong> Standardized buyer agreements as per RERA format</li>
                <li><strong>Regular Updates:</strong> Monthly project progress updates to registered buyers</li>
                <li><strong>Dispute Resolution:</strong> Access to RERA Ombudsman for dispute resolution</li>
                <li><strong>Legal Compliance:</strong> Full compliance with municipal approvals and DTCP regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">Our Registered Projects</h2>
              <p>
                All iConstructions Real Estate projects in Ananthapur, Hyderabad, Vijayawada, and Kurnool are RERA registered. Each project has a unique RERA registration number and is subject to regular compliance audits.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">Buyer Rights Under RERA</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Right to receive complete project information</li>
                <li>Right to timely delivery of property</li>
                <li>Right to receive interest on delayed possession</li>
                <li>Right to file complaints with RERA authority</li>
                <li>Right to refund if project is not completed</li>
                <li>Right to access project progress information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">Contact RERA Authority</h2>
              <p>
                For RERA-related inquiries or complaints, you can contact the RERA Authority in Andhra Pradesh:<br />
                <strong>RERA Andhra Pradesh</strong><br />
                Website: www.rera.ap.gov.in<br />
                Email: contact@rera.ap.gov.in
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">Our Commitment</h2>
              <p>
                iConstructions Real Estate is committed to maintaining the highest standards of RERA compliance and transparency. We believe in building trust with our customers through ethical practices, timely delivery, and complete adherence to all regulatory requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">Questions?</h2>
              <p>
                For RERA compliance-related questions, contact us at:<br />
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


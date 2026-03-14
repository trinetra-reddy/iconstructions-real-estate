import React from 'react';
import { Layout } from '../components/Layout';
import { Shield } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <Layout>
      <section className="min-h-screen bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-brand-highlight" />
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark">Privacy Policy</h1>
            </div>
            <p className="text-gray-600 text-lg">Last Updated: March 2026</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">1. Introduction</h2>
              <p>
                iConstructions Real Estate ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">2. Information We Collect</h2>
              <p className="font-semibold text-brand-dark">Personal Information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, phone number</li>
                <li>Mailing address and property preferences</li>
                <li>Financial information for loan assistance</li>
                <li>Communication preferences</li>
              </ul>
              <p className="font-semibold text-brand-dark mt-4">Automatically Collected Information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Browser type and IP address</li>
                <li>Pages visited and time spent</li>
                <li>Cookies and tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process property inquiries and provide information</li>
                <li>Send property updates and newsletters</li>
                <li>Facilitate loan assistance applications</li>
                <li>Improve website functionality and user experience</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">4. Data Security</h2>
              <p>
                We implement industry-standard security measures including SSL encryption, secure servers, and restricted access to personal information. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">5. Third-Party Sharing</h2>
              <p>
                We do not sell your personal information. We may share information with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Bank partners for loan assistance</li>
                <li>Legal and compliance advisors</li>
                <li>Service providers (email, hosting)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">6. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. Contact us at hello@iconstructions.in to exercise these rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">7. Contact Us</h2>
              <p>
                For privacy concerns, contact us at:<br />
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


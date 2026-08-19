
import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Beasley Consulting</title>
        <meta name="description" content="Privacy Policy for Beasley Consulting - Learn how we collect, use, and protect your personal information." />
      </Head>
      
      <Layout>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600">Last Updated: May 14, 2025</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
                <p>
                  Beasley Consulting ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
                <p>We may collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and job title when you contact us through our website forms.</li>
                  <li><strong>Usage Data:</strong> Information about how you use our website, including IP address, browser type, pages visited, time spent on pages, and other browsing information.</li>
                  <li><strong>Communication Data:</strong> Any information you provide when you communicate with us via email, phone, or other channels.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
                <p>We may use the information we collect for various purposes, including:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Providing, maintaining, and improving our services</li>
                  <li>Responding to your inquiries and requests</li>
                  <li>Sending you marketing communications (with your consent)</li>
                  <li>Analyzing website usage to improve user experience</li>
                  <li>Complying with legal obligations</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">4. Information Sharing and Disclosure</h2>
                <p>We may share your information in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Service Providers:</strong> We may share your information with third-party vendors who provide services on our behalf.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
                  <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
                <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>The right to access your personal information</li>
                  <li>The right to correct inaccurate or incomplete information</li>
                  <li>The right to request deletion of your personal information</li>
                  <li>The right to restrict or object to processing of your personal information</li>
                  <li>The right to data portability</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">7. Cookies and Similar Technologies</h2>
                <p>
                  We use cookies and similar tracking technologies to collect information about your browsing activities on our website. You can manage your cookie preferences through your browser settings.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">8. Children's Privacy</h2>
                <p>
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <address className="not-italic mt-4">
                  <p>Beasley Consulting</p>
                  <p>10837 Verde Visa Drive</p>
                  <p>Fairfax, VA 22030</p>
                  <p className="mt-2">Email: mike@mbeasleyllc.com</p>
                </address>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

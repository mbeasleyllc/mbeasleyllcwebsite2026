
import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service | Beasley Consulting</title>
        <meta name="description" content="Terms of Service for Beasley Consulting - Review our terms and conditions for using our services and website." />
      </Head>
      
      <Layout>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600">Last Updated: May 14, 2025</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
                <p>
                  Welcome to Beasley Consulting. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our website or services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our website or services.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">2. Definitions</h2>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>"Company," "we," "our," or "us"</strong> refers to Beasley Consulting.</li>
                  <li><strong>"Website"</strong> refers to our website located at www.mbeasleyllc.com.</li>
                  <li><strong>"Services"</strong> refers to the consulting services we provide.</li>
                  <li><strong>"You" or "your"</strong> refers to the individual or entity accessing or using our website or services.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">3. Use of Our Website</h2>
                <p>You agree to use our website only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use of the website. Prohibited uses include:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Using the website in any way that violates applicable laws or regulations</li>
                  <li>Attempting to gain unauthorized access to our systems or user accounts</li>
                  <li>Engaging in any activity that disrupts or interferes with our website</li>
                  <li>Collecting or harvesting any information from our website without our permission</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">4. Intellectual Property</h2>
                <p>
                  All content on our website, including text, graphics, logos, images, and software, is the property of Beasley Consulting or our licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our express written consent.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">5. Service Engagement</h2>
                <p>
                  Our consulting services are provided under separate agreements. These Terms do not constitute an offer to provide services. Any engagement for our services requires a separate written agreement that outlines the specific terms, conditions, and scope of work.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">6. Disclaimer of Warranties</h2>
                <p>
                  Our website and its content are provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not warrant that our website will be uninterrupted, error-free, or free from harmful components.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, Beasley Consulting shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our website or services.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">8. Indemnification</h2>
                <p>
                  You agree to indemnify and hold harmless Beasley Consulting and its officers, directors, employees, and agents from any claims, damages, liabilities, costs, or expenses arising from your use of our website or violation of these Terms.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">9. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the Commonwealth of Virginia, without regard to its conflict of law principles. Any disputes arising under these Terms shall be resolved in the courts of Fairfax County, Virginia.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">10. Changes to These Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the updated Terms on this page and updating the "Last Updated" date. Your continued use of our website after any changes indicates your acceptance of the modified Terms.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">11. Severability</h2>
                <p>
                  If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will continue in full force and effect.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">12. Contact Us</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
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

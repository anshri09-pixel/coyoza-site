import { Shield, Lock, Eye, FileText, Mail } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-cyan-600 to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-4">
            <Shield size={48} />
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-xl text-cyan-50">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 mb-8">
              <p className="text-gray-800 leading-relaxed">
                At Coyoza Maiden A3 Solution Private Limited, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information in compliance with ISO 27001:2017 standards.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <FileText className="text-cyan-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">1. Information We Collect</h2>
                </div>
                <div className="ml-13 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">1.1 Personal Information</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We may collect personal information that you voluntarily provide to us when you:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 ml-4">
                      <li>Contact us through our website or email</li>
                      <li>Request information about our services</li>
                      <li>Enter into a business relationship with us</li>
                      <li>Apply for employment opportunities</li>
                    </ul>
                    <p className="text-gray-700 mt-3">
                      This information may include: name, email address, phone number, company name, job title, and any other information you choose to provide.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">1.2 Business Information</h3>
                    <p className="text-gray-700 leading-relaxed">
                      In the course of providing our BPO services, we may process business information and data on behalf of our clients in accordance with contractual agreements and applicable data protection regulations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">1.3 Technical Information</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We may automatically collect certain technical information when you visit our website, including IP address, browser type, device information, and usage data through cookies and similar technologies.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Eye className="text-teal-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">2. How We Use Your Information</h2>
                </div>
                <div className="ml-13 space-y-3">
                  <p className="text-gray-700 leading-relaxed">
                    We use the information we collect for the following purposes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>To provide and maintain our BPO services</li>
                    <li>To communicate with you regarding our services, inquiries, and support</li>
                    <li>To improve our services and develop new offerings</li>
                    <li>To comply with legal obligations and regulatory requirements</li>
                    <li>To protect the security and integrity of our systems and data</li>
                    <li>To fulfill contractual obligations with our clients</li>
                    <li>To process employment applications</li>
                    <li>To send periodic emails regarding our services or company updates (with your consent)</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <Lock className="text-cyan-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">3. Data Security</h2>
                </div>
                <div className="ml-13 space-y-3">
                  <p className="text-gray-700 leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security practices are aligned with ISO 27001:2017 standards and include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Encryption of sensitive data in transit and at rest</li>
                    <li>Regular security assessments and audits</li>
                    <li>Access controls and authentication mechanisms</li>
                    <li>Employee training on data protection and confidentiality</li>
                    <li>Secure data storage and backup procedures</li>
                    <li>Incident response and breach notification procedures</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    While we strive to protect your personal information, no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee absolute security but are committed to maintaining the highest standards of data protection.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Shield className="text-teal-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">4. Information Sharing and Disclosure</h2>
                </div>
                <div className="ml-13 space-y-3">
                  <p className="text-gray-700 leading-relaxed">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our business, subject to confidentiality agreements</li>
                    <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with appropriate safeguards</li>
                    <li><strong>Protection of Rights:</strong> To protect our rights, property, or safety, or that of our clients or others</li>
                    <li><strong>With Consent:</strong> When you have given us explicit consent to share your information</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <FileText className="text-cyan-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">5. Your Rights</h2>
                </div>
                <div className="ml-13 space-y-3">
                  <p className="text-gray-700 leading-relaxed">
                    You have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>Access:</strong> Request access to your personal information we hold</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal obligations</li>
                    <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                    <li><strong>Objection:</strong> Object to processing of your personal information</li>
                    <li><strong>Data Portability:</strong> Request transfer of your data to another organization</li>
                    <li><strong>Withdraw Consent:</strong> Withdraw consent at any time where we rely on consent for processing</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    To exercise any of these rights, please contact us using the information provided below.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Lock className="text-teal-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">6. Data Retention</h2>
                </div>
                <div className="ml-13">
                  <p className="text-gray-700 leading-relaxed">
                    We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements. When information is no longer required, we securely delete or anonymize it in accordance with our data retention policies and applicable regulations.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <Shield className="text-cyan-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">7. Cookies and Tracking Technologies</h2>
                </div>
                <div className="ml-13">
                  <p className="text-gray-700 leading-relaxed">
                    Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand user preferences. You can control cookie settings through your browser preferences. Note that disabling cookies may affect the functionality of certain features on our website.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <FileText className="text-teal-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">8. International Data Transfers</h2>
                </div>
                <div className="ml-13">
                  <p className="text-gray-700 leading-relaxed">
                    Your information may be transferred to and processed in countries other than your country of residence. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information, including standard contractual clauses and adherence to international data protection frameworks.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <Eye className="text-cyan-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">9. Children's Privacy</h2>
                </div>
                <div className="ml-13">
                  <p className="text-gray-700 leading-relaxed">
                    Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without parental consent, we will take steps to delete that information promptly.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <FileText className="text-teal-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">10. Changes to This Privacy Policy</h2>
                </div>
                <div className="ml-13">
                  <p className="text-gray-700 leading-relaxed">
                    We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or for other operational reasons. We will notify you of any material changes by posting the updated policy on our website with a revised "Last Updated" date. We encourage you to review this Privacy Policy periodically.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <Mail className="text-cyan-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">11. Contact Us</h2>
                </div>
                <div className="ml-13">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-3">
                      Coyoza Maiden A3 Solution Private Limited
                    </p>
                    <div className="space-y-2 text-gray-700">
                      <p>
                        <strong>Email:</strong>{' '}
                        <a href="mailto:admin@cma3solutions.com" className="text-cyan-600 hover:text-cyan-700">
                          admin@cma3solutions.com
                        </a>
                      </p>
                      <p>
                        <strong>Phone:</strong>{' '}
                        <a href="tel:8778068688" className="text-cyan-600 hover:text-cyan-700">
                          +91 87780 68688
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 mt-8">
                <h3 className="font-semibold text-gray-900 mb-2">Compliance and Certifications</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our privacy and information security practices are aligned with ISO 27001:2017 standards. We are committed to maintaining the confidentiality, integrity, and availability of all information entrusted to us and continuously improving our data protection measures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

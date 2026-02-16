import { Database, FileText, BarChart3, Headphones, Clock, CheckCircle, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-cyan-600 to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-cyan-50 max-w-3xl">
            Comprehensive business process solutions tailored to meet your operational needs with quality, accuracy, and compliance at the core.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core BPO Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We specialize in non-voice processes and back-office support, delivering efficient and scalable solutions for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-cyan-500 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Database className="text-cyan-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Entry & Processing</h3>
              <p className="text-gray-600 mb-4">
                Accurate and efficient data entry services with strict quality control measures. We handle large volumes of data with precision and speed.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-cyan-600 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span className="text-sm text-gray-600">High accuracy standards</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-cyan-600 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span className="text-sm text-gray-600">Scalable solutions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-cyan-600 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span className="text-sm text-gray-600">Quick turnaround time</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-cyan-500 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="text-teal-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Document Management</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive document processing, digitization, and management services to streamline your operations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-teal-600 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span className="text-sm text-gray-600">Document digitization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-600 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span className="text-sm text-gray-600">File organization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-600 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span className="text-sm text-gray-600">Secure storage</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-cyan-500 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="text-cyan-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Analytics & Reporting</h3>
              <p className="text-gray-600 mb-4">
                Transform raw data into actionable insights with our comprehensive analytics and reporting services.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-cyan-600 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span className="text-sm text-gray-600">Custom reports</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-cyan-600 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span className="text-sm text-gray-600">Data visualization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-cyan-600 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span className="text-sm text-gray-600">Business intelligence</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-cyan-500 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Headphones className="text-teal-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Back Office Support</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive administrative and operational support to streamline your back-office functions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-teal-600 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span className="text-sm text-gray-600">Administrative tasks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-600 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span className="text-sm text-gray-600">Email management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-600 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span className="text-sm text-gray-600">Process automation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-cyan-500 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="text-cyan-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transaction Processing</h3>
              <p className="text-gray-600 mb-4">
                Efficient processing of business transactions with focus on accuracy and compliance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-cyan-600 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span className="text-sm text-gray-600">Order processing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-cyan-600 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span className="text-sm text-gray-600">Invoice processing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-cyan-600 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span className="text-sm text-gray-600">Payment reconciliation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-cyan-500 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="text-teal-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Solutions</h3>
              <p className="text-gray-600 mb-4">
                Tailored BPO solutions designed specifically for your unique business requirements.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-teal-600 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span className="text-sm text-gray-600">Flexible processes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-600 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span className="text-sm text-gray-600">Scalable infrastructure</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-teal-600 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span className="text-sm text-gray-600">Dedicated support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a structured methodology to ensure consistent quality and reliability in every engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">
                Understanding your requirements and challenges
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600 text-sm">
                Designing customized solutions and workflows
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600 text-sm">
                Executing with precision and quality control
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Optimization</h3>
              <p className="text-gray-600 text-sm">
                Continuous improvement and refinement
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Our Services Stand Out
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-cyan-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">ISO Certified Quality</h3>
              <p className="text-gray-600">
                Our processes meet international standards for quality management and information security.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="text-teal-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Data Security</h3>
              <p className="text-gray-600">
                Stringent security measures to protect your sensitive information at all times.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-cyan-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Accuracy</h3>
              <p className="text-gray-600">
                Rigorous quality control processes ensure high accuracy in all deliverables.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-cyan-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Optimize Your Business Processes?
          </h2>
          <p className="text-xl text-cyan-50 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our BPO services can help streamline your operations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-cyan-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}

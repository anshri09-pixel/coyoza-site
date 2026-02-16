import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Award, Users, TrendingUp, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-cyan-600 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Excellence in Business Process Solutions
              </h1>
              <p className="text-xl mb-8 text-cyan-50">
                Delivering reliable, process-driven, and scalable business support services with a strong emphasis on quality, accuracy, and compliance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center px-6 py-3 bg-white text-cyan-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Our Services
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-700 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional team"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-cyan-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">ISO Certified</h3>
              <p className="text-gray-600">
                Certified under ISO 9001:2015 and ISO 27001:2017 standards for quality and information security management.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-teal-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Compliance Focused</h3>
              <p className="text-gray-600">
                Strong emphasis on accuracy, compliance, and data security in all our business processes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-cyan-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Scalable Solutions</h3>
              <p className="text-gray-600">
                Flexible and scalable services designed to grow with your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Coyoza Maiden A3 Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A newly incorporated BPO company focused on delivering exceptional business process solutions through innovation, integrity, and excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Business processes"
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Target className="text-cyan-600" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To provide exceptional business process solutions through innovation, integrity, and excellence. We strive to create a culture of learning, teamwork, and continuous improvement that drives lasting success for our clients, employees, and communities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Eye className="text-cyan-600" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    To be a globally trusted BPO leader that empowers people and businesses to thrive where they truly belong — creating meaningful careers and driving business success through cutting-edge strategies, trusted partnerships, and sustainable growth in evolving markets.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Users className="text-cyan-600" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Approach</h3>
                  <p className="text-gray-600">
                    We focus on non-voice processes, back-office support, and data-driven workflows with a strong emphasis on quality, accuracy, and compliance. Our structured operations ensure consistent service delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-cyan-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business Processes?
          </h2>
          <p className="text-xl text-cyan-50 mb-8 max-w-2xl mx-auto">
            Partner with us for reliable, scalable, and quality-focused BPO services.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-cyan-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Get in Touch
            <ArrowRight className="ml-2" size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
}

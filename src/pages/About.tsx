import { Target, Eye, Award, Shield, Users, TrendingUp, Heart, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-cyan-600 to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-cyan-50 max-w-3xl">
            Learn more about Coyoza Maiden A3 Solutions and our commitment to excellence in business process outsourcing.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Coyoza Maiden A3 Solutions is a newly incorporated Business Process Outsourcing (BPO) company focused on delivering reliable, process-driven, and scalable business support services.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Our core operations are centered around non-voice processes, back-office support, and data-driven workflows, with a strong emphasis on quality, accuracy, and compliance.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                As we begin our journey, we are building a dedicated team to support our clients with structured operations and consistent service delivery. Alongside our BPO services, we hold a long-term vision to expand into IT sector projects and technology-driven solutions aligned with evolving business needs.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional workspace"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <Target className="text-cyan-600" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission at Coyoza Maiden A3 Solutions is to provide exceptional business process solutions through innovation, integrity, and excellence. We strive to create a culture of learning, teamwork, and continuous improvement that drives lasting success for our clients, employees, and communities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Eye className="text-teal-600" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be a globally trusted BPO leader that empowers people and businesses to thrive where they truly belong — creating meaningful careers and driving business success through cutting-edge strategies, trusted partnerships, and sustainable growth in evolving markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-cyan-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600">
                Operating with honesty, transparency, and ethical practices in all our interactions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-teal-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                Committed to delivering the highest quality services and continuous improvement.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-cyan-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                Embracing new technologies and creative solutions to solve business challenges.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-teal-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Teamwork</h3>
              <p className="text-gray-600">
                Fostering collaboration and building strong partnerships with clients and employees.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-cyan-600">
              <div className="flex items-center space-x-4 mb-4">
                <Award className="text-cyan-600" size={48} />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">ISO 9001:2015</h3>
                  <p className="text-sm text-gray-600">Quality Management System</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Certified for maintaining the highest standards in quality management, ensuring consistent service delivery and customer satisfaction.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-teal-600">
              <div className="flex items-center space-x-4 mb-4">
                <Shield className="text-teal-600" size={48} />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">ISO 27001:2017</h3>
                  <p className="text-sm text-gray-600">Information Security Management</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Certified for implementing robust information security practices, protecting client data and maintaining confidentiality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-cyan-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Compliance Focused</h3>
              <p className="text-gray-600">
                Strong emphasis on accuracy, compliance, and regulatory adherence in all our operations.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-teal-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Scalable Solutions</h3>
              <p className="text-gray-600">
                Flexible services designed to grow with your business, from startups to enterprises.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-cyan-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dedicated Team</h3>
              <p className="text-gray-600">
                Skilled professionals committed to delivering consistent, high-quality service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

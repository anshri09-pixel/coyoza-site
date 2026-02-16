import { Link } from 'react-router-dom';
import { Mail, Phone, Award, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              src="https://raw.githubusercontent.com/anshri09-pixel/cma3-brochure/main/logo.png"
              alt="CMA3 Solutions Logo"
              className="h-16 w-auto mb-4 brightness-0 invert"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"%3E%3Crect fill="white" width="64" height="64" rx="8"/%3E%3Ctext x="32" y="44" font-family="Arial" font-size="28" font-weight="bold" fill="%23111827" text-anchor="middle"%3ECMA3%3C/text%3E%3C/svg%3E';
              }}
            />
            <h3 className="text-white text-lg font-semibold mb-2">
              Coyoza Maiden A3 Solution Private Limited
            </h3>
            <p className="text-sm leading-relaxed">
              Delivering reliable, process-driven, and scalable business support services with a focus on quality, accuracy, and compliance.
            </p>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="mailto:admin@cma3solutions.com"
                className="flex items-center space-x-2 hover:text-cyan-400 transition-colors"
              >
                <Mail size={18} />
                <span>admin@cma3solutions.com</span>
              </a>
              <a
                href="tel:8778068688"
                className="flex items-center space-x-2 hover:text-cyan-400 transition-colors"
              >
                <Phone size={18} />
                <span>+91 87780 68688</span>
              </a>
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-sm">
                <span className="font-semibold text-white">CIN:</span> U63111TZ2025PTC037097
              </p>
              <p className="text-sm">
                <span className="font-semibold text-white">GST No:</span> 33AANCC3585G1ZI
              </p>
              <a
                href="https://www.linkedin.com/company/coyoza-maiden-a3-solutions-private-limited/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-cyan-400 transition-colors text-sm"
              >
                <Linkedin size={18} />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Certifications</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Award size={20} className="text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">ISO 9001:2015</p>
                  <p className="text-sm">Quality Management System</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Award size={20} className="text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">ISO 27001:2017</p>
                  <p className="text-sm">Information Security Management</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-sm">
              © {new Date().getFullYear()} Coyoza Maiden A3 Solution Private Limited. All rights reserved.
            </p>
            <Link
              to="/privacy-policy"
              className="text-sm hover:text-cyan-400 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

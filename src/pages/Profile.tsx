import { Briefcase, GraduationCap, User, BarChart3, Users, Cog } from 'lucide-react';

export default function AlumniProfile() {
  return (
    <div className="bg-white">
      
      {/* Hero Banner with Full Image Background */}
      <section className="relative h-[520px] flex items-center text-white">
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-cyan-900 to-teal-800"
          
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-3">Anand PK</h1>
          <h2 className="text-2xl text-cyan-200 mb-4">Director & Co‑Founder</h2>
          <p className="text-lg text-gray-200 max-w-2xl leading-relaxed">
            Coyoza Maiden A3 Solution Private Limited — Business Process & Technology Services
          </p>
        </div>
      </section>

      {/* Profile Overview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">
          <div className="flex justify-center">
            <img
              src="https://raw.githubusercontent.com/anshri09-pixel/cma3-brochure/main/WhatsApp%20Image%202026-02-21%20at%201.35.48%20PM.jpeg"
              alt="Anand PK"
              className="rounded-3xl shadow-2xl w-[380px] h-[480px] object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <User className="text-cyan-600" /> Professional Overview
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Entrepreneur and business professional with multi‑industry exposure across IT services, healthcare technology, product implementation, and operations consulting. Currently leading a service‑sector organization focused on structured delivery and scalable operational support.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Experienced in client engagement, workflow optimization, automation strategy, and enterprise software lifecycle management across diverse business environments.
            </p>

            <div className="mt-8 bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <GraduationCap className="text-teal-600" /> Education
              </h3>
              <p className="text-gray-800">Bachelor of Business Administration (2013 – 2016)</p>
              <p className="text-gray-600">Kongu Arts and Science College, Erode</p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Journey */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 flex justify-center items-center gap-3">
            <Briefcase className="text-cyan-600" /> Career Journey
          </h2>

          <div className="space-y-5">
            {[
              'Process Associate — TCS, Chennai',
              'Wholesale & Retail Business Operations — Chennai',
              'Senior Process Associate — Yosicare Pvt. Ltd., Coimbatore',
              'Solution Consultant & Module Lead — Product‑based IT Sector',
              'Director & Co‑Founder — Coyoza Maiden A3 Solution Pvt. Ltd., Namakkal'
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow border-l-4 border-cyan-600">
                <p className="text-lg text-gray-800 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Core Competencies
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <BarChart3 className="mx-auto text-cyan-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold">Data Analytics</h3>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <Cog className="mx-auto text-teal-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold">Implementation & Automation</h3>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <Users className="mx-auto text-cyan-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold">Client & Operations Management</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

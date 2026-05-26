import { Briefcase, Users, ShieldCheck, TrendingUp, Send } from 'lucide-react';

export default function Careers() {
  const applyEmail = () => {
  const subject = "Job Application - Coyoza";

  const body = `Dear Hiring Team,

Please find my resume attached.

Name:
Phone:
Position Interested:
Experience:

Regards`;

  window.location.href =
    `mailto:careers@cma3solutions.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="bg-gradient-to-br from-cyan-600 to-teal-700 text-white py-20">
  	<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    	<h1 className="text-4xl md:text-5xl font-bold mb-6">
      Build Your Career With Us
    </h1>
    <p className="text-xl text-cyan-50 max-w-3xl">
      Join a process-driven organization focused on quality, compliance, and long-term professional growth.
    </p>
  </div>
</section>

      {/* WHY JOIN */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-14">
            Why Work at CMA3
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="p-6 border rounded-xl text-center hover:shadow-lg transition">
              <Users className="mx-auto text-cyan-600 mb-4" size={36} />
              <h3 className="font-semibold text-lg mb-2">Team Culture</h3>
              <p className="text-gray-600 text-sm">
                Collaborative environment focused on accountability and support.
              </p>
            </div>

            <div className="p-6 border rounded-xl text-center hover:shadow-lg transition">
              <ShieldCheck className="mx-auto text-teal-600 mb-4" size={36} />
              <h3 className="font-semibold text-lg mb-2">Structured Process</h3>
              <p className="text-gray-600 text-sm">
                Work aligned with ISO quality and security practices.
              </p>
            </div>

            <div className="p-6 border rounded-xl text-center hover:shadow-lg transition">
              <TrendingUp className="mx-auto text-cyan-600 mb-4" size={36} />
              <h3 className="font-semibold text-lg mb-2">Career Growth</h3>
              <p className="text-gray-600 text-sm">
                Skill-based progression and long-term opportunities.
              </p>
            </div>

            <div className="p-6 border rounded-xl text-center hover:shadow-lg transition">
              <Briefcase className="mx-auto text-teal-600 mb-4" size={36} />
              <h3 className="font-semibold text-lg mb-2">Stable Work</h3>
              <p className="text-gray-600 text-sm">
                Consistent projects and process-oriented operations.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Current Opportunities
          </h2>

          <div className="bg-white border rounded-xl p-10 shadow-sm">
            <p className="text-gray-700 text-lg">
              We currently do not have active openings.
            </p>
            <p className="text-gray-500 mt-2">
              You may still share your profile for future opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* APPLY CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Submit Your Resume
          </h2>

          <p className="text-gray-600 mb-8">
            Send your CV to our recruitment team. Please attach your resume in PDF format.
          </p>

          <button
            onClick={applyEmail}
            className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-cyan-700 hover:to-teal-700 transition flex items-center gap-3 mx-auto"
          >
            Apply via Email
            <Send size={20} />
          </button>

          <p className="text-sm text-gray-500 mt-6">
            careers@cma3solutions.com
          </p>
        </div>
      </section>

    </div>
  );
}
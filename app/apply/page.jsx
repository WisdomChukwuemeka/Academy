import ApplicationForm from "./ApplicationForm";
import { Mail, MapPin, Clock, Award, Users, Rocket } from "lucide-react";

export const metadata = {
  title: "Join Our Faculty | Apply to Teach at Scippra",
  description: "Shape the future of tech. Apply to become an instructor at Scippra and share your expertise with our global community.",
};

export default function ApplyToTeach() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-white pt-20 pb-12 border-b border-slate-100 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <span className="text-red-600 font-bold uppercase tracking-widest text-sm">Career Opportunity</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-6">
            Help Us Build the Next <br /> Generation of <span className="text-red-600">Tech Leaders</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            We are looking for industry professionals who are passionate about teaching, 
            mentoring, and building world-class talent.
          </p>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto px-6 py-16">
        
        {/* FORM SECTION */}
        <div className="flex-1">
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              Instructor Application Form
            </h2>
            <ApplicationForm />
          </div>
        </div>

        {/* INFO SIDEBAR */}
        <div className="lg:w-[400px] space-y-8">
          <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-xl font-bold mb-6">Why teach with us?</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-red-600 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Recognized Prestige</h4>
                  <p className="text-slate-400 text-xs mt-1">Join an elite faculty of global industry experts.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-red-600 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Impact Lives</h4>
                  <p className="text-slate-400 text-xs mt-1">Directly mentor students from beginner to professional.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-red-600 rounded-xl flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Flexible Schedule</h4>
                  <p className="text-slate-400 text-xs mt-1">On-site or Remote options available for your convenience.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-6">
             <h3 className="text-sm font-bold uppercase text-slate-400 tracking-wider">Contact Details</h3>
             
             <div className="flex items-center gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-50 text-red-600">
                   <Mail className="w-5 h-5" />
                </span>
                <span className="text-slate-700 font-medium">info@scippra.com</span>
             </div>

             <div className="flex items-center gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-50 text-red-600">
                   <MapPin className="w-5 h-5" />
                </span>
                <span className="text-slate-700 font-medium">Remote / Global Office</span>
             </div>

             <div className="flex items-center gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-50 text-red-600">
                   <Clock className="w-5 h-5" />
                </span>
                <span className="text-slate-700 font-medium">Mon - Fri, 9am - 5pm (WAT)</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
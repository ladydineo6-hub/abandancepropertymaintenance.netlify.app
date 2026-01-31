
import React, { useState } from 'react';
import { diagnoseIssue } from '../services/geminiService';

const DiagnosisAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [diagnosis, setDiagnosis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleDiagnose = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setDiagnosis(null);
    try {
      const result = await diagnoseIssue(input);
      setDiagnosis(result);
    } catch (e) {
      setDiagnosis("Sorry, I couldn't process that. Please try again or call us!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 p-3 rounded-2xl">
                <i className="fas fa-robot text-white text-2xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Smart Fix Assistant</h3>
                <p className="text-slate-400 text-sm">Powered by Gemini AI</p>
              </div>
            </div>

            <p className="text-slate-300 mb-8 leading-relaxed">
              Not sure what's wrong? Describe the problem below (e.g., "my kitchen sink is leaking from the pipe underneath") and our AI assistant will provide an initial diagnosis and safety tips.
            </p>

            <div className="space-y-4">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe your property issue here..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all min-h-[120px]"
              />
              
              <button
                onClick={handleDiagnose}
                disabled={loading || !input.trim()}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 text-white font-bold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Analyzing...
                  </>
                ) : (
                  <>
                    <i className="fas fa-magic"></i> Diagnose My Issue
                  </>
                )}
              </button>
            </div>

            {diagnosis && (
              <div className="mt-8 p-6 bg-white/10 border border-white/10 rounded-2xl animate-fadeIn">
                <h4 className="font-bold text-blue-400 mb-3 flex items-center gap-2">
                  <i className="fas fa-clipboard-check"></i> Initial Diagnosis:
                </h4>
                <div className="text-slate-200 leading-relaxed text-sm whitespace-pre-wrap">
                  {diagnosis}
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-xs text-slate-400 italic">This is an AI estimate. Always get a professional on-site quote.</span>
                  <a href="#quote" className="text-blue-400 font-bold text-xs hover:underline uppercase tracking-widest">Request Pro Visit</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosisAssistant;

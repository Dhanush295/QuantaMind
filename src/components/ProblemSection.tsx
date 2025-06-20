
import React from 'react';
import { Cloud, X, FileText, ArrowRight } from 'lucide-react';

const ProblemSection = () => {
  return (
    <div className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            You Want to Use AI. <span className="text-red-400">You Can't Risk Your Data.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Every business wants the efficiency of AI, but today's tools create an unacceptable risk. 
            Using cloud-based AI means sending your most sensitive client information, patient records, 
            or intellectual property to a third-party server. For industries built on trust, this is a non-starter.
          </p>
        </div>

        {/* Visual representation */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Secure building */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-quantminds-grey/20 rounded-lg border-2 border-quantminds-grey/40 flex flex-col items-center justify-center mb-4 relative">
              <FileText size={32} className="text-quantminds-grey mb-2" />
              <div className="text-xs text-center text-quantminds-grey">Your Sensitive<br />Data</div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-bold">✓</span>
              </div>
            </div>
            <span className="text-sm text-gray-400">Your Secure Environment</span>
          </div>

          {/* Arrow */}
          <div className="flex items-center gap-4">
            <ArrowRight size={24} className="text-red-400 lg:block hidden" />
            <div className="lg:hidden w-full h-0.5 bg-red-400"></div>
          </div>

          {/* Cloud with X */}
          <div className="flex flex-col items-center relative">
            <div className="w-32 h-32 bg-blue-500/20 rounded-lg border-2 border-blue-500/40 flex flex-col items-center justify-center mb-4 relative">
              <Cloud size={32} className="text-blue-400 mb-2" />
              <div className="text-xs text-center text-blue-400">Third-Party<br />Cloud AI</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-red-500/20 border-4 border-red-500 flex items-center justify-center">
                  <X size={32} className="text-red-500" />
                </div>
              </div>
            </div>
            <span className="text-sm text-gray-400">Unacceptable Risk</span>
          </div>
        </div>

        {/* Risk indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText size={24} className="text-red-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-red-400">Attorney-Client Privilege</h3>
            <p className="text-gray-400">Risk breaking confidentiality with sensitive legal documents</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText size={24} className="text-red-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-red-400">Patient Privacy</h3>
            <p className="text-gray-400">HIPAA violations from medical data exposure</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText size={24} className="text-red-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-red-400">Financial Records</h3>
            <p className="text-gray-400">Compliance breaches with sensitive financial data</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;

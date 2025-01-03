import React from 'react';

const Portfolio = () => {
  const gradientStyle = {
    background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)'
  };

  const behavioralData = [
    {
      label: 'Self',
      left: 'Collaborative',
      right: 'Independent',
      score: 60
    },
    {
      label: 'Self-Concept',
      left: 'Reserved',
      right: 'Sociable',
      score: 45
    },
    {
      label: 'Synthesis',
      left: 'Driving',
      right: 'Steady',
      score: 70
    }
  ];

  const AssessmentScale = ({ label, left, right, score }) => (
    <div className="mb-8">
      <div className="text-sm text-gray-400 mb-1">{label}</div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-blue-400">{left}</span>
        <span className="text-blue-400">{right}</span>
      </div>
      <div className="relative h-2 bg-gray-600 rounded">
        <div 
          className="absolute h-4 w-4 bg-blue-400 rounded-full top-1/2 -translate-y-1/2"
          style={{ left: `${score}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="py-16" style={gradientStyle}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="relative mb-8 md:mb-0 md:mr-8">
              <div className="w-64 h-64 rounded-full bg-white/10 backdrop-blur-sm p-2">
                <img 
                  src="/images/Profile_Pic_Headshot.jpg"
                  alt="Jose R. Ruda"
                  className="w-full h-full rounded-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2 text-white">Jose R. Ruda</h1>
              <h2 className="text-xl mb-4 text-blue-100">Senior Supply Chain Manager</h2>
              <div className="text-blue-100">
                GBA Logistics | Barcelona, Spain<br />
                soloruda@gmail.com<br />
                +34 665 084 948
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Highlights */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-slate-800">Portfolio Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-lg hover:border-blue-500">
              <h3 className="font-bold mb-2 text-slate-700">Financial Models</h3>
              <p className="text-slate-600">Advanced financial analysis of large automotive distribution contracts</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-lg hover:border-blue-500">
              <h3 className="font-bold mb-2 text-slate-700">AI Model Training</h3>
              <p className="text-slate-600">RLHF training of large language models at Outlier.ai</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-lg hover:border-blue-500">
              <h3 className="font-bold mb-2 text-slate-700">Data Analysis and Visualization</h3>
              <p className="text-slate-600">Advanced Excel analytics and Power BI dashboards</p>
            </div>
          </div>
        </div>
      </div>

      {/* Work Experience */}
      <div className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-slate-800">Work Experience</h2>
          
          <div className="mb-6">
            <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-lg hover:border-blue-500">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-700">LLM Trainer (Contractor)</h3>
                <span className="text-blue-600">Nov 2024 - Present</span>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-slate-600">Outlier.ai</h4>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>Specialize in training large language models (LLMs) using Reinforcement Learning from Human Feedback (RLHF)</li>
                <li>Focus on the Spanish language, ensuring linguistic accuracy, cultural relevance, and contextual appropriateness</li>
                <li>Collaborate with AI teams to refine data pipelines, enhance model outputs, and align with project objectives</li>
                <li>Contribute to the development of robust AI systems by applying advanced linguistic and machine learning techniques</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-lg hover:border-blue-500">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-700">Senior Supply Chain Manager</h3>
                <span className="text-blue-600">Oct 2023 - Present</span>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-slate-600">GBA Logistics</h4>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>Leading the supply chain department for one of the largest UK-based logistics companies</li>
                <li>Overseeing a sales pipeline of over £78M</li>
                <li>Managing 6 direct reports across Spain, Poland, and the United Kingdom</li>
                <li>Implemented a new RFQ Management process using Power Automate flows</li>
                <li>Designed and deployed Supply Chain dashboards using Power BI</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-lg hover:border-blue-500">
              <h3 className="text-xl font-bold text-slate-700 mb-4">Earlier Positions</h3>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>Carrier Team Lead at Coyote Logistics Europe (2017-2021)</li>
                <li>Tennis Professional at Riverside Yacht Club (2013-2016)</li>
                <li>Programmer at Belsa Technologies Industrials S.L. (2011)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Profile */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-slate-800">Leadership Profile</h2>
          
          <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 mb-8">
            <h3 className="text-xl font-bold mb-6 text-slate-700">Behavioral Assessment Results</h3>
            {behavioralData.map((data) => (
              <AssessmentScale key={data.label} {...data} />
            ))}
          </div>

          <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 text-slate-700">Strongest Behaviors</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Driven to protect the company against risk by thoroughly leveraging their background and strictly following "the book."</li>
              <li>Detail-oriented and accommodating; most comfortable working as part of a well-defined team for which they produce high-quality output and decisions.</li>
              <li>Careful with rules; precise, "by the book", fast-paced, and literal in interpreting rules, schedules and results.</li>
              <li>Detail-oriented and thorough; works to ensure things don't fall through the cracks, and follows up to ensure they're done properly and on time.</li>
              <li>Driven to achieve operational efficiencies: thinks about what needs to be done and how it can be done as fast as possible while maintaining a high-quality outcome.</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 text-slate-700">Management Style</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Proactive in bringing the team together to complete work by "the book," within accepted standards and policies, and on-time</li>
              <li>An enthusiastic, outgoing team player; motivated to work with and through others to achieve the company's goals</li>
              <li>Cautious when delegating; takes pride in the work and is anxious to do things right</li>
              <li>Collaborative in approach; eager to gather input from others, whose viewpoints are valued</li>
              <li>Keenly interested in the development of others; is an enthusiastic coach or trainer</li>
              <li>Respectful of authority and considerate of others; focus is on the job at hand</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 text-slate-700">Selling Style</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Convivial and persuasive; will utilize effective and stimulating style to build solid, trusted relationships</li>
              <li>Composed and thorough when representing products where they are a consummate expert</li>
              <li>Warm and sincere with customers; eager to understand their needs and help them</li>
              <li>Comfortable and confident with proven, well-known techniques</li>
              <li>Generally liked and trusted by clients in repeated contact</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-bold mb-4 text-slate-700">Management Strategies</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Clear, specific description of the job, with duties, responsibilities, and organizational relationships clearly defined</li>
              <li>Opportunities to learn everything that's needed to know about the job</li>
              <li>The support and help of management, subject-matter experts, or trusted advisors when working</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 text-center text-slate-600">
        © 2024 Jose R. Ruda. All rights reserved.
      </div>
    </div>
  );
};

export default Portfolio;

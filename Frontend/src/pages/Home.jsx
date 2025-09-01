// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ Icon, title, description, to = "#" }) => (
  <article className="bg-white rounded-xl shadow-md overflow-hidden transition-shadow hover:shadow-lg">
    <div className="p-6">
      <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-blue-900" />
      </div>
      <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <Link to={to} className="inline-block mt-4 text-blue-900 font-semibold hover:text-blue-700" aria-label={`Learn more about ${title}`}>
        Learn More <span aria-hidden>→</span>
      </Link>
    </div>
  </article>
);

/* Inline SVG icon components — tiny, dependency-free */
const IconHeartbeat = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 12h3l2 5 4-10 3 6 2-4h3" />
    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M21 12v6a2 2 0 0 1-2 2H5" />
  </svg>
);
const IconBone = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M4 7a2 2 0 0 1 2-2h1a3 3 0 1 1 0 6H6a2 2 0 0 1-2-2zM20 7a2 2 0 0 0-2-2h-1a3 3 0 1 0 0 6h1a2 2 0 0 0 2-2zM4 17a2 2 0 0 1 2 2h1a3 3 0 1 1 0-6H6a2 2 0 0 1-2 2zM20 17a2 2 0 0 0-2 2h-1a3 3 0 1 0 0-6h1a2 2 0 0 0 2 2z" />
  </svg>
);
const IconBrain = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 2v2M6 4v2M18 4v2M4 10h16M4 14h16M12 20v-2M7 18v-2M17 18v-2" />
    <path strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" d="M7 10c0-3 2-5 5-5s5 2 5 5v4" />
  </svg>
);
const IconStethoscope = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M20 14v3a3 3 0 0 1-6 0v-3" />
    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M6 8a6 6 0 0 1 12 0v4" />
    <circle cx="6" cy="18" r="2" strokeWidth="1.5" />
  </svg>
);
const IconBaby = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 2a4 4 0 0 0-4 4v2h8V6a4 4 0 0 0-4-4z" />
    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M5 20v-2a7 7 0 0 1 14 0v2" />
  </svg>
);
const IconTooth = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 2c2 0 4 1 4 3s-1 4-4 9-4 6-4 7-1-1-1-4 1-6 4-9 4-4 4-6z" />
  </svg>
);

export default function Home() {
  const services = [
    { Icon: IconHeartbeat, title: "Cardiology", description: "Comprehensive heart care with advanced diagnostics." },
    { Icon: IconBone, title: "Orthopedics", description: "Expert care for bones, joints, and musculoskeletal conditions." },
    { Icon: IconBrain, title: "Neurology", description: "Specialized treatment for disorders of the nervous system." },
    { Icon: IconStethoscope, title: "Primary Care", description: "Complete healthcare for individuals and families." },
    { Icon: IconBaby, title: "Pediatrics", description: "Compassionate care for children from infancy through adolescence." },
    { Icon: IconTooth, title: "Dentistry", description: "Complete dental care using modern technology." },
  ];

  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-br from-red-400 via-orange-300 to-yellow-100 overflow-hidden text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">World-Class Healthcare & Pharma at Your Doorstep</h1>
            <p className="text-xl mb-8">Experience compassionate care with state-of-the-art medical technology and renowned specialists. <br /> <br /><p className='text-xs font-bold'> Top Tech Facilited <Link className='font-extrabold text-purple-900' to='/medbot' >AI Powered Medical ChatBot</Link> & <Link className='text-indigo-900 font-black'  to='/pred'> Multiple Disease Predictor </Link>Based on Your Lab Reports</p></p> 
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full">
                Emergency Help 24/7
              </button>
              <button className="bg-white hover:bg-gray-100 text-blue-900 font-semibold py-3 px-8 rounded-full">
                Find a Doctor
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">Our Medical Services</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            We provide a wide range of medical services with the highest quality care and cutting-edge technology.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <ServiceCard key={i} Icon={svc.Icon} title={svc.title} description={svc.description} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

   


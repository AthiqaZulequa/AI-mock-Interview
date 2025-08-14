import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/container";
import { MainRoutes } from "@/lib/helpers";

// --- Custom Inline SVG icons to avoid Lucide deprecation warnings ---
const FacebookSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
       viewBox="0 0 24 24" width={24} height={24}>
    <path d="M22.675 0h-21.35C.595 0 0 .593 0
     1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413
     c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099
     2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796
     1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.406
     24 24 23.406 24 22.674V1.326C24 .593 23.406
     0 22.675 0z"/>
  </svg>
);

const LinkedinSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
       viewBox="0 0 24 24" width={24} height={24}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.852-3.037-1.853 
     0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9
     1.635-1.852 3.363-1.852 3.601 0 4.266 2.37
     4.266 5.455v6.288zM5.337 7.433a2.07 2.07
     0 1 1 0-4.14 2.07 2.07 0 0 1 0 
     4.14zm1.777 13.019H3.56V9h3.554v11.452zM22.225 
     0H1.771C.792 0 0 .774 0 
     1.726v20.54C0 23.217.792 24 1.771
     24h20.451c.98 0 1.778-.783 
     1.778-1.726V1.726C24 .774 23.205 
     0 22.225 0z"/>
  </svg>
);

const InstagramSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
       viewBox="0 0 24 24" width={24} height={24}>
    <path d="M7.75 2A5.75 5.75 0 0 0 2 
     7.75v8.5A5.75 5.75 0 0 0 7.75 
     22h8.5A5.75 5.75 0 0 0 22 
     16.25v-8.5A5.75 5.75 0 0 0 
     16.25 2h-8.5zm8.5 1.5a4.25 
     4.25 0 0 1 4.25 4.25v8.5a4.25 
     4.25 0 0 1-4.25 4.25h-8.5a4.25 
     4.25 0 0 1-4.25-4.25v-8.5A4.25 
     4.25 0 0 1 7.75 3.5h8.5zM12 
     7a5 5 0 1 0 5 5 5 5 0 
     0 0-5-5zm0 1.5a3.5 3.5 0 1 
     1-3.5 3.5 3.5 3.5 0 0 1 
     3.5-3.5zm4.75-.25a1.25 1.25 
     0 1 1-1.25-1.25 1.25 1.25 
     0 0 1 1.25 1.25z"/>
  </svg>
);

export const Footer = () => (
  <div className="w-full bg-black text-gray-300 py-8">
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {MainRoutes.map((route) => (
              <li key={route.href}>
                <Link to={route.href} className="hover:underline text-gray-300 hover:text-gray-100">
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <p>
            We are committed to helping you unlock your full potential with AI-powered tools.
            Our platform offers a wide range of resources to improve your interview skills
            and chances of success.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-lg mb-4">Services</h3>
          <ul className="space-y-2">
            <li><Link to="/services/interview-prep" className="hover:underline text-gray-300 hover:text-gray-100">Interview Preparation</Link></li>
            <li><Link to="/services/career-coaching" className="hover:underline text-gray-300 hover:text-gray-100">Career Coaching</Link></li>
            <li><Link to="/services/resume-building" className="hover:underline text-gray-300 hover:text-gray-100">Resume Building</Link></li>
          </ul>
        </div>

        {/* Contact + Socials */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <p className="mb-4">123 AI Street, Tech City, 12345</p>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-500">
              <FacebookSVG />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-blue-400">
              <X size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500">
              <InstagramSVG />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-700">
              <LinkedinSVG />
            </a>
          </div>
        </div>
      </div>

      {/* Footer bottom text */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </Container>
  </div>
);

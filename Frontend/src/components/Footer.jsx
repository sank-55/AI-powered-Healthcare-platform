import React from "react";
import { Link } from 'react-router-dom'
export default function Footer() {
  return (

    <footer className="bg-black text-gray-400 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg mb-2">Download our App</h3>
            <p>Download App for Android and iOS mobile phones.</p>
            <div className="flex mt-2">
              <img src="/images/play-store.png" alt="Play Store" className="w-28 mr-2" />
              <img src="/images/app-store.png" alt="App Store" className="w-28" />
            </div>
          </div>
          <div className="text-center">
            <img src="/images/logo-white.png" alt="Logo" className="mx-auto w-44" />
            <p>Our purpose is to sustainably improve future commerce.</p>
          </div>
          <div>
            <h3 className="text-white text-lg mb-2">Useful Links</h3>
            <ul className="space-y-1">
              <li>Coupons</li>
              <li>Blog Post</li>
              <li>Return Policy</li>
              <li>Join Affiliate</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg mb-2">Follow Us</h3>
            <ul className="space-y-1">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-600" />
        <p className="text-center text-sm">All Rights Reserved © s@nk 2025</p>
      </div>
    </footer>
  );
}

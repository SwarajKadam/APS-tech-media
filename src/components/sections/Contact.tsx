
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '../shared/Button';

export const Contact = () => (
  <section className="py-20 px-6 bg-gradient-to-b from-black via-slate-900 to-black" id="contact">
    
    <div className="container mx-auto">
      <h2 className="text-5xl text-center font-bold mb-12 pb-12 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-fade-in">Get in Touch</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className='animate-fade-in'>
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="text-cyan-400" />
              <p className='text-lg md:text-xl'>info@apsmediatech.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-cyan-400" />
              <p className='text-lg md:text-xl'>+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-cyan-400" />
              <p className='text-lg md:text-xl'>123 Innovation Street, Tech City, TC 12345</p>
            </div>
          </div>
        </div>
        <form className="space-y-6 animate-fade-in">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg glass-effect text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg glass-effect text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <div>
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full p-3 rounded-lg glass-effect text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <Button variant="gradient">Send Message</Button>
        </form>
      </div>
    </div>
  </section>
);
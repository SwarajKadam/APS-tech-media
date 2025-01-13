
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { Logo } from '../shared/Logo';

export const Footer = () => (
  <footer className="py-12 px-6 bg-gray-950">
    <div className="text-center container mx-auto">
      <div className="grid md:grid-cols-4 gap-8">
        <div className='text-center'>
          <Logo />
          <p className="text-lg text-gray-300 mt-4 text-center">Transforming businesses through digital innovation.</p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-300">
            {[ 'Web Development', 'AI Solutions', 'Backend Systems'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4 justify-center">
            {[
              { Icon: Linkedin, href: '#' },
              { Icon: Twitter, href: '#' },
              { Icon: Facebook, href: '#' },
              { Icon: Instagram, href: '#' }
            ].map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-300">
        <p>&copy; {new Date().getFullYear()} Kyodai WaveTech. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
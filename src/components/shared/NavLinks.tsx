
import { Button } from './Button';

export const NavLinks = () => (
  <nav className="hidden md:flex space-x-8">
    {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
      <a
        key={item}
        href={`#${item.toLowerCase()}`}
        className="hover:text-cyan-400 transition-colors duration-300"
      >
        {item}
      </a>
    ))}
    <Button variant="gradient">Get Started</Button>
  </nav>
);
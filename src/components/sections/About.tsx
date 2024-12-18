
import { Monitor, Zap, Users, Trophy } from 'lucide-react';

export const About = () => (
  <section className="py-20 px-6 glass-effect" id="about">
  
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 neon-text">Why Choose Us</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <Monitor className="w-8 h-8 text-cyan-400 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">Modern Technology</h3>
              <p className="text-gray-300">Leveraging cutting-edge technologies to deliver innovative solutions.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Zap className="w-8 h-8 text-purple-500 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-300">Quick turnaround times without compromising on quality.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Users className="w-8 h-8 text-cyan-400 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-gray-300">Skilled professionals with years of industry experience.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Trophy className="w-8 h-8 text-purple-500 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">Proven Results</h3>
              <p className="text-gray-300">Track record of successful project deliveries and satisfied clients.</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="w-full h-[500px] rounded-2xl glass-effect neon-border overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
              alt="Team Collaboration"
              className="w-full h-full object-cover opacity-75"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);
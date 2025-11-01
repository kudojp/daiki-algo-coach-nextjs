import Image from "next/image";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function DesktopView() {
  return (
    <div className="hidden md:block min-h-screen bg-[#faf9f6] dark:bg-[#1a1816]">
      {/* Navigation */}
      <nav className="border-b border-[#e8e3db] dark:border-[#2d2a26]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="/" className="flex items-center gap-3">
              <Image
                src="/DAC_icon.png"
                alt="Daiki Algo Coach Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="font-serif font-bold text-2xl text-[#1a1816] dark:text-[#f5f3ee] tracking-tight">
                Daiki Algo Coach
              </span>
            </a>
            <div className="flex gap-10 items-center">
              <a href="#features" className="text-[#5c5653] hover:text-[#1a1816] dark:text-[#a39c94] dark:hover:text-[#f5f3ee] transition-colors text-sm">
                Features
              </a>
              <a href="#problems" className="text-[#5c5653] hover:text-[#1a1816] dark:text-[#a39c94] dark:hover:text-[#f5f3ee] transition-colors text-sm">
                Offerings
              </a>
              <a href="#coach" className="text-[#5c5653] hover:text-[#1a1816] dark:text-[#a39c94] dark:hover:text-[#f5f3ee] transition-colors text-sm">
                Coach
              </a>
              <button className="px-6 py-2.5 border border-[#1a1816] dark:border-[#f5f3ee] text-[#1a1816] dark:text-[#f5f3ee] hover:bg-[#1a1816] hover:text-[#faf9f6] dark:hover:bg-[#f5f3ee] dark:hover:text-[#1a1816] transition-all text-sm font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="font-serif text-6xl font-bold mb-10 text-[#1a1816] dark:text-[#f5f3ee] leading-[1.1] tracking-tight">
              Discover the joy of algorithms
            </h1>

            <p className="text-2xl text-[#5c5653] dark:text-[#a39c94] mb-14 leading-relaxed max-w-2xl mx-auto">
              A thoughtful learning platform for exploring algorithmic thinking through carefully curated problems.
            </p>

            <div className="flex gap-4 justify-center">
              <button className="px-8 py-4 border border-[#1a1816] dark:border-[#f5f3ee] text-[#1a1816] dark:text-[#f5f3ee] hover:bg-[#1a1816] hover:text-[#faf9f6] dark:hover:bg-[#f5f3ee] dark:hover:text-[#1a1816] transition-all font-medium">
                Start learning
              </button>
              <button className="px-8 py-4 text-[#5c5653] dark:text-[#a39c94] hover:text-[#1a1816] dark:hover:text-[#f5f3ee] transition-colors font-medium">
                Browse problems →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 lg:px-8 border-t border-[#e8e3db] dark:border-[#2d2a26]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20">
            <h2 className="font-serif text-6xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-6 tracking-tight">
              Built for learners
            </h2>
            <p className="text-xl text-[#5c5653] dark:text-[#a39c94] leading-relaxed max-w-2xl">
              Thoughtfully designed tools to support your journey through algorithmic problem-solving.
            </p>
          </div>

          <div className="space-y-20">
            {/* Feature 1 */}
            <div className="grid grid-cols-2 gap-16 items-start">
              <div>
                <h3 className="font-serif text-3xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-4">
                  Track your progress
                </h3>
                <p className="text-lg text-[#5c5653] dark:text-[#a39c94] leading-relaxed">
                  Visualize your learning journey with detailed statistics and completion rates across all difficulty levels. Celebrate milestones as you grow.
                </p>
              </div>
              <div className="h-64 bg-[#e8e3db] dark:bg-[#2d2a26] rounded-sm"></div>
            </div>

            {/* Feature 2 */}
            <div className="grid grid-cols-2 gap-16 items-start">
              <div className="order-2">
                <h3 className="font-serif text-3xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-4">
                  Learn patterns
                </h3>
                <p className="text-lg text-[#5c5653] dark:text-[#a39c94] leading-relaxed">
                  Discover recurring patterns that elegantly solve entire classes of problems. Build intuition through structured practice.
                </p>
              </div>
              <div className="h-64 bg-[#e8e3db] dark:bg-[#2d2a26] rounded-sm order-1"></div>
            </div>

            {/* Feature 3 */}
            <div className="grid grid-cols-2 gap-16 items-start">
              <div>
                <h3 className="font-serif text-3xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-4">
                  Guided exploration
                </h3>
                <p className="text-lg text-[#5c5653] dark:text-[#a39c94] leading-relaxed">
                  Progressive hints help you discover solutions independently. Learn to think algorithmically without spoiling the challenge.
                </p>
              </div>
              <div className="h-64 bg-[#e8e3db] dark:bg-[#2d2a26] rounded-sm"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contents Section */}
      <section id="problems" className="py-32 px-6 lg:px-8 border-t border-[#e8e3db] dark:border-[#2d2a26]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20">
            <h2 className="font-serif text-6xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-6 tracking-tight">
              Offerings
            </h2>
            <p className="text-xl text-[#5c5653] dark:text-[#a39c94] leading-relaxed max-w-2xl">
              A journey designed to ignite your curiosity, sharpen your skills, and fuel your growth at every step.
            </p>
          </div>

          <div className="space-y-6">
            {/* Algorithm patterns, distilled */}
            <div className="border border-[#e8e3db] dark:border-[#2d2a26] p-10 hover:border-[#1a1816] dark:hover:border-[#f5f3ee] transition-colors">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-serif text-3xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-3">
                    Algorithm patterns, distilled
                  </h3>
                  <p className="text-lg text-[#5c5653] dark:text-[#a39c94] leading-relaxed">
                    After solving and revisiting over 1,300 LeetCode problems, I've discovered that every topic — from Binary Search to Dynamic Programming — rests on a few core patterns. By practicing multiple problems of the same pattern in sequence, you can internalize each trick incredibly efficiently.
                    <br />
                    Let me guide you through these distilled tricks. Once you internalize them, you'll start seeing every problem as fitting one of them.
                  </p>
                </div>
                <button className="px-6 py-2.5 border border-[#1a1816] dark:border-[#f5f3ee] text-[#1a1816] dark:text-[#f5f3ee] hover:bg-[#1a1816] hover:text-[#faf9f6] dark:hover:bg-[#f5f3ee] dark:hover:text-[#1a1816] transition-all text-sm font-medium whitespace-nowrap">
                  Explore →
                </button>
              </div>
            </div>

            {/* The art of 45-minute coding interviews */}
            <div className="border border-[#e8e3db] dark:border-[#2d2a26] p-10 hover:border-[#1a1816] dark:hover:border-[#f5f3ee] transition-colors">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-serif text-3xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-3">
                    The art of 45-minute coding interviews
                  </h3>
                  <p className="text-lg text-[#5c5653] dark:text-[#a39c94] leading-relaxed">
                    A coding interview is not just a test — it's a performance. Every move you make should attract and engage your interviewer.
                    <br />
                    I'll help you master the rhythm: time management, clear and concise explanations, debugging effectively under pressure, and uncovering a solution path when facing a tough question.
                    <br />
                    Treat your next interview like a rock show — and learn to shine on that stage.
                  </p>
                </div>
                <button className="px-6 py-2.5 border border-[#1a1816] dark:border-[#f5f3ee] text-[#1a1816] dark:text-[#f5f3ee] hover:bg-[#1a1816] hover:text-[#faf9f6] dark:hover:bg-[#f5f3ee] dark:hover:text-[#1a1816] transition-all text-sm font-medium whitespace-nowrap">
                  Explore →
                </button>
              </div>
            </div>

            {/* Your motivating pacer */}
            <div className="border border-[#e8e3db] dark:border-[#2d2a26] p-10 hover:border-[#1a1816] dark:hover:border-[#f5f3ee] transition-colors">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-serif text-3xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-3">
                    Your motivating pacer
                  </h3>
                  <p className="text-lg text-[#5c5653] dark:text-[#a39c94] leading-relaxed">
                    What I want to teach you isn't just interview tricks.
                    <br />
                    My job is to help you stay consistent, focused, and confident — even when progress feels slow or pressure builds.
                    <br />
                    I'll make sure you can concentrate fully, feel the momentum of every problem you solve, and keep your motivation alive throughout the journey.
                    <br />
                    That's what I'm here for.
                  </p>
                </div>
                <button className="px-6 py-2.5 border border-[#1a1816] dark:border-[#f5f3ee] text-[#1a1816] dark:text-[#f5f3ee] hover:bg-[#1a1816] hover:text-[#faf9f6] dark:hover:bg-[#f5f3ee] dark:hover:text-[#1a1816] transition-all text-sm font-medium whitespace-nowrap">
                  Explore →
                </button>
              </div>
            </div>

            {/* Curated Aha! moments */}
            <div className="border border-[#e8e3db] dark:border-[#2d2a26] p-10 hover:border-[#1a1816] dark:hover:border-[#f5f3ee] transition-colors">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-serif text-3xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-3">
                    Curated Aha! moments
                  </h3>
                  <p className="text-lg text-[#5c5653] dark:text-[#a39c94] leading-relaxed">
                    Algorithms are not merely tools for interviews — they're a source of joy.
                    <br />
                    Here, you'll find a handpicked list of problems that spark curiosity for their own sake — puzzles so elegant that you can't help but whisper, "Ah, so that's how it works."
                    <br />
                    Explore these problems not for career advancement, but for the sheer pleasure of discovery.
                    <br />
                    I'll let you fall into the beautiful depths of algorithmic thinking.
                  </p>
                </div>
                <button className="px-6 py-2.5 border border-[#1a1816] dark:border-[#f5f3ee] text-[#1a1816] dark:text-[#f5f3ee] hover:bg-[#1a1816] hover:text-[#faf9f6] dark:hover:bg-[#f5f3ee] dark:hover:text-[#1a1816] transition-all text-sm font-medium whitespace-nowrap">
                  Explore →
                </button>
              </div>
            </div>

            {/* An ever-growing coach */}
            <div className="border border-[#e8e3db] dark:border-[#2d2a26] p-10 hover:border-[#1a1816] dark:hover:border-[#f5f3ee] transition-colors">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-serif text-3xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-3">
                    An ever-growing coach
                  </h3>
                  <p className="text-lg text-[#5c5653] dark:text-[#a39c94] leading-relaxed">
                    A coach should never stop learning, and I am no exception. I love algorithms and constantly challenge myself, seeking new and tougher problems that push the boundaries.
                    <br />
                    Though I have achieved milestones, my journey is far from over, and I embrace the struggles that come with growth. I share this process openly — not as a finished expert, but as a fellow learner walking beside you.
                    <br />
                    Together, we evolve.
                  </p>
                </div>
                <button className="px-6 py-2.5 border border-[#1a1816] dark:border-[#f5f3ee] text-[#1a1816] dark:text-[#f5f3ee] hover:bg-[#1a1816] hover:text-[#faf9f6] dark:hover:bg-[#f5f3ee] dark:hover:text-[#1a1816] transition-all text-sm font-medium whitespace-nowrap">
                  Explore →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coach Section */}
      <section id="coach" className="py-32 px-6 lg:px-8 border-t border-[#e8e3db] dark:border-[#2d2a26]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm text-[#5c5653] dark:text-[#a39c94] mb-4">Your coach</div>
              <h2 className="font-serif text-5xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-6 tracking-tight">
                Meet Daiki
              </h2>
              <p className="text-lg text-[#5c5653] dark:text-[#a39c94] leading-relaxed mb-8">
                Hi, I'm Daiki — your coach based in Tokyo, Japan.
                <br />
                I'm a passionate algorithm enthusiast and a LeetCode Guardian, a badge awarded to top performers in LeetCode's global weekly contests. Among them, I've ranked within the top 1.2% of participants worldwide.
                <br />
                <br />
                My major in university was geophysics, not computer science — so I had to teach myself everything from algorithms to software engineering from scratch, through countless late nights of trial, error, and discovery.
                <br />
                <br />
                That process taught me something invaluable: growth isn't about talent; it's about consistency, curiosity, passion, and the courage to keep going when things get tough — and above all, a deep love and dedication for the craft itself.
                <br />
                <br />
                Now, I aim to share that mindset — helping others move beyond simply reaching an outcome, and to embrace the journey of curiosity, exploration, and growth itself.
                <br />
                Let's grow together, one problem at a time.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/kudojp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5c5653] dark:text-[#a39c94] hover:text-[#1a1816] dark:hover:text-[#f5f3ee] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin size={28} />
                </a>
                <a
                  href="https://leetcode.com/u/kudojp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5c5653] dark:text-[#a39c94] hover:text-[#1a1816] dark:hover:text-[#f5f3ee] transition-colors"
                  aria-label="LeetCode Profile"
                >
                  <SiLeetcode size={28} />
                </a>
                <a
                  href="https://github.com/kudojp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5c5653] dark:text-[#a39c94] hover:text-[#1a1816] dark:hover:text-[#f5f3ee] transition-colors"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={28} />
                </a>
                <a
                  href="https://www.youtube.com/@daiki-algo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5c5653] dark:text-[#a39c94] hover:text-[#1a1816] dark:hover:text-[#f5f3ee] transition-colors"
                  aria-label="YouTube Channel"
                >
                  <FaYoutube size={28} />
                </a>
              </div>
            </div>
            <div className="h-96 bg-[#e8e3db] dark:bg-[#2d2a26] rounded-sm flex items-center justify-center overflow-hidden">
              <Image
                src="/daiki_icon.png"
                alt="Daiki Profile"
                width={1778}
                height={1654}
                className="object-cover w-full h-full scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-8 border-t border-[#e8e3db] dark:border-[#2d2a26]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-6xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-8 tracking-tight">
            Begin your journey
          </h2>
          <p className="text-xl text-[#5c5653] dark:text-[#a39c94] mb-12 leading-relaxed max-w-2xl mx-auto">
            Join a community of thoughtful learners exploring the elegant world of algorithms.
          </p>
          <button className="px-8 py-4 border border-[#1a1816] dark:border-[#f5f3ee] text-[#1a1816] dark:text-[#f5f3ee] hover:bg-[#1a1816] hover:text-[#faf9f6] dark:hover:bg-[#f5f3ee] dark:hover:text-[#1a1816] transition-all font-medium">
            Start learning today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-8 border-t border-[#e8e3db] dark:border-[#2d2a26]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="font-serif font-bold text-xl text-[#1a1816] dark:text-[#f5f3ee] mb-4">
                Daiki Algo Coach
              </div>
              <p className="text-[#5c5653] dark:text-[#a39c94] text-sm leading-relaxed">
                A learning platform dedicated to the joy of algorithms and thoughtful problem-solving.
              </p>
            </div>

            <div>
              <h4 className="text-[#1a1816] dark:text-[#f5f3ee] font-medium mb-4 text-sm">Learn</h4>
              <ul className="space-y-3 text-[#5c5653] dark:text-[#a39c94] text-sm">
                <li><a href="#features" className="hover:text-[#1a1816] dark:hover:text-[#f5f3ee] transition-colors">Features</a></li>
                <li><a href="#problems" className="hover:text-[#1a1816] dark:hover:text-[#f5f3ee] transition-colors">Problems</a></li>
                <li><a href="#" className="hover:text-[#1a1816] dark:hover:text-[#f5f3ee] transition-colors">Learning paths</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#1a1816] dark:text-[#f5f3ee] font-medium mb-4 text-sm">Connect</h4>
              <ul className="space-y-3 text-[#5c5653] dark:text-[#a39c94] text-sm">
                <li><a href="https://www.linkedin.com/in/kudojp/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a1816] dark:hover:text-[#f5f3ee] transition-colors">LinkedIn</a></li>
                <li><a href="https://github.com/kudojp" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a1816] dark:hover:text-[#f5f3ee] transition-colors">GitHub</a></li>
                <li><a href="https://www.youtube.com/@daiki-algo" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a1816] dark:hover:text-[#f5f3ee] transition-colors">YouTube</a></li>
                <li><a href="#" className="hover:text-[#1a1816] dark:hover:text-[#f5f3ee] transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#e8e3db] dark:border-[#2d2a26] flex justify-between items-center">
            <p className="text-[#5c5653] dark:text-[#a39c94] text-sm">
              © 2025 Daiki Algo Coach
            </p>
            <div className="flex gap-8 text-[#5c5653] dark:text-[#a39c94] text-sm">
              <a href="#" className="hover:text-[#1a1816] dark:hover:text-[#f5f3ee] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#1a1816] dark:hover:text-[#f5f3ee] transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

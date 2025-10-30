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
                Problems
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
              A comprehensive learning journey designed to support your growth every step of the way.
            </p>
          </div>

          <div className="space-y-6">
            {/* Let's run together */}
            <div className="border border-[#e8e3db] dark:border-[#2d2a26] p-10 hover:border-[#1a1816] dark:hover:border-[#f5f3ee] transition-colors">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-serif text-3xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-3">
                    Let&apos;s run together
                  </h3>
                  <p className="text-lg text-[#5c5653] dark:text-[#a39c94] leading-relaxed">
                    I will motivate you. I will help you keep track of your progress.
                  </p>
                </div>
                <button className="px-6 py-2.5 border border-[#1a1816] dark:border-[#f5f3ee] text-[#1a1816] dark:text-[#f5f3ee] hover:bg-[#1a1816] hover:text-[#faf9f6] dark:hover:bg-[#f5f3ee] dark:hover:text-[#1a1816] transition-all text-sm font-medium whitespace-nowrap">
                  Explore →
                </button>
              </div>
            </div>

            {/* Per topic overviews */}
            <div className="border border-[#e8e3db] dark:border-[#2d2a26] p-10 hover:border-[#1a1816] dark:hover:border-[#f5f3ee] transition-colors">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-serif text-3xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-3">
                    Per topic overviews
                  </h3>
                  <p className="text-lg text-[#5c5653] dark:text-[#a39c94] leading-relaxed">
                    Connecting the dots.
                  </p>
                </div>
                <button className="px-6 py-2.5 border border-[#1a1816] dark:border-[#f5f3ee] text-[#1a1816] dark:text-[#f5f3ee] hover:bg-[#1a1816] hover:text-[#faf9f6] dark:hover:bg-[#f5f3ee] dark:hover:text-[#1a1816] transition-all text-sm font-medium whitespace-nowrap">
                  Explore →
                </button>
              </div>
            </div>

            {/* How to spend 45 minutes like a pro */}
            <div className="border border-[#e8e3db] dark:border-[#2d2a26] p-10 hover:border-[#1a1816] dark:hover:border-[#f5f3ee] transition-colors">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-serif text-3xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-3">
                    How to spend 45 minutes like a pro
                  </h3>
                  <p className="text-lg text-[#5c5653] dark:text-[#a39c94] leading-relaxed">
                    Interview tips, Debugging tips.
                  </p>
                </div>
                <button className="px-6 py-2.5 border border-[#1a1816] dark:border-[#f5f3ee] text-[#1a1816] dark:text-[#f5f3ee] hover:bg-[#1a1816] hover:text-[#faf9f6] dark:hover:bg-[#f5f3ee] dark:hover:text-[#1a1816] transition-all text-sm font-medium whitespace-nowrap">
                  Explore →
                </button>
              </div>
            </div>

            {/* Aha! moments */}
            <div className="border border-[#e8e3db] dark:border-[#2d2a26] p-10 hover:border-[#1a1816] dark:hover:border-[#f5f3ee] transition-colors">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-serif text-3xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-3">
                    Aha! moments
                  </h3>
                  <p className="text-lg text-[#5c5653] dark:text-[#a39c94] leading-relaxed">
                    List of curated purely interesting questions for you.
                  </p>
                </div>
                <button className="px-6 py-2.5 border border-[#1a1816] dark:border-[#f5f3ee] text-[#1a1816] dark:text-[#f5f3ee] hover:bg-[#1a1816] hover:text-[#faf9f6] dark:hover:bg-[#f5f3ee] dark:hover:text-[#1a1816] transition-all text-sm font-medium whitespace-nowrap">
                  Explore →
                </button>
              </div>
            </div>

            {/* See my growth */}
            <div className="border border-[#e8e3db] dark:border-[#2d2a26] p-10 hover:border-[#1a1816] dark:hover:border-[#f5f3ee] transition-colors">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-serif text-3xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-3">
                    See my growth
                  </h3>
                  <p className="text-lg text-[#5c5653] dark:text-[#a39c94] leading-relaxed">
                    Your coach is still growing.
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
                Daiki is a passionate algorithm enthusiast and a LeetCode Guardian—a prestigious badge awarded to users who
                consistently rank in the top 5% of participants in LeetCode's weekly contests. This achievement signifies
                exceptional skill in competitive programming and reflects years of dedicated practice, strong problem-solving
                abilities, and consistent effort. Daiki is committed to helping others discover the elegance and joy of
                algorithmic thinking through curated problems and a learning approach that values deep understanding.
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

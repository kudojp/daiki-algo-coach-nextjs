import Image from "next/image";

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

      {/* Problem Categories Section */}
      <section id="problems" className="py-32 px-6 lg:px-8 border-t border-[#e8e3db] dark:border-[#2d2a26]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20">
            <h2 className="font-serif text-6xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-6 tracking-tight">
              550+ curated problems
            </h2>
            <p className="text-xl text-[#5c5653] dark:text-[#a39c94] leading-relaxed max-w-2xl">
              Start wherever feels comfortable and progress naturally at your own pace.
            </p>
          </div>

          <div className="space-y-6">
            {/* Easy */}
            <div className="border border-[#e8e3db] dark:border-[#2d2a26] p-10 hover:border-[#1a1816] dark:hover:border-[#f5f3ee] transition-colors">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-sm text-[#5c5653] dark:text-[#a39c94] mb-2">Easy</div>
                  <h3 className="font-serif text-3xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-3">
                    Foundations
                  </h3>
                  <p className="text-lg text-[#5c5653] dark:text-[#a39c94] leading-relaxed mb-4">
                    Begin with fundamentals. Arrays, strings, hash tables, and basic algorithms that form the bedrock of problem-solving.
                  </p>
                  <p className="text-sm text-[#5c5653] dark:text-[#a39c94]">200+ problems</p>
                </div>
                <button className="px-6 py-2.5 border border-[#1a1816] dark:border-[#f5f3ee] text-[#1a1816] dark:text-[#f5f3ee] hover:bg-[#1a1816] hover:text-[#faf9f6] dark:hover:bg-[#f5f3ee] dark:hover:text-[#1a1816] transition-all text-sm font-medium whitespace-nowrap">
                  Explore →
                </button>
              </div>
            </div>

            {/* Medium */}
            <div className="border border-[#e8e3db] dark:border-[#2d2a26] p-10 hover:border-[#1a1816] dark:hover:border-[#f5f3ee] transition-colors">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-sm text-[#5c5653] dark:text-[#a39c94] mb-2">Medium</div>
                  <h3 className="font-serif text-3xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-3">
                    Deepening
                  </h3>
                  <p className="text-lg text-[#5c5653] dark:text-[#a39c94] leading-relaxed mb-4">
                    Explore trees, graphs, and dynamic programming. Build sophisticated problem-solving techniques through practice.
                  </p>
                  <p className="text-sm text-[#5c5653] dark:text-[#a39c94]">250+ problems</p>
                </div>
                <button className="px-6 py-2.5 border border-[#1a1816] dark:border-[#f5f3ee] text-[#1a1816] dark:text-[#f5f3ee] hover:bg-[#1a1816] hover:text-[#faf9f6] dark:hover:bg-[#f5f3ee] dark:hover:text-[#1a1816] transition-all text-sm font-medium whitespace-nowrap">
                  Explore →
                </button>
              </div>
            </div>

            {/* Hard */}
            <div className="border border-[#e8e3db] dark:border-[#2d2a26] p-10 hover:border-[#1a1816] dark:hover:border-[#f5f3ee] transition-colors">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-sm text-[#5c5653] dark:text-[#a39c94] mb-2">Hard</div>
                  <h3 className="font-serif text-3xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-3">
                    Mastery
                  </h3>
                  <p className="text-lg text-[#5c5653] dark:text-[#a39c94] leading-relaxed mb-4">
                    Challenge yourself with complex problems requiring deep insight and creative thinking. Discover elegant solutions.
                  </p>
                  <p className="text-sm text-[#5c5653] dark:text-[#a39c94]">100+ problems</p>
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
              <div className="flex flex-col gap-4">
                <a
                  href="https://www.linkedin.com/in/kudojp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-[#5c5653] dark:text-[#a39c94] hover:text-[#1a1816] dark:hover:text-[#f5f3ee] transition-colors group"
                >
                  <span className="text-sm font-medium">LinkedIn Profile</span>
                  <span className="text-sm">→</span>
                </a>
                <a
                  href="https://leetcode.com/u/kudojp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-[#5c5653] dark:text-[#a39c94] hover:text-[#1a1816] dark:hover:text-[#f5f3ee] transition-colors group"
                >
                  <span className="text-sm font-medium">LeetCode Profile</span>
                  <span className="text-sm">→</span>
                </a>
                <a
                  href="https://github.com/kudojp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-[#5c5653] dark:text-[#a39c94] hover:text-[#1a1816] dark:hover:text-[#f5f3ee] transition-colors group"
                >
                  <span className="text-sm font-medium">GitHub Profile</span>
                  <span className="text-sm">→</span>
                </a>
                <a
                  href="https://www.youtube.com/@daiki-algo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-[#5c5653] dark:text-[#a39c94] hover:text-[#1a1816] dark:hover:text-[#f5f3ee] transition-colors group"
                >
                  <span className="text-sm font-medium">YouTube Channel</span>
                  <span className="text-sm">→</span>
                </a>
              </div>
            </div>
            <div className="h-96 bg-[#e8e3db] dark:bg-[#2d2a26] rounded-sm flex items-center justify-center">
              <Image
                src="/daiki_icon.jpg"
                alt="Daiki Profile"
                width={200}
                height={200}
                className="object-contain"
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

import Image from "next/image";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function MobileView() {
  return (
    <div className="md:hidden min-h-screen bg-[#faf9f6] dark:bg-[#1a1816] overflow-x-hidden">
      {/* Navigation */}
      <nav className="border-b border-[#e8e3db] dark:border-[#2d2a26]">
        <div className="px-5">
          <div className="flex justify-between items-center h-14">
            <a href="/" className="flex items-center gap-2">
              <Image
                src="/DAC_icon.png"
                alt="Daiki Algo Coach Logo"
                width={24}
                height={24}
                className="object-contain"
              />
              <span className="font-serif font-bold text-sm text-[#1a1816] dark:text-[#f5f3ee] tracking-tight">
                Daiki Algo Coach
              </span>
            </a>
            <div className="flex gap-3 items-center text-xs">
              <a href="#features" className="text-[#5c5653] dark:text-[#a39c94]">
                Features
              </a>
              <a href="#problems" className="text-[#5c5653] dark:text-[#a39c94]">
                Offerings
              </a>
              <a href="#coach" className="text-[#5c5653] dark:text-[#a39c94]">
                Coach
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-10 pb-10 px-5">
        <div>
          <h1 className="font-serif text-2xl font-bold mb-5 text-[#1a1816] dark:text-[#f5f3ee] leading-tight tracking-tight">
            Discover the joy of algorithms
          </h1>

          <p className="text-sm text-[#5c5653] dark:text-[#a39c94] mb-8 leading-relaxed">
            A thoughtful learning platform for exploring algorithmic thinking through carefully curated problems.
          </p>

          <div className="flex flex-col gap-3">
            <button className="w-full py-3 border border-[#1a1816] dark:border-[#f5f3ee] text-[#1a1816] dark:text-[#f5f3ee] font-medium text-sm">
              Start learning
            </button>
            <button className="w-full py-3 text-[#5c5653] dark:text-[#a39c94] font-medium text-sm text-left">
              Browse problems →
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 px-5 border-t border-[#e8e3db] dark:border-[#2d2a26]">
        <div className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-4 tracking-tight">
            Built for learners
          </h2>
          <p className="text-sm text-[#5c5653] dark:text-[#a39c94] leading-relaxed">
            Thoughtfully designed tools to support your journey.
          </p>
        </div>

        <div className="space-y-10">
          {/* Feature 1 */}
          <div>
            <div className="h-48 bg-[#e8e3db] dark:bg-[#2d2a26] rounded-sm mb-4"></div>
            <h3 className="font-serif text-xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-2">
              Guided LeetCode Practice
            </h3>
            <p className="text-sm text-[#5c5653] dark:text-[#a39c94] leading-relaxed">
              I will guide you through a roadmap built around core algorithm patterns, helping you grasp the essence first and practice more effectively. I also select problems purely for enjoyment, letting you experience algorithms as a puzzle and enjoy those "Aha!" moments.
            </p>
          </div>

          {/* Feature 2 */}
          <div>
            <div className="h-48 bg-[#e8e3db] dark:bg-[#2d2a26] rounded-sm mb-4"></div>
            <h3 className="font-serif text-xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-2">
              Real Coding Interview Tactics
            </h3>
            <p className="text-sm text-[#5c5653] dark:text-[#a39c94] leading-relaxed">
              I will teach you how to excel in a 45-minute real coding interview, sharing tips to manage time, communicate clearly, and debug efficiently. I'll also guide you in finding a foothold when you're asked a tough question and get stuck.
            </p>
          </div>

          {/* Feature 3 */}
          <div>
            <div className="h-48 bg-[#e8e3db] dark:bg-[#2d2a26] rounded-sm mb-4"></div>
            <h3 className="font-serif text-xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-2">
              Consistency & Growth Coaching
            </h3>
            <p className="text-sm text-[#5c5653] dark:text-[#a39c94] leading-relaxed">
              Consistency is key in your algorithm solving practice. I'll support your motivation, pace, and practice rhythm to help you keep growing. Bring your determination and love for algorithms—I'll take care of the rest.
            </p>
          </div>
        </div>
      </section>

      {/* Contents Section */}
      <section id="problems" className="py-12 px-5 border-t border-[#e8e3db] dark:border-[#2d2a26]">
        <div className="mb-10">
          <h2 className="font-serif text-3xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-4 tracking-tight">
            Offerings
          </h2>
          <p className="text-sm text-[#5c5653] dark:text-[#a39c94] leading-relaxed">
            A journey designed to ignite your curiosity, sharpen your skills, and fuel your growth at every step.
          </p>
        </div>

        <div className="space-y-4">
          {/* Algorithm patterns, distilled */}
          <div className="border border-[#e8e3db] dark:border-[#2d2a26] p-6">
            <h3 className="font-serif text-xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-2">
              LeetCode algorithm patterns, distilled
            </h3>
            <p className="text-sm text-[#5c5653] dark:text-[#a39c94] leading-relaxed mb-3">
              After solving and revisiting over 1,300 LeetCode problems, I've discovered that every topic — from Binary Search to Dynamic Programming — rests on a few core patterns. By practicing multiple problems of the same pattern in sequence, you can internalize each trick incredibly efficiently. Let me guide you through these distilled tricks. Once you internalize them, you'll start seeing every problem as fitting one of them.
            </p>
            <div className="flex justify-end">
              <button className="px-4 py-2 border border-[#1a1816] dark:border-[#f5f3ee] text-[#1a1816] dark:text-[#f5f3ee] text-xs font-medium">
                Explore →
              </button>
            </div>
          </div>

          {/* The art of 45-minute coding interviews */}
          <div className="border border-[#e8e3db] dark:border-[#2d2a26] p-6">
            <h3 className="font-serif text-xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-2">
              The art of 45-minute coding interviews
            </h3>
            <p className="text-sm text-[#5c5653] dark:text-[#a39c94] leading-relaxed mb-3">
              A coding interview is not just a test — it's a performance. Every move you make should attract and engage your interviewer. I'll help you master the rhythm: time management, clear and concise explanations, debugging effectively under pressure, and uncovering a solution path when facing a tough question. Treat your next interview like a rock show — and learn to shine on that stage.
            </p>
            <div className="flex justify-end">
              <button className="px-4 py-2 border border-[#1a1816] dark:border-[#f5f3ee] text-[#1a1816] dark:text-[#f5f3ee] text-xs font-medium">
                Explore →
              </button>
            </div>
          </div>

          {/* Your motivating pacer */}
          <div className="border border-[#e8e3db] dark:border-[#2d2a26] p-6">
            <h3 className="font-serif text-xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-2">
              Your motivating pacer
            </h3>
            <p className="text-sm text-[#5c5653] dark:text-[#a39c94] leading-relaxed mb-3">
              What I want to teach you isn't just interview tricks. My job is to help you stay consistent, focused, and confident — even when progress feels slow or pressure builds. I'll make sure you can concentrate fully, feel the momentum of every problem you solve, and keep your motivation alive throughout the journey. That's what I'm here for.
            </p>
            <div className="flex justify-end">
              <button className="px-4 py-2 border border-[#1a1816] dark:border-[#f5f3ee] text-[#1a1816] dark:text-[#f5f3ee] text-xs font-medium">
                Explore →
              </button>
            </div>
          </div>

          {/* Curated Aha! moments */}
          <div className="border border-[#e8e3db] dark:border-[#2d2a26] p-6">
            <h3 className="font-serif text-xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-2">
              Curated Aha! moments
            </h3>
            <p className="text-sm text-[#5c5653] dark:text-[#a39c94] leading-relaxed mb-3">
              Algorithms are not merely tools for interviews — they're a source of joy. Here, you'll find a handpicked list of problems that spark curiosity for their own sake — puzzles so elegant that you can't help but whisper, "Ah, so that's how it works." Explore these problems not for career advancement, but for the sheer pleasure of discovery. I'll let you fall into the beautiful depths of algorithmic thinking.
            </p>
            <div className="flex justify-end">
              <button className="px-4 py-2 border border-[#1a1816] dark:border-[#f5f3ee] text-[#1a1816] dark:text-[#f5f3ee] text-xs font-medium">
                Explore →
              </button>
            </div>
          </div>

          {/* An ever-growing coach */}
          <div className="border border-[#e8e3db] dark:border-[#2d2a26] p-6">
            <h3 className="font-serif text-xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-2">
              An ever-growing coach
            </h3>
            <p className="text-sm text-[#5c5653] dark:text-[#a39c94] leading-relaxed mb-3">
              A coach should never stop learning, and I am no exception. I love algorithms and constantly challenge myself, seeking new and tougher problems that push the boundaries. Though I have achieved milestones, my journey is far from over, and I embrace the struggles that come with growth. I share this process openly — not as a finished expert, but as a fellow learner walking beside you. Together, we evolve.
            </p>
            <div className="flex justify-end">
              <button className="px-4 py-2 border border-[#1a1816] dark:border-[#f5f3ee] text-[#1a1816] dark:text-[#f5f3ee] text-xs font-medium">
                Explore →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Coach Section */}
      <section id="coach" className="py-12 px-5 border-t border-[#e8e3db] dark:border-[#2d2a26]">
        <div className="text-xs text-[#5c5653] dark:text-[#a39c94] mb-3">Your coach</div>
        <h2 className="font-serif text-3xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-4 tracking-tight">
          Meet Daiki
        </h2>

        <div className="h-64 bg-[#e8e3db] dark:bg-[#2d2a26] rounded-sm flex items-center justify-center mb-6 overflow-hidden">
          <Image
            src="/daiki_icon.png"
            alt="Daiki Profile"
            width={1778}
            height={1654}
            className="object-cover w-full h-full scale-110"
          />
        </div>

        <p className="text-sm text-[#5c5653] dark:text-[#a39c94] leading-relaxed mb-6">
          Hi, I'm Daiki — your coach based in Tokyo, Japan. I'm a passionate algorithm enthusiast and a LeetCode Guardian, ranked within the top 1.2% of participants worldwide. My major in university was geophysics, not computer science — so I had to teach myself everything from scratch, through countless late nights of trial, error, and discovery. That process taught me something invaluable: growth isn't about talent; it's about consistency, curiosity, passion, and the courage to keep going when things get tough — and above all, a deep love and dedication for the craft itself. Now, I aim to share that mindset — embracing your journey of curiosity, exploration, and growth towards the achievement of your goal. Let's grow together, one problem at a time.
        </p>

        <div className="flex gap-6 justify-center">
          <a
            href="https://www.linkedin.com/in/kudojp/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5c5653] dark:text-[#a39c94] hover:text-[#1a1816] dark:hover:text-[#f5f3ee] transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://leetcode.com/u/kudojp/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5c5653] dark:text-[#a39c94] hover:text-[#1a1816] dark:hover:text-[#f5f3ee] transition-colors"
            aria-label="LeetCode Profile"
          >
            <SiLeetcode size={32} />
          </a>
          <a
            href="https://github.com/kudojp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5c5653] dark:text-[#a39c94] hover:text-[#1a1816] dark:hover:text-[#f5f3ee] transition-colors"
            aria-label="GitHub Profile"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://www.youtube.com/@daiki-algo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5c5653] dark:text-[#a39c94] hover:text-[#1a1816] dark:hover:text-[#f5f3ee] transition-colors"
            aria-label="YouTube Channel"
          >
            <FaYoutube size={32} />
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-5 border-t border-[#e8e3db] dark:border-[#2d2a26]">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-5 tracking-tight">
            Begin your journey
          </h2>
          <p className="text-sm text-[#5c5653] dark:text-[#a39c94] mb-8 leading-relaxed">
            Join a community of thoughtful learners exploring the elegant world of algorithms.
          </p>
          <button className="w-full py-3 border border-[#1a1816] dark:border-[#f5f3ee] text-[#1a1816] dark:text-[#f5f3ee] font-medium text-sm">
            Start learning today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-5 border-t border-[#e8e3db] dark:border-[#2d2a26]">
        <div className="mb-8">
          <div className="font-serif font-bold text-base text-[#1a1816] dark:text-[#f5f3ee] mb-3">
            Daiki Algo Coach
          </div>
          <p className="text-[#5c5653] dark:text-[#a39c94] text-xs leading-relaxed">
            A learning platform dedicated to the joy of algorithms and thoughtful problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-[#1a1816] dark:text-[#f5f3ee] font-medium mb-3 text-xs">Learn</h4>
            <ul className="space-y-2 text-[#5c5653] dark:text-[#a39c94] text-xs">
              <li><a href="#features">Features</a></li>
              <li><a href="#problems">Problems</a></li>
              <li><a href="#">Learning paths</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#1a1816] dark:text-[#f5f3ee] font-medium mb-3 text-xs">Connect</h4>
            <ul className="space-y-2 text-[#5c5653] dark:text-[#a39c94] text-xs">
              <li><a href="https://www.linkedin.com/in/kudojp/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/kudojp" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.youtube.com/@daiki-algo" target="_blank" rel="noopener noreferrer">YouTube</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-[#e8e3db] dark:border-[#2d2a26]">
          <p className="text-[#5c5653] dark:text-[#a39c94] text-xs mb-3 text-center">
            © 2025 Daiki Algo Coach
          </p>
          <div className="flex gap-6 justify-center text-[#5c5653] dark:text-[#a39c94] text-xs">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

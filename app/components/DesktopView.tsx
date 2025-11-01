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
              <a href="#offerings" className="text-[#5c5653] hover:text-[#1a1816] dark:text-[#a39c94] dark:hover:text-[#f5f3ee] transition-colors text-sm">
                Offerings
              </a>
              <a href="#contents" className="text-[#5c5653] hover:text-[#1a1816] dark:text-[#a39c94] dark:hover:text-[#f5f3ee] transition-colors text-sm">
                Contents
              </a>
              <a href="#coach" className="text-[#5c5653] hover:text-[#1a1816] dark:text-[#a39c94] dark:hover:text-[#f5f3ee] transition-colors text-sm">
                Coach
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="font-serif text-5xl font-bold text-[#1a1816] dark:text-[#f5f3ee] tracking-tight mb-16" style={{ lineHeight: '1.2' }}>
              <div className="mb-10">Learn, Solve, Grow</div>
              <div className="mb-10">Experience the Joy of Algorithms</div>
            </h1>

            <p className="text-2xl text-[#5c5653] dark:text-[#a39c94] leading-relaxed max-w-2xl mx-auto mb-14">
              I guide you through LeetCode problems, helping you master algorithms and excel in coding interviews.
            </p>

            <div className="flex gap-4 justify-center">
              <a href="#contents" className="px-8 py-4 border border-[#1a1816] dark:border-[#f5f3ee] text-[#1a1816] dark:text-[#f5f3ee] hover:bg-[#1a1816] hover:text-[#faf9f6] dark:hover:bg-[#f5f3ee] dark:hover:text-[#1a1816] transition-all font-medium">
                See Contents
              </a>
              <a href="#coach" className="px-8 py-4 text-[#5c5653] dark:text-[#a39c94] hover:text-[#1a1816] dark:hover:text-[#f5f3ee] transition-colors font-medium">
                Meet Coach →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="offerings" className="py-20 px-6 lg:px-8 border-t border-[#e8e3db] dark:border-[#2d2a26]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20">
            <h2 className="font-serif text-6xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-6 tracking-tight">
              Offerings
            </h2>
            <p className="text-xl text-[#5c5653] dark:text-[#a39c94] leading-relaxed max-w-2xl">
              Your journey through interview challenges, let alone pure algorithmic joy, with consistent growth—all in one path.
            </p>
          </div>

          <div className="space-y-20">
            {/* Feature 1 */}
            <div className="grid grid-cols-2 gap-16 items-start">
              <div>
                <h3 className="font-serif text-3xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-4">
                  Guided LeetCode Practice
                </h3>
                <p className="text-lg text-[#5c5653] dark:text-[#a39c94] leading-relaxed">
                  I will guide you through a roadmap built around core algorithm patterns, helping you grasp the essence first and practice more effectively.
                  <br />
                  I also select problems purely for enjoyment, letting you experience algorithms as a puzzle and enjoy those "Aha!" moments.
                </p>
              </div>
              <div className="h-64 bg-[#e8e3db] dark:bg-[#2d2a26] rounded-sm"></div>
            </div>

            {/* Feature 2 */}
            <div className="grid grid-cols-2 gap-16 items-start">
              <div className="order-2">
                <h3 className="font-serif text-3xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-4">
                  Real Coding Interview Tactics
                </h3>
                <p className="text-lg text-[#5c5653] dark:text-[#a39c94] leading-relaxed">
                  I will teach you how to excel in a 45-minute real coding interview, sharing tips to manage time, communicate clearly, and debug efficiently.
                  <br />
                  I'll also guide you in finding a foothold when you're asked a tough question and get stuck.
                </p>
              </div>
              <div className="h-64 bg-[#e8e3db] dark:bg-[#2d2a26] rounded-sm order-1"></div>
            </div>

            {/* Feature 3 */}
            <div className="grid grid-cols-2 gap-16 items-start">
              <div>
                <h3 className="font-serif text-3xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-4">
                  Consistency & Growth Coaching
                </h3>
                <p className="text-lg text-[#5c5653] dark:text-[#a39c94] leading-relaxed">
                  Consistency is key in your algorithm solving practice.
                  <br />
                  I'll support your motivation, pace, and practice rhythm to help you keep growing.
                  <br />
                  Bring your determination and love for algorithms—I'll take care of the rest.
                </p>
              </div>
              <div className="h-64 bg-[#e8e3db] dark:bg-[#2d2a26] rounded-sm"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contents Section */}
      <section id="contents" className="py-20 px-6 lg:px-8 border-t border-[#e8e3db] dark:border-[#2d2a26]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="font-serif text-6xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-6 tracking-tight">
              Contents
            </h2>
            <p className="text-xl text-[#5c5653] dark:text-[#a39c94] leading-relaxed max-w-2xl">
              A journey designed to ignite your curiosity, sharpen your skills, and fuel your growth at every step.
            </p>
          </div>

          <div className="space-y-4">
            {/* Algorithm patterns, distilled */}
            <div className="border border-[#e8e3db] dark:border-[#2d2a26] p-8 hover:border-[#1a1816] dark:hover:border-[#f5f3ee] transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-serif text-3xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-3">
                    LeetCode algorithm patterns, distilled
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
            <div className="border border-[#e8e3db] dark:border-[#2d2a26] p-8 hover:border-[#1a1816] dark:hover:border-[#f5f3ee] transition-colors">
              <div className="flex items-start justify-between mb-4">
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
            <div className="border border-[#e8e3db] dark:border-[#2d2a26] p-8 hover:border-[#1a1816] dark:hover:border-[#f5f3ee] transition-colors">
              <div className="flex items-start justify-between mb-4">
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
            <div className="border border-[#e8e3db] dark:border-[#2d2a26] p-8 hover:border-[#1a1816] dark:hover:border-[#f5f3ee] transition-colors">
              <div className="flex items-start justify-between mb-4">
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
            <div className="border border-[#e8e3db] dark:border-[#2d2a26] p-8 hover:border-[#1a1816] dark:hover:border-[#f5f3ee] transition-colors">
              <div className="flex items-start justify-between mb-4">
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
      <section id="coach" className="py-20 px-6 lg:px-8 border-t border-[#e8e3db] dark:border-[#2d2a26]">
        <div className="max-w-5xl mx-auto">
          <div className="text-sm text-[#5c5653] dark:text-[#a39c94] mb-4">Your coach</div>
          <h2 className="font-serif text-5xl font-bold text-[#1a1816] dark:text-[#f5f3ee] mb-12 tracking-tight">
            Meet Daiki
          </h2>
          <div className="grid grid-cols-[60%_40%] gap-16 items-start">
            <div>
              <p className="text-lg text-[#5c5653] dark:text-[#a39c94] leading-relaxed mb-8">
                Hi, I'm Daiki — your coach based in Tokyo, Japan.
                <br />
                I'm a passionate algorithm enthusiast and a LeetCode Guardian, ranked within the top 1.2% of participants worldwide.
                <br />
                <br />
                My major in university was geophysics, not computer science — so I had to teach myself everything from scratch, through countless late nights of trial, error, and discovery.
                <br />
                <br />
                That process taught me something invaluable: growth isn't about talent; it's about consistency, curiosity, passion, and the courage to keep going when things get tough — and above all, a deep love and dedication for the craft itself.
                <br />
                <br />
                Now, I aim to share that mindset — embracing your journey of curiosity, exploration, and growth towards the achievement of your goal.
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
            <div className="h-80 bg-[#e8e3db] dark:bg-[#2d2a26] rounded-sm flex items-center justify-center overflow-hidden">
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

      {/* Footer */}
      <footer className="border-t border-[#e8e3db] dark:border-[#2d2a26]">
        <div className="py-16 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-1/4">
              <div className="font-serif font-bold text-2xl text-[#1a1816] dark:text-[#f5f3ee] mb-3">
                Daiki Algo Coach
              </div>
              <p className="text-xs text-[#7a7a7a] dark:text-[#7a7a7a] mb-4 leading-relaxed">
                A learning platform dedicated to the joy of algorithms and thoughtful problem-solving.
              </p>
              <div className="flex flex-row gap-x-2 items-center">
                <a
                  href="https://www.linkedin.com/in/kudojp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border-[#f0f0f060] border-2 group transition-all ease-in-out duration-300 cursor-pointer hover:bg-[#1a1816] dark:hover:bg-[#f5f3ee]"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin size={12} className="fill-[#7a7a7a] group-hover:fill-white dark:group-hover:fill-[#1a1816]" />
                </a>
                <a
                  href="https://leetcode.com/u/kudojp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border-[#f0f0f060] border-2 group transition-all ease-in-out duration-300 cursor-pointer hover:bg-[#1a1816] dark:hover:bg-[#f5f3ee]"
                  aria-label="LeetCode Profile"
                >
                  <SiLeetcode size={12} className="fill-[#7a7a7a] group-hover:fill-white dark:group-hover:fill-[#1a1816]" />
                </a>
                <a
                  href="https://github.com/kudojp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border-[#f0f0f060] border-2 group transition-all ease-in-out duration-300 cursor-pointer hover:bg-[#1a1816] dark:hover:bg-[#f5f3ee]"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={12} className="fill-[#7a7a7a] group-hover:fill-white dark:group-hover:fill-[#1a1816]" />
                </a>
                <a
                  href="https://www.youtube.com/@daiki-algo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-1.5 py-2 rounded-full border-[#f0f0f060] border-2 group transition-all ease-in-out duration-300 cursor-pointer hover:bg-[#1a1816] dark:hover:bg-[#f5f3ee]"
                  aria-label="YouTube Channel"
                >
                  <FaYoutube size={12} className="fill-[#7a7a7a] group-hover:fill-white dark:group-hover:fill-[#1a1816]" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#e8e3db] dark:border-[#2d2a26] py-2">
          <p className="text-center text-[#5c5653] dark:text-[#a39c94] text-sm">
            Copyright © 2025 Daiki Algo Coach | All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

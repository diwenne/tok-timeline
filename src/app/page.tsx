"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { TimelineItem } from "@/components/timeline-item";
import { ReferenceList } from "@/components/reference-list";
import { timelineEvents } from "@/data/timeline";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollToTimeline = () => {
    const element = document.getElementById('timeline-start');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans selection:bg-primary/30">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl text-center space-y-8"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-primary">
                Technology's Impact
              </span>
              <br />
              <span className="text-foreground">on 2D Visual Arts</span>
            </h1>
            <p className="text-lg text-muted-foreground mt-4">
              Diwen Huang • November 27, 2025
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Throughout history, new tech has kept changing how artists make and share their work.
            Check out how different innovations shaped artistic methods, how art gets distributed, and what people value in art.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Button
              size="lg"
              onClick={scrollToTimeline}
              className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(var(--primary),0.5)] transition-all hover:scale-105"
            >
              Explore Timeline <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section id="timeline-start" className="max-w-5xl mx-auto px-4 py-24 relative">
        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <TimelineItem key={index} event={event} index={index} />
          ))}
        </div>
      </section>

      {/* References Section */}
      <ReferenceList />

      {/* Footer */}
      <footer className="py-12 text-center text-muted-foreground border-t border-border/30 bg-background/50 backdrop-blur-sm">
        <p>© {new Date().getFullYear()} Diwen Huang • TOK Assignment</p>
      </footer>
    </div>
  );
}

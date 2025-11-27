"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TimelineEvent } from "@/data/timeline";
import { Quote } from "lucide-react";

interface TimelineItemProps {
    event: TimelineEvent;
    index: number;
}

export function TimelineItem({ event, index }: TimelineItemProps) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex flex-col md:flex-row gap-8 mb-24 relative ${isEven ? "md:flex-row-reverse" : ""
                }`}
        >
            {/* Timeline Line (Center) */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-transparent -translate-x-1/2 hidden md:block" />

            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10 hidden md:block shadow-[0_0_10px_rgba(var(--primary),0.5)]" />

            {/* Date/Year (Side) */}
            <div className={`flex-1 flex flex-col justify-start ${isEven ? "md:items-start" : "md:items-end"} pt-1`}>
                <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400 mb-2">
                    {event.year}
                </span>
                <Badge variant="outline" className="w-fit text-lg py-1 px-3 border-primary/30">
                    {event.category}
                </Badge>
            </div>

            {/* Content Card */}
            <div className="flex-1 pl-8 md:pl-0">
                <Card className="border-primary/10 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300 shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold leading-tight">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                            {event.description}
                        </p>

                        <ul className="space-y-2">
                            {event.details.map((detail, i) => (
                                <li key={i} className="flex gap-2 text-sm text-foreground/80">
                                    <span className="text-primary">•</span>
                                    <span>{detail}</span>
                                </li>
                            ))}
                        </ul>

                        {event.quote && (
                            <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary mt-4 relative">
                                <Quote className="absolute top-2 left-2 w-4 h-4 text-primary/40" />
                                <p className="italic text-sm pl-4 mb-2">"{event.quote.text}"</p>
                                <p className="text-xs text-right font-semibold text-primary">— {event.quote.author}</p>
                            </div>
                        )}

                        <div className="pt-4 border-t border-border/50">
                            <h4 className="font-semibold text-primary mb-1 text-sm uppercase tracking-wider">Impact</h4>
                            <p className="text-sm text-muted-foreground">{event.impact}</p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-purple-400 mb-1 text-sm uppercase tracking-wider">Cultural Value</h4>
                            <p className="text-sm text-muted-foreground">{event.culturalValue}</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </motion.div>
    );
}

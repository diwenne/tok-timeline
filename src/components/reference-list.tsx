"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { references } from "@/data/timeline";

export function ReferenceList() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mt-32 mb-16 px-4"
        >
            <Card className="bg-card/30 backdrop-blur-md border-primary/20">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                        References
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {references.map((ref, i) => (
                            <li key={i} className="text-sm text-muted-foreground break-words pl-4 border-l-2 border-primary/30 hover:border-primary transition-colors">
                                {ref}
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </motion.div>
    );
}

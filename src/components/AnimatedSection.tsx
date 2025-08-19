"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}

export default function AnimatedSection({
    children,
    className = "",
    delay = 0,
    direction = "up"
}: AnimatedSectionProps) {
    const directionVariants = {
        up: { y: 50, opacity: 0 },
        down: { y: -50, opacity: 0 },
        left: { x: 50, opacity: 0 },
        right: { x: -50, opacity: 0 }
    };

    return (
        <motion.div
            className={className}
            initial={directionVariants[direction]}
            whileInView={{
                x: 0,
                y: 0,
                opacity: 1
            }}
            transition={{
                duration: 0.6,
                delay,
                ease: "easeOut"
            }}
            viewport={{
                once: true,
                margin: "-100px"
            }}
        >
            {children}
        </motion.div>
    );
}
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Star {
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    speed: number;
}

const StarField = () => {
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        // Generate random stars
        const generateStars = () => {
            const newStars: Star[] = [];
            for (let i = 0; i < 150; i++) {
                newStars.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 3 + 1,
                    opacity: Math.random() * 0.8 + 0.2,
                    speed: Math.random() * 20 + 10,
                });
            }
            setStars(newStars);
        };

        generateStars();
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {/* Night sky gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-purple-950 to-slate-900" />

            {/* Animated stars */}
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute rounded-full bg-white"
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        opacity: star.opacity,
                    }}
                    animate={{
                        x: [0, -20, 0],
                        y: [0, -10, 0],
                        opacity: [star.opacity, star.opacity * 0.3, star.opacity],
                    }}
                    transition={{
                        duration: star.speed,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}

            {/* Shooting stars */}
            <motion.div
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                    left: '10%',
                    top: '20%',
                    boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.8)',
                }}
                animate={{
                    x: [0, 300],
                    y: [0, 150],
                    opacity: [0, 1, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 8,
                    ease: "easeOut",
                }}
            />

            <motion.div
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                    left: '80%',
                    top: '10%',
                    boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.8)',
                }}
                animate={{
                    x: [0, -250],
                    y: [0, 200],
                    opacity: [0, 1, 0],
                }}
                transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 12,
                    ease: "easeOut",
                }}
            />

            {/* Twinkling effect overlay */}
            <motion.div
                className="absolute inset-0"
                animate={{
                    opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{
                    background: `radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                       radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                       radial-gradient(circle at 60% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
                }}
            />
        </div>
    );
};

export default StarField;
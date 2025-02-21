'use client'

import { motion } from 'framer-motion'
import ParticleBackground from '@/components/ParticleBackground'


const colorConfig = {
  midnightPurple: {
    gradient: 'from-gray-900 via-purple-900/80 to-gray-900',
    textGradient: 'from-purple-300 to-amber-300',
    border: 'border-purple-400/30',
    iconColor: 'text-purple-300',
    methodologyGradient: 'from-purple-900/40 to-amber-900/20',
    accent: 'amber-300',
    skillCard: 'bg-gradient-to-br from-purple-900/20 to-amber-900/10'
  }
};

const colorScheme = colorConfig.midnightPurple;
const ContactPage = () => {
  // Form states
  return (
 <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`min-h-screen bg-gradient-to-b ${colorScheme.gradient} text-amber-50 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden`}
    >
      <ParticleBackground />
      </motion.div>)
}

export default ContactPage
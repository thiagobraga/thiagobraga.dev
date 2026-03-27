
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				// Nord triple-font system
				headline: ['"Plus Jakarta Sans"', 'sans-serif'],
				body: ['Inter', 'sans-serif'],
				label: ['Manrope', 'sans-serif'],
				// Legacy fallbacks
				sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
				playfair: ['"Playfair Display"', 'serif']
			},
			colors: {
				// Nord Palette
				nord0:  '#2E3440',
				nord1:  '#3B4252',
				nord2:  '#434C5E',
				nord3:  '#4C566A',
				nord4:  '#D8DEE9',
				nord5:  '#E5E9F0',
				nord6:  '#ECEFF4',
				// Frost
				nord7:  '#8FBCBB',
				nord8:  '#88C0D0',
				nord9:  '#81A1C1',
				nord10: '#5E81AC',
				// Aurora
				nord11: '#BF616A',
				nord12: '#D08770',
				nord13: '#EBCB8B',
				nord14: '#A3BE8C',
				nord15: '#B48EAD',
				// Semantic aliases
				surface:              '#2E3440',
				'on-surface':         '#ECEFF4',
				'on-surface-variant': '#D8DEE9',
				outline:              '#4C566A',
				primary:              '#88C0D0',
				secondary:            '#81A1C1',
				tertiary:             '#EBCB8B',
				// ── shadcn/ui tokens (keep for existing pages) ──
				border:      'hsl(var(--border))',
				input:       'hsl(var(--input))',
				ring:        'hsl(var(--ring))',
				background:  'hsl(var(--background))',
				foreground:  'hsl(var(--foreground))',
				card: {
					DEFAULT:    'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT:    'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				muted: {
					DEFAULT:    'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT:    'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT:    'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				sidebar: {
					DEFAULT:            'hsl(var(--sidebar-background))',
					foreground:         'hsl(var(--sidebar-foreground))',
					primary:            'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent:             'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border:             'hsl(var(--sidebar-border))',
					ring:               'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				DEFAULT: '0.125rem',
				sm:   'calc(var(--radius) - 4px)',
				md:   'calc(var(--radius) - 2px)',
				lg:   'var(--radius)',
				xl:   '0.75rem',
				'2xl': '1rem',
				'3xl': '1.5rem',
				full: '9999px'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to:   { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to:   { height: '0' }
				},
				'fade-in': {
					'0%':   { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-up': {
					'0%':   { opacity: '0', transform: 'translateY(24px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scroll-bounce': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%':      { transform: 'translateY(6px)' }
				}
			},
			animation: {
				'accordion-down':  'accordion-down 0.2s ease-out',
				'accordion-up':    'accordion-up 0.2s ease-out',
				'fade-in':         'fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
				'fade-up':         'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
				'scroll-bounce':   'scroll-bounce 1.5s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

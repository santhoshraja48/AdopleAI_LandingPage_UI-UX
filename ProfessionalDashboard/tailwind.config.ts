import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          50: "hsl(214, 100%, 97%)",
          100: "hsl(214, 95%, 93%)",
          500: "hsl(221.2, 83.2%, 53.3%)",
          600: "hsl(221.2, 83.2%, 48.3%)",
          700: "hsl(221.2, 83.2%, 43.3%)",
          900: "hsl(224, 76.3%, 15%)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        purple: {
          500: "hsl(262.1, 83.3%, 57.8%)",
          600: "hsl(262.1, 83.3%, 52.8%)",
          700: "hsl(262.1, 83.3%, 47.8%)",
        },
        orange: {
          500: "hsl(24.6, 95%, 53.1%)",
          600: "hsl(20.5, 90.2%, 48.2%)",
        },
        pink: {
          500: "hsl(330, 81%, 60%)",
          600: "hsl(330, 81%, 55%)",
        },
        green: {
          500: "hsl(142.1, 76.2%, 36.3%)",
          600: "hsl(142.1, 76.2%, 31.3%)",
        },
        emerald: {
          500: "hsl(158.1, 64.4%, 51.6%)",
          600: "hsl(158.1, 64.4%, 46.6%)",
        },
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseColor: {
          '0%, 100%': { backgroundColor: 'hsl(221.2, 83.2%, 53.3%)' },
          '50%': { backgroundColor: 'hsl(262.1, 83.3%, 57.8%)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in-left": "fadeInLeft 0.6s ease-out forwards",
        "fade-in-right": "fadeInRight 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        "bounce-gentle": "bounceGentle 2s ease-in-out infinite",
        "pulse-color": "pulseColor 2s ease-in-out infinite",
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, hsl(221.2, 83.2%, 53.3%), hsl(262.1, 83.3%, 57.8%))',
        'gradient-secondary': 'linear-gradient(135deg, hsl(142.1, 76.2%, 36.3%), hsl(158.1, 64.4%, 51.6%))',
        'gradient-accent': 'linear-gradient(135deg, hsl(24.6, 95%, 53.1%), hsl(20.5, 90.2%, 48.2%))',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

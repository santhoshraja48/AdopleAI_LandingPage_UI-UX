import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import axios from 'axios';
import { CreditCard, CheckCircle, AlertCircle, Loader, Lock, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import { API_BASE_URL } from '../lib/queryClient';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_51RmG6PIpFCZpCwt5u8PwwmJtt2fGoAy8vall9IfUZ4N6Ml7jjM0A2gZImQFNZY27uIBfIBtMVPgCay0AarVvFloK00y5NHeSUN');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentSucceeded, setPaymentSucceeded] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password: string) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    if (!username.trim() || !email.trim() || !password.trim()) {
      setStatus({ type: 'error', message: 'All fields are required.' });
      return;
    }

    if (!validateEmail(email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    if (!validatePassword(password)) {
      setStatus({
        type: 'error',
        message: 'Password must contain at least 8 characters, including uppercase, lowercase, number, and special character.',
      });
      return;
    }

    setIsLoading(true);
    setStatus(null);

    try {
      const res = await axios.post(`${API_BASE_URL}/api/create-payment-intent`, {
        amount: 1000,
      });

      const { clientSecret } = res.data;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
          billing_details: {
            name: username,
            email: email,
          },
        },
      });

      if (result.error) {
        setStatus({
          type: 'error',
          message: `Payment failed: ${result.error.message}`,
        });
        setIsLoading(false);
      } else {
        if (result.paymentIntent.status === 'succeeded') {
          try {
            await axios.post(`${API_BASE_URL}/api/register-user`, {
              email,
              password,
            });
            setStatus({
              type: 'success',
              message: 'Payment succeeded! 🎉 Redirecting...',
            });
            setPaymentSucceeded(true);
            setIsLoading(false);
            setTimeout(() => {
              window.location.href = 'http://agent.adople.ai/';
            }, 1500);
          } catch (regErr) {
            setStatus({
              type: 'error',
              message: 'Payment succeeded, but registration failed. Please contact support.',
            });
            setIsLoading(false);
          }
        }
      }
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again.',
      });
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setPaymentSucceeded(false);
    setStatus(null);
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        fontFamily: '"Inter", sans-serif',
        color: '#334155',
        '::placeholder': {
          color: '#94a3b8',
        },
      },
      invalid: {
        color: '#ef4444',
      },
    },
  };

  return (
    <div className="w-full bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-8 border border-gray-200 dark:border-slate-600">
      {paymentSucceeded ? (
        <div className="text-center p-6">
          <CheckCircle className="mx-auto text-green-500 w-16 h-16 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
          <p className="mb-4">Your order has been processed.</p>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Make Another Payment
          </button>
        </div>
      ) : (
        <>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Complete Your Purchase</h3>
            <p className="text-slate-600 dark:text-slate-400">Secure payment processing with Stripe</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your username"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Create a secure password"
                required
              />
              <p className="text-xs text-slate-500 mt-1">Must contain 8+ characters with uppercase, lowercase, number, and special character</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-blue-600" />
                Card Details
              </label>
              <div className="p-4 border border-gray-300 rounded-xl bg-gray-50">
                <CardElement
                  options={cardElementOptions}
                  className="p-2"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={!stripe || isLoading}
              className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2 ${
                (!stripe || isLoading)
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
              }`}
            >
              {isLoading ? (
                <>
                  <Loader className="animate-spin w-5 h-5" />
                  Processing...
                </>
              ) : (
                <>
                  <Lock className="w-5 h-5" />
                  Pay $10.00 Securely
                </>
              )}
            </button>

            {status && (
              <div
                className={`p-4 rounded-xl flex items-center gap-3 ${
                  status.type === 'error'
                    ? 'bg-gradient-to-r from-red-50 to-pink-50 border border-red-200'
                    : 'bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200'
                }`}
              >
                {status.type === 'error' ? (
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                ) : (
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                )}
                <span className={status.type === 'error' ? 'text-red-700 font-medium' : 'text-green-700 font-medium'}>
                  {status.message}
                </span>
              </div>
            )}
          </form>

          {/* Trust Indicators */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-center gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-green-500" />
                <span>256-bit SSL</span>
              </div>
              <div className="flex items-center gap-1">
                <CreditCard className="w-4 h-4 text-blue-500" />
                <span>Stripe Secure</span>
              </div>
              <div className="flex items-center gap-1">
                <Lock className="w-4 h-4 text-purple-500" />
                <span>PCI Compliant</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

function PricingPlans({ onBuyNow }: { onBuyNow: () => void }) {
  const features = [
    'Increased usage limits across chat, file uploads, and search',
    'Access to advanced AI features and structured deep research (StructRAG, LightGraphRAG)',
    'Secure SSO (OIDC/SAML/OAuth2), RBAC, and audit logging',
    'Real-time document indexing and enhanced multi-source search',
  ];

  return (
    <div className="bg-white dark:bg-slate-800 border-2 border-blue-500 dark:border-blue-400 rounded-2xl shadow-xl p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-gradient-to-bl from-blue-500 to-purple-500 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
        Most Popular
      </div>
      
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Pro Plan</h3>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-4xl font-bold text-gradient-primary">$10</span>
          <span className="text-slate-500 dark:text-slate-400">USD/month</span>
        </div>
        
        <motion.button
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl px-6 py-3 font-semibold mb-6 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          onClick={onBuyNow}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started Now
        </motion.button>
        
        <div className="space-y-4">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-5 h-5 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-slate-700 dark:text-slate-300">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Pricing() {
  const [showPayment, setShowPayment] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden pt-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {!showPayment ? (
            <div className="flex justify-center">
              <div className="max-w-md">
                <PricingPlans onBuyNow={() => setShowPayment(true)} />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <PricingPlans onBuyNow={() => setShowPayment(true)} />
              <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

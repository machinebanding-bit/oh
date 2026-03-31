'use client'

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Loader2, Send, CheckCircle } from 'lucide-react'
import { useState } from 'react'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const bookingFormSchema = z.object({
  companyName: z.string().min(2, 'Company name is required'),
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  industry: z.string().optional(),
  challenge: z.string().min(10, 'Please describe your challenge (minimum 10 characters)'),
  timeframe: z.enum(['asap', '1-2-weeks', 'flexible']),
})

type BookingFormValues = z.infer<typeof bookingFormSchema>

const industries = [
  'Private Equity',
  'Legal Services',
  'Real Estate',
  'FinTech',
  'E-Commerce',
  'Healthcare',
  'SaaS / Technology',
  'Other',
]

export function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      companyName: '',
      fullName: '',
      email: '',
      phone: '',
      industry: '',
      challenge: '',
      timeframe: 'flexible',
    },
  })

  const isSubmitting = form.formState.isSubmitting

  async function onSubmit(data: BookingFormValues) {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    // Log form data (would integrate with email service in production)
    console.log('Booking form submitted:', data)
    
    toast.success('Audit request submitted successfully', {
      description: 'Our team will reach out within 24 hours.',
    })
    
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="booking" className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="rounded-[2.5rem] p-12 bg-zinc-900/40 border border-zinc-800 backdrop-blur-md text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
            </motion.div>
            <h3 className="text-3xl font-bold text-white mb-4">Request Received</h3>
            <p className="text-zinc-400 text-lg mb-8">
              Thank you for your interest in Wexel. Our team will review your submission and reach out within 24 hours to schedule your efficiency audit.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false)
                form.reset()
              }}
              className="px-6 py-3 rounded-full bg-zinc-800 text-white text-sm font-medium hover:bg-zinc-700 transition-colors duration-300"
            >
              Submit Another Request
            </button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-indigo-500 font-bold tracking-[0.2em] text-xs mb-4">
            START YOUR TRANSFORMATION
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6">
            Book Your Efficiency Audit
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            A 30-minute diagnostic call where we identify your highest-impact automation opportunities. No commitment, just clarity.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          className="rounded-[2.5rem] p-8 md:p-12 bg-zinc-900/40 border border-zinc-800 backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Two Column Grid for Name/Email Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-300">Company Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Acme Corp"
                          className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 rounded-xl h-12 focus-visible:ring-indigo-500 focus-visible:border-indigo-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-300">Full Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Smith"
                          className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 rounded-xl h-12 focus-visible:ring-indigo-500 focus-visible:border-indigo-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-300">Work Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@acmecorp.com"
                          className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 rounded-xl h-12 focus-visible:ring-indigo-500 focus-visible:border-indigo-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-300">
                        Phone <span className="text-zinc-500">(optional)</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 rounded-xl h-12 focus-visible:ring-indigo-500 focus-visible:border-indigo-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Industry Select */}
              <FormField
                control={form.control}
                name="industry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-zinc-300">
                      Industry <span className="text-zinc-500">(optional)</span>
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-zinc-800/50 border-zinc-700 text-white rounded-xl h-12 w-full focus:ring-indigo-500 focus:border-indigo-500">
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-zinc-900 border-zinc-700">
                        {industries.map((industry) => (
                          <SelectItem
                            key={industry}
                            value={industry.toLowerCase().replace(/\s+/g, '-')}
                            className="text-zinc-300 focus:bg-zinc-800 focus:text-white"
                          >
                            {industry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Challenge Textarea */}
              <FormField
                control={form.control}
                name="challenge"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-zinc-300">
                      What&apos;s your biggest operational challenge?
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe the manual processes, bottlenecks, or inefficiencies you're looking to solve..."
                        className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 rounded-xl min-h-32 focus-visible:ring-indigo-500 focus-visible:border-indigo-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Timeframe Radio Group */}
              <FormField
                control={form.control}
                name="timeframe"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-zinc-300">Preferred Timeframe</FormLabel>
                    <FormControl>
                      <div className="flex flex-wrap gap-3 pt-2">
                        {[
                          { value: 'asap', label: 'ASAP' },
                          { value: '1-2-weeks', label: '1-2 Weeks' },
                          { value: 'flexible', label: 'Flexible' },
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => field.onChange(option.value)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                              field.value === option.value
                                ? 'bg-indigo-600 text-white'
                                : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-4 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Request Efficiency Audit
                    </>
                  )}
                </button>
              </div>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  )
}

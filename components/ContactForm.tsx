'use client';

import { type FormEvent } from 'react';

export function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      'Hi AI Creative Studio, I want to discuss a cinematic brand campaign.',
      `Name: ${data.get('name') || ''}`,
      `Brand / Business: ${data.get('brand') || ''}`,
      `WhatsApp Number: ${data.get('phone') || ''}`,
      `Need: ${data.get('need') || ''}`,
      `Budget: ${data.get('budget') || ''}`,
      `Message: ${data.get('message') || ''}`,
    ].join('\n');
    window.open(`https://wa.me/918796302608?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  const fieldClass = 'min-h-14 rounded-2xl border border-white/10 bg-black/38 px-4 py-4 text-base text-white/90 outline-none transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] focus:border-zephyr-cyan/70 focus:bg-black/55 md:px-5';
  const labelClass = 'text-[0.66rem] font-black uppercase tracking-[0.22em] text-white/52';

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
      <label className="grid gap-2"><span className={labelClass}>Name</span><input name="name" required className={fieldClass} placeholder="Your name" autoComplete="name" /></label>
      <label className="grid gap-2"><span className={labelClass}>Brand / Business Name</span><input name="brand" required className={fieldClass} placeholder="Brand name" autoComplete="organization" /></label>
      <label className="grid gap-2 md:col-span-2"><span className={labelClass}>WhatsApp Number</span><input name="phone" required className={fieldClass} placeholder="Your WhatsApp number" autoComplete="tel" inputMode="tel" /></label>
      <label className="grid gap-2"><span className={labelClass}>What do you need?</span><select name="need" required className={fieldClass} defaultValue=""><option value="" disabled>Select one</option><option>Product ad</option><option>Instagram reel</option><option>Fashion campaign</option><option>Skincare / jewelry visuals</option><option>Brand launch campaign</option><option>Not sure yet</option></select></label>
      <label className="grid gap-2"><span className={labelClass}>Budget range</span><select name="budget" required className={fieldClass} defaultValue=""><option value="" disabled>Select budget</option><option>₹15K–₹40K</option><option>₹50K–₹1L</option><option>₹1L+</option></select></label>
      <label className="grid gap-2 md:col-span-2"><span className={labelClass}>Message</span><textarea name="message" className={`${fieldClass} min-h-36 resize-none`} placeholder="Tell us about your product, offer, launch, or visual style..." /></label>
      <button type="submit" className="premium-button flex min-h-14 items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-black hover:bg-zephyr-cyan hover:shadow-[0_0_24px_rgba(123,223,229,.16)] md:col-span-2">Send Inquiry on WhatsApp</button>
    </form>
  );
}

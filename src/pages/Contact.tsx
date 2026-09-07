import { useState, type FormEvent } from 'react';
import { siteConfig } from '@/data/siteConfig';
import { Reveal } from '@/components/Reveal';
import './shared-page.css';
import './Contact.css';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (data: FormData): FormErrors => {
    const next: FormErrors = {};
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    if (!name) next.name = 'Please share your name.';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Enter a valid email address.';
    if (!message || message.length < 10) next.message = 'Tell me a little more about the project.';

    return next;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const validationErrors = validate(data);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('submitting');

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(Array.from(data.entries()) as [string, string][]).toString(),
      });

      if (!response.ok) throw new Error('Submission failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="container">
        <div className="page-hero">
          <Reveal>
            <div className="contact-form__success">
              <h1 className="text-heading">Message sent.</h1>
              <p className="text-body" style={{ marginTop: 'var(--space-3)' }}>
                Thanks for reaching out — a reply will follow within a couple of business days.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="page-hero">
        <Reveal>
          <span className="text-label">Contact</span>
          <h1 className="text-display-lg page-hero__title" style={{ marginTop: 'var(--space-4)' }}>
            Tell me what you're building.
          </h1>
          <p className="text-body-lg page-hero__sub">{siteConfig.availability}</p>
        </Reveal>
      </div>

      <div className="section contact-grid" style={{ paddingTop: 0 }}>
        <Reveal>
          <div>
            <div className="contact-info__item">
              <p className="text-label contact-info__label">Email</p>
              <a href={`mailto:${siteConfig.email}`} className="text-body-lg">{siteConfig.email}</a>
              <p className="text-caption" style={{ marginTop: 'var(--space-2)' }}>Placeholder address.</p>
            </div>
            <div className="contact-info__item">
              <p className="text-label contact-info__label">Location</p>
              <p className="text-body-lg">{siteConfig.location}</p>
            </div>
            <div className="contact-info__item">
              <p className="text-label contact-info__label">Elsewhere</p>
              <p className="text-body-lg">
                {siteConfig.social.map((s) => s.label).join(' · ')}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <form
            name="contact"
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
          >
            <input type="hidden" name="form-name" value="contact" />
            <p style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
              <label>
                Don't fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />
              {errors.name && <span id="name-error" className="form-field__error">{errors.name}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} />
              {errors.email && <span id="email-error" className="form-field__error">{errors.email}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="projectType">Project type</label>
              <input id="projectType" name="projectType" type="text" placeholder="Brand, campaign, content, experience…" />
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} />
              {errors.message && <span id="message-error" className="form-field__error">{errors.message}</span>}
            </div>

            {status === 'error' && (
              <p className="form-field__error">Something went wrong sending that — please try again or email directly.</p>
            )}

            <button type="submit" className="cta cta--primary contact-form__submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending…' : 'Send message'}
            </button>
          </form>
        </Reveal>
      </div>
    </div>
  );
}

import React from 'react';

const LegalPage: React.FC<{ title: string, content: string }> = ({ title, content }) => (
  <div className="pt-40 pb-24 bg-ivory min-h-screen">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-serif text-marble-dark mb-12">{title}</h1>
      <div className="prose prose-stone max-w-none text-deep-brown/70 leading-relaxed space-y-6">
        {content.split('\n\n').map((para, i) => <p key={i}>{para}</p>)}
      </div>
    </div>
  </div>
);

export const PrivacyPolicy = () => (
  <LegalPage 
    title="Privacy Policy" 
    content={`Your privacy is important to us. This policy explains how we handle your personal data.

We collect information you provide directly to us, such as when you book a consultation or register for the client portal. This includes your name, email, and phone number.

Your data is used solely for the purpose of providing psychological consultation services and managing your account. We do not share your information with third parties except as required by law or with your explicit consent.

We implement security measures to protect your data from unauthorized access. You have the right to request access to, correction of, or deletion of your personal information at any time.`}
  />
);

export const TermsOfService = () => (
  <LegalPage 
    title="Terms of Service" 
    content={`By using our services, you agree to the following terms.

Consultations are 50 minutes long. Cancellations must be made at least 24 hours in advance to avoid being charged for the session.

All sessions are strictly confidential. However, confidentiality may be breached if there is a risk of harm to yourself or others, as required by professional ethics and law.

Payments are due at the time of booking or as otherwise agreed upon. We reserve the right to change our pricing with prior notice.`}
  />
);

export const Disclaimer = () => (
  <LegalPage 
    title="Disclaimer" 
    content={`The services provided by Kirill Uvarov PSY are psychological consultations and coaching.

These services are NOT medical or psychiatric treatment. We do not provide clinical diagnosis, medication management, or emergency psychiatric care.

If you are experiencing a mental health emergency, please contact your local emergency services or a crisis hotline immediately. In the Netherlands, you can call 112 or 113 for suicide prevention.`}
  />
);

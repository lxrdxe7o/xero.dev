export const metadata = {
  title: 'Contact | xero.dev',
  description: 'Get in touch with me.',
};

export default function ContactPage() {
  return (
    <div className="container" style={{ padding: 'var(--space-4xl) var(--space-lg)', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <h1 style={{ fontSize: 'var(--fs-8xl)', marginBottom: 'var(--space-xl)' }}>
        Let's Talk
      </h1>
      <p style={{ fontSize: 'var(--fs-xl)', maxWidth: '600px', marginBottom: 'var(--space-2xl)' }}>
        Interested in collaborating or just want to say hi? I'm always open to discussing new projects, creative ideas, or opportunities.
      </p>
      
      <a href="mailto:hello@xero.dev" className="btn btn-primary" style={{ fontSize: 'var(--fs-lg)', padding: 'var(--space-md) var(--space-2xl)' }}>
        hello@xero.dev
      </a>
      
      <div style={{ marginTop: 'var(--space-3xl)', display: 'flex', gap: 'var(--space-lg)' }}>
        <a href="https://github.com/lxrdxe7o" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
          GitHub
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
          Twitter / X
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
          LinkedIn
        </a>
      </div>
    </div>
  );
}

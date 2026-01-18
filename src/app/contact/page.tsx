import Folder from '@/components/Folder';
import Stamp from '@/components/Stamp';

export const metadata = {
  title: 'Contact | xero.dev',
  description: 'Get in touch with me.',
};

export default function ContactPage() {
  return (
    <div className="container" style={{ padding: 'var(--space-4xl) var(--space-lg)', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Folder title="COMMUNICATION // DIRECT-LINE">
        <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 'var(--space-xl) 0' }}>
          
          <div style={{ position: 'absolute', top: 0, right: 0, transform: 'rotate(15deg) translate(10px, -10px)' }}>
            <Stamp type="approved" text="OPEN" />
          </div>

          <h1 className="font-mono" style={{ fontSize: 'var(--fs-4xl)', marginBottom: 'var(--space-xl)', borderBottom: '2px solid var(--ink)', paddingBottom: 'var(--space-xs)' }}>
            LET'S TALK
          </h1>
          
          <div style={{ maxWidth: '600px', margin: '0 auto', marginBottom: 'var(--space-2xl)' }}>
            <p style={{ fontSize: 'var(--fs-lg)', lineHeight: '1.6', marginBottom: 'var(--space-md)' }}>
              Interested in collaborating or just wanna say hi?
            </p>
            <p style={{ fontSize: 'var(--fs-md)', opacity: 0.8 }}>
              I'm always open to discussing new projects, creative ideas, or opportunities.
            </p>
          </div>
          
          <a href="mailto:ishrak7106@gmail.com" className="btn btn-primary" style={{ fontSize: 'var(--fs-xl)', padding: 'var(--space-md) var(--space-2xl)', marginBottom: 'var(--space-3xl)' }}>
            ishrak7106@gmail.com
          </a>
          
          <div style={{ display: 'flex', gap: 'var(--space-lg)', flexWrap: 'wrap', justifyContent: 'center' }}>
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

          <div style={{ marginTop: 'auto', paddingTop: 'var(--space-3xl)', width: '100%', borderTop: '1px dashed var(--ink-dim)', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', opacity: 0.5 }}>
            <span>SECURE-CHANNEL</span>
            <span>ENCRYPTED</span>
          </div>
        </div>
      </Folder>
    </div>
  );
}

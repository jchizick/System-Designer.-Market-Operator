type ContactRequest = {
  method?: string;
  body?: unknown;
};

type ContactResponse = {
  status: (code: number) => ContactResponse;
  setHeader?: (name: string, value: string) => void;
  json: (body: unknown) => void;
};

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  projectType?: unknown;
  budget?: unknown;
  timeline?: unknown;
  message?: unknown;
  caseStudy?: unknown;
  engagement?: unknown;
  companyWebsite?: unknown;
};

const projectTypes = new Set([
  'AI System',
  'Product / Dashboard',
  'Brand System',
  'Trading / Market Tool',
  'Workflow Automation',
  'Portfolio / Website',
  'Other',
]);

function parseBody(body: unknown): ContactPayload {
  if (typeof body === 'string') {
    return JSON.parse(body) as ContactPayload;
  }

  if (body && typeof body === 'object') {
    return body as ContactPayload;
  }

  return {};
}

function asCleanString(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req: ContactRequest, res: ContactResponse) {
  if (req.method !== 'POST') {
    res.setHeader?.('Allow', 'POST');
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  let payload: ContactPayload;
  try {
    payload = parseBody(req.body);
  } catch {
    return res.status(400).json({ success: false, error: 'Invalid JSON body' });
  }

  const companyWebsite = asCleanString(payload.companyWebsite);
  if (companyWebsite) {
    return res.status(200).json({ success: true });
  }

  const name = asCleanString(payload.name);
  const email = asCleanString(payload.email);
  const projectType = asCleanString(payload.projectType);
  const budget = asCleanString(payload.budget) || 'Not specified';
  const timeline = asCleanString(payload.timeline) || 'Not specified';
  const message = asCleanString(payload.message);
  const caseStudy = asCleanString(payload.caseStudy);
  const engagement = asCleanString(payload.engagement);

  if (!name || !email || !projectType || !message) {
    return res.status(400).json({ success: false, error: 'Missing required fields' });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ success: false, error: 'Invalid email address' });
  }

  if (!projectTypes.has(projectType)) {
    return res.status(400).json({ success: false, error: 'Invalid project type' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.error('Contact form environment variables are not configured.');
    return res.status(500).json({ success: false, error: 'Contact channel is not configured' });
  }

  const subject = `New portfolio inquiry: ${projectType} — ${name}`;
  const text = [
    'New portfolio inquiry',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Project Type: ${projectType}`,
    ...(caseStudy ? [`Case Study / Build: ${caseStudy}`] : []),
    ...(engagement ? [`Selected Engagement: ${engagement}`] : []),
    `Budget / Scope: ${budget}`,
    `Timeline: ${timeline}`,
    '',
    'Message:',
    message,
  ].join('\n');

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: toEmail,
        reply_to: email,
        subject,
        text,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Resend contact email failed:', errorText);
      return res.status(502).json({ success: false, error: 'Unable to send message' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact form submission failed:', error);
    return res.status(500).json({ success: false, error: 'Unable to send message' });
  }
}

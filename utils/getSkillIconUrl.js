/**
 * Helper to return official icon URLs from Simple Icons CDN
 */
export function getSkillIconUrl(name) {
  if (!name) return null;
  const lower = name.toLowerCase().trim();

  // Direct CDN URLs for icons removed from Simple Icons (e.g., AWS, Azure, VS Code)
  const customUrlMap = {
    'aws': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    'amazon web services': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    'aws ec2': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    'aws s3': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    's3': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    'vpc': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    'cloud security': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    'azure': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
    'azure app service': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
    'vs code': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
    'vscode': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
    'css': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    'css3': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  };

  if (customUrlMap[lower]) {
    return customUrlMap[lower];
  }

  const slugMap = {
    'html': 'html5',
    'html5': 'html5',
    'javascript': 'javascript',
    'javascript (es6+)': 'javascript',
    'js': 'javascript',
    'typescript': 'typescript',
    'ts': 'typescript',
    'react': 'react',
    'react.js': 'react',
    'react js': 'react',
    'next.js': 'nextdotjs',
    'nextjs': 'nextdotjs',
    'next.js 16': 'nextdotjs',
    'node.js': 'nodedotjs',
    'nodejs': 'nodedotjs',
    'express': 'express',
    'express.js': 'express',
    'fastapi': 'fastapi',
    'tailwind css': 'tailwindcss',
    'tailwind': 'tailwindcss',
    'tailwindcss': 'tailwindcss',
    'bootstrap': 'bootstrap',
    'vite': 'vite',
    'shadcn ui': 'shadcnui',
    'shadcn': 'shadcnui',
    'rest api': 'postman',
    'restful api': 'postman',
    'jwt': 'jsonwebtokens',
    'jwt authentication': 'jsonwebtokens',
    'websockets': 'socketdotio',
    'postgresql': 'postgresql',
    'postgres': 'postgresql',
    'supabase': 'supabase',
    'mongodb': 'mongodb',
    'mongo': 'mongodb',
    'prisma': 'prisma',
    'redis': 'redis',
    'docker': 'docker',
    'vercel': 'vercel',
    'railway': 'railway',
    'cloudflare': 'cloudflare',
    'git': 'git',
    'github': 'github',
    'git & github': 'github',
    'github actions': 'githubactions',
    'postman': 'postman',
    'antigravity': 'google',
    'cursor': 'cursor',
    'sql': 'postgresql',
    'sql optimization': 'postgresql',
    'indexes': 'postgresql',
    'relational schema': 'postgresql',
    'serverless': 'serverless',
    'server components': 'nextdotjs',
    'turbopack': 'turbopack',
    'seo optimization': 'google',
    'python': 'python',
    'c / c++': 'cplusplus',
    'c++': 'cplusplus',
    'c': 'c',
    'figma': 'figma',
    'linux': 'linux',
    'redux': 'redux',
    'material ui': 'mui',
    'styled components': 'styledcomponents',
  };

  const slug = slugMap[lower] || lower.replace(/[^a-z0-9]/g, '');
  return `https://cdn.simpleicons.org/${slug}`;
}

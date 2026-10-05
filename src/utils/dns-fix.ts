// Only run in Node.js runtime (not Edge or Browser)
if (typeof process !== 'undefined' && process.env?.NEXT_RUNTIME !== 'edge') {
  try {
    const dns = require('node:dns');

    if (typeof dns.setDefaultResultOrder === 'function') {
      dns.setDefaultResultOrder('ipv4first');
    }
  } catch (err) {
    console.warn('DNS IPv4 initialization warning:', err);
  }
}

export function initDnsFix() {
  return true;
}

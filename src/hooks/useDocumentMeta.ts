import { useEffect } from 'react';

interface DocumentMeta {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

function setMeta(selector: string, value: string) {
  const element = document.querySelector<HTMLMetaElement>(selector);
  if (element) element.content = value;
}

export function useDocumentMeta({ title, description, path = '/', image }: DocumentMeta) {
  useEffect(() => {
    const canonicalUrl = new URL(path, 'https://minhlongdev.id.vn').toString();
    document.title = title;
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', canonicalUrl);
    setMeta('meta[property="og:image"]', image ?? 'https://minhlongdev.id.vn/assets/brand/og-cover.jpg');

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) canonical.href = canonicalUrl;
  }, [description, image, path, title]);
}

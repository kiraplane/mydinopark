import { redirect } from 'next/navigation';

export default function LegacyBrowserVersionPage() {
  redirect('/browser-version');
}

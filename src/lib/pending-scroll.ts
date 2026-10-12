const PENDING_SCROLL_KEY = "cheesy-pending-section";

export function setPendingSection(sectionId: string) {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(PENDING_SCROLL_KEY, sectionId);
}

export function consumePendingSection(): string | null {
  if (typeof window === "undefined") return null;
  const value = sessionStorage.getItem(PENDING_SCROLL_KEY);
  if (value) sessionStorage.removeItem(PENDING_SCROLL_KEY);
  return value;
}

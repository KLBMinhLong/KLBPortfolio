import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { CURSOR_PACKS, type CursorPack } from '../data/cursorPacks';

interface CustomCursorContextValue {
  currentCursorId: string;
  setCursor: (id: string) => void;
  isPickerOpen: boolean;
  setIsPickerOpen: (open: boolean) => void;
  togglePicker: () => void;
  packs: CursorPack[];
}

const CustomCursorContext = createContext<CustomCursorContextValue | null>(null);

const STORAGE_KEY = 'klb-custom-cursor-id';

function getInitialCursorId(): string {
  if (typeof window === 'undefined') return 'default';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && CURSOR_PACKS.some((p) => p.id === stored)) {
    return stored;
  }
  return 'default';
}

function playSelectSound(isDefault: boolean) {
  try {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    const now = ctx.currentTime;

    if (!isDefault) {
      // Pleasant bright chime
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.1); // G5
    } else {
      // Soft reset chime
      osc.frequency.setValueAtTime(659.25, now); // E5
      osc.frequency.exponentialRampToValueAtTime(440, now + 0.1); // A4
    }

    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.14);
  } catch {
    // AudioContext blocked or not supported
  }
}

export function CustomCursorProvider({ children }: { children: ReactNode }) {
  const [currentCursorId, setCurrentCursorId] = useState<string>(getInitialCursorId);
  const [isPickerOpen, setIsPickerOpen] = useState<boolean>(false);

  const setCursor = useCallback((id: string) => {
    setCurrentCursorId(id);
    window.localStorage.setItem(STORAGE_KEY, id);
    playSelectSound(id === 'default');
  }, []);

  const togglePicker = useCallback(() => {
    setIsPickerOpen((prev) => !prev);
  }, []);

  // Update dynamic style element for cursor
  useEffect(() => {
    const styleId = 'klb-dynamic-custom-cursor-style';
    let styleEl = document.getElementById(styleId) as HTMLStyleElement | null;

    if (currentCursorId === 'default') {
      document.documentElement.removeAttribute('data-custom-cursor');
      if (styleEl) {
        styleEl.remove();
      }
      return;
    }

    const pack = CURSOR_PACKS.find((p) => p.id === currentCursorId);
    if (!pack) return;

    document.documentElement.setAttribute('data-custom-cursor', pack.id);

    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = styleId;
      document.head.appendChild(styleEl);
    }

    const [defHx, defHy] = pack.defaultHotspot;
    const [ptrHx, ptrHy] = pack.pointerHotspot;

    styleEl.textContent = `
      html[data-custom-cursor="${pack.id}"],
      html[data-custom-cursor="${pack.id}"] body,
      html[data-custom-cursor="${pack.id}"] * {
        cursor: url('${pack.defaultPath}') ${defHx} ${defHy}, auto !important;
      }
      html[data-custom-cursor="${pack.id}"] a,
      html[data-custom-cursor="${pack.id}"] button,
      html[data-custom-cursor="${pack.id}"] [role="button"],
      html[data-custom-cursor="${pack.id}"] input[type="submit"],
      html[data-custom-cursor="${pack.id}"] input[type="button"],
      html[data-custom-cursor="${pack.id}"] input[type="checkbox"],
      html[data-custom-cursor="${pack.id}"] input[type="radio"],
      html[data-custom-cursor="${pack.id}"] select,
      html[data-custom-cursor="${pack.id}"] summary,
      html[data-custom-cursor="${pack.id}"] .interactive,
      html[data-custom-cursor="${pack.id}"] .clickable,
      html[data-custom-cursor="${pack.id}"] .button,
      html[data-custom-cursor="${pack.id}"] .nav-link,
      html[data-custom-cursor="${pack.id}"] .lang-switch,
      html[data-custom-cursor="${pack.id}"] .social-links a,
      html[data-custom-cursor="${pack.id}"] .text-link,
      html[data-custom-cursor="${pack.id}"] .project-feature__media,
      html[data-custom-cursor="${pack.id}"] .cursor-picker-option,
      html[data-custom-cursor="${pack.id}"] .footer-easter-egg-btn {
        cursor: url('${pack.pointerPath}') ${ptrHx} ${ptrHy}, pointer !important;
      }
    `;
  }, [currentCursorId]);

  const value = useMemo(
    () => ({
      currentCursorId,
      setCursor,
      isPickerOpen,
      setIsPickerOpen,
      togglePicker,
      packs: CURSOR_PACKS,
    }),
    [currentCursorId, setCursor, isPickerOpen, togglePicker],
  );

  return <CustomCursorContext.Provider value={value}>{children}</CustomCursorContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCustomCursor() {
  const context = useContext(CustomCursorContext);
  if (!context) {
    throw new Error('useCustomCursor must be used within CustomCursorProvider');
  }
  return context;
}

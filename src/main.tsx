import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { CustomCursorProvider } from './context/CustomCursorContext';
import { MusicProvider } from './context/MusicContext';
import { LanguageProvider } from './i18n/LanguageContext';
import './styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <CustomCursorProvider>
          <MusicProvider>
            <App />
          </MusicProvider>
        </CustomCursorProvider>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
);

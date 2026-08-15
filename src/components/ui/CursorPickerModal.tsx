import { AnimatePresence, motion } from 'framer-motion';
import { Check, RotateCcw, Sparkles, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useCustomCursor } from '../../context/CustomCursorContext';
import { useLanguage } from '../../i18n/LanguageContext';

export function CursorPickerModal() {
  const { isPickerOpen, setIsPickerOpen, currentCursorId, setCursor, packs } = useCustomCursor();
  const { language } = useLanguage();
  const modalRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Close on Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && isPickerOpen) {
        setIsPickerOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPickerOpen, setIsPickerOpen]);

  // Click outside to close
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsPickerOpen(false);
      }
    }
    if (isPickerOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isPickerOpen, setIsPickerOpen]);

  // Scroll active item into view on open
  useEffect(() => {
    if (isPickerOpen && listRef.current) {
      const activeEl = listRef.current.querySelector('.cursor-picker-list-item--selected');
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [isPickerOpen]);

  const filteredPacks = packs.filter((pack) => {
    const name = (language === 'vi' ? pack.viName : pack.name).toLowerCase();
    return name.includes(searchTerm.toLowerCase());
  });

  return (
    <AnimatePresence>
      {isPickerOpen && (
        <div className="cursor-picker-backdrop" role="dialog" aria-modal="true">
          <motion.div
            ref={modalRef}
            className="cursor-picker-card cursor-picker-card--list"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div className="cursor-picker-header">
              <div className="cursor-picker-title-group">
                <span className="cursor-picker-sparkle">
                  <Sparkles size={16} />
                </span>
                <div>
                  <h3>
                    {language === 'vi' ? 'Bộ sưu tập Con trỏ Chuột' : 'Custom Cursor Gallery'}
                  </h3>
                  <p>
                    {language === 'vi'
                      ? 'Danh sách cuộn để chọn con trỏ nhanh chóng'
                      : 'Scrollable list for easy cursor selection'}
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="cursor-picker-close-btn"
                onClick={() => setIsPickerOpen(false)}
                aria-label={language === 'vi' ? 'Đóng bảng chọn' : 'Close cursor picker'}
              >
                <X size={18} />
              </button>
            </div>

            {/* Optional search/filter if list is long */}
            <div className="cursor-picker-search-bar">
              <input
                type="text"
                className="cursor-picker-search-input"
                placeholder={language === 'vi' ? 'Tìm kiếm con trỏ...' : 'Filter cursors...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {currentCursorId !== 'default' && (
                <button
                  type="button"
                  className="cursor-picker-reset-btn"
                  onClick={() => setCursor('default')}
                  title={language === 'vi' ? 'Đặt lại mặc định' : 'Reset to default'}
                >
                  <RotateCcw size={13} />
                  <span>{language === 'vi' ? 'Mặc định' : 'Reset'}</span>
                </button>
              )}
            </div>

            {/* Scrollable List */}
            <div ref={listRef} className="cursor-picker-scroll-list">
              {filteredPacks.map((pack) => {
                const isSelected = currentCursorId === pack.id;
                const displayName = language === 'vi' ? pack.viName : pack.name;

                return (
                  <button
                    key={pack.id}
                    type="button"
                    className={`cursor-picker-list-item ${
                      isSelected ? 'cursor-picker-list-item--selected' : ''
                    }`}
                    onClick={() => {
                      setCursor(pack.id);
                    }}
                  >
                    {/* Preview Box */}
                    <div className="cursor-list-preview-box">
                      {pack.defaultPath ? (
                        <div className="cursor-preview-duo">
                          <img
                            src={pack.defaultPath}
                            alt=""
                            className="cursor-img-preview"
                            loading="lazy"
                          />
                          <img
                            src={pack.pointerPath}
                            alt=""
                            className="cursor-img-preview cursor-img-preview--pointer"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <span className="cursor-default-symbol">{pack.icon}</span>
                      )}
                    </div>

                    {/* Information */}
                    <div className="cursor-list-info">
                      <div className="cursor-list-title-row">
                        <span className="cursor-list-name">{displayName}</span>
                        <span className="cursor-list-icon-tag">{pack.icon}</span>
                      </div>
                      <span className="cursor-list-desc">
                        {pack.id === 'default'
                          ? language === 'vi'
                            ? 'Con trỏ chuẩn trình duyệt / hệ điều hành'
                            : 'Standard system & browser cursor'
                          : language === 'vi'
                            ? 'Bao gồm con trỏ chính & con trỏ liên kết'
                            : 'Includes default arrow & pointer hand'}
                      </span>
                    </div>

                    {/* Selection Indicator */}
                    <div className="cursor-list-action">
                      {isSelected ? (
                        <span className="cursor-list-badge-active">
                          <Check size={13} />
                          <span>{language === 'vi' ? 'Đang dùng' : 'Active'}</span>
                        </span>
                      ) : (
                        <span className="cursor-list-badge-select">
                          <span>{language === 'vi' ? 'Chọn' : 'Select'}</span>
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Footer Summary */}
            <div className="cursor-picker-footer-bar">
              <span>
                {filteredPacks.length}{' '}
                {language === 'vi' ? 'kiểu con trỏ có sẵn' : 'cursor styles available'}
              </span>
              <span className="cursor-picker-tip">
                {language === 'vi' ? '💡 Cuộn để xem tất cả' : '💡 Scroll to browse all'}
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

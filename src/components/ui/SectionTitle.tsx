import React from 'react';

interface SectionTitleProps {
  tag: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  tag,
  title,
  subtitle,
  align = 'center'
}) => {
  return (
    <div className="section-header" style={{ textAlign: align }}>
      <div className="section-tag">{tag}</div>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

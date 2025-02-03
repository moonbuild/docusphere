import React from 'react';

export interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
}

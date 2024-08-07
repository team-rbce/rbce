import React from 'react';
import Title from '../../components/Title/Title';
import DevelopersCard from './DevelopersCard';

export default function Developers() {
  return (
    <div className="w-full h-full px-3 py-4 sm:px-10 md:px-16 lg:px-24">
      <Title>Time de desenvolvimento</Title>
      <div>
        <DevelopersCard name="" description="" socials={ ['', ''] } />
      </div>
    </div>
  );
}

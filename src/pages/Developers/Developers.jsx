import React from 'react';
import Title from '../../components/Title/Title';
import DevelopersCard from './DevelopersCard';

export default function Developers() {
  const developers = [
    {
      imagePath: '/defaultAvatar.jpeg',
      /* imagePath: '/anaNunesAvatar.jpeg', */
      name: 'Ana Beatriz Nunes',
      description: 'Desenvolvedora e Monitora Fullstack, foi responsável por idear o design do site, desenvolver o style guide e fazer o rebranding da RBCE.',
      socials: ['linkedin', 'github'],
    },
    {
      imagePath: '/defaultAvatar.jpeg',
      /* imagePath: '/FilipeAvatar.jpeg', */
      name: 'Filipe',
      description: 'Desenvolvedor Backend e profissional de Enfermagem, foi responsável por desenvolver o site da RBCE, recuperar dados e auxiliar na mídia do site.',
      socials: ['linkedin', 'github'],
    },
    {
      imagePath: '/defaultAvatar.jpeg',
      /* imagePath: '/samuelAvatar.jpeg', */
      name: 'Samuel Deotti',
      description: 'Desenvolvedor Fullstack, foi responsável por desenvolver o site da RBCE e auxiliar no contexto final para a produção.',
      socials: ['https://br.linkedin.com/in/samuel-deotti', 'https://github.com/samueldeotti'],
    },
    {
      imagePath: '/defaultAvatar.jpeg',
      /* imagePath: '/yanAvatar.jpeg', */
      name: 'Yan',
      description: 'Desenvolvedor Frontend, foi responsável por idear o design, desenvolver o site da RBCE, auxiliar na mídia do site.',
      socials: ['linkedin', 'github'],
    },
  ];

  return (
    <div className="w-full h-full px-3 py-4 sm:px-10 md:px-16 lg:px-24">
      <Title>Time de desenvolvimento</Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:w-fit gap-6 my-12">
        {developers.map((developer, index) => (
          <div key={ developer.name + index } className="flex">
            <DevelopersCard { ...developer } />
          </div>
        ))}
      </div>
    </div>
  );
}

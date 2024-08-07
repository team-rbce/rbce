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
      <div className="flex flex-col gap-8 my-12 items-center ">

        {developers.map((developer, index) => <DevelopersCard key={ developer.name + index } { ...developer } />)}

      </div>
    </div>
  );
}

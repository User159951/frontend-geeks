import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl text-center bg-white shadow-lg p-10 rounded-lg">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">À propos de nous</h1>
        
        <p className="text-gray-700 text-lg leading-relaxed">
          Bienvenue sur <span className="font-semibold">The Four Fantastic’s Blog</span> ! 🚀
        </p>
        
        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          Ce blog est né lors du <span className="font-semibold">hackathon 2025</span>, une aventure passionnante où créativité et innovation se sont rencontrées.
          Notre objectif ? **Créer un espace dynamique** où chacun peut **partager ses idées, publier des articles inspirants et explorer des sujets variés**.
        </p>

        <h2 className="text-2xl font-semibold text-blue-500 mt-6">🌟 Notre Mission</h2>
        <p className="text-gray-700 text-lg leading-relaxed mt-2">
          Nous croyons en la puissance du partage des connaissances. Ce blog vous permet de :  
        </p>
<ul className="text-gray-700 text-lg mt-4 list-disc list-inside space-y-2">
  <li className="flex items-start">
    <span className="mr-2">✅</span> 
    <span><span className="font-semibold">Publier</span> vos propres articles et réflexions.</span>
  </li>
  <li className="flex items-start">
    <span className="mr-2">✅</span> 
    <span><span className="font-semibold">Modifier</span> et améliorer vos contenus à tout moment.</span>
  </li>
  <li className="flex items-start">
    <span className="mr-2">✅</span> 
    <span><span className="font-semibold">Explorer</span> une diversité de sujets allant de la technologie à l’art, en passant par la science et l’actualité.</span>
  </li>
</ul>

        <h2 className="text-2xl font-semibold text-blue-500 mt-6">🔥 Pourquoi ce blog ?</h2>
        <p className="text-gray-700 text-lg leading-relaxed mt-2">
          Nous voulions une plateforme **intuitive, moderne et collaborative** où chacun, qu’il soit écrivain, passionné ou curieux, puisse s’exprimer librement.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          Que vous soyez ici pour **apprendre, écrire ou simplement découvrir**, <span className="font-semibold">The Four Fantastic’s Blog</span> est votre nouvel espace d’inspiration !  
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mt-6 font-bold">
          ✍️ Rejoignez-nous et partagez votre voix ! 🎙️
        </p>
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import logoo from './images/logoo.png';
import './MonComposant.css'; // Assurez-vous d'importer le fichier CSS associé */

function MonImage() {
  return (
    <div className="conteneur-image">
      <img src={logoo} alt="Exemple" className="image" />
    </div>
  );
}

export default MonImage;

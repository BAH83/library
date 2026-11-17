import { useState } from 'react';
import BookCard from './components/BookCard';
import './App.css';

function App() {
  
  const [books, setBooks] = useState([
    { id: 1, titre: 'Le Petit Prince', auteur: 'Antoine de Saint-Exupéry', estDisponible: true },
    { id: 2, titre: 'Les Misérables', auteur: 'Victor Hugo', estDisponible: false },
    { id: 3, titre: 'Notre-Dame de Paris', auteur: 'Victor Hugo', estDisponible: true },
    { id: 4, titre: 'L’Étranger', auteur: 'Albert Camus', estDisponible: true },
  ]);

  
  const [nouveauTitre, setNouveauTitre] = useState('');
  const [nouvelAuteur, setNouvelAuteur] = useState('');

 
  const onClickEmprunt = (bookId) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === bookId
          ? { ...book, estDisponible: !book.estDisponible }
          : book
      )
    );
  };

  
  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (nouveauTitre.trim() === '' || nouvelAuteur.trim() === '') {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    const nouveauLivre = {
      id: Date.now(), 
      titre: nouveauTitre.trim(),
      auteur: nouvelAuteur.trim(),
      estDisponible: true,
    };

    setBooks([...books, nouveauLivre]);
    setNouveauTitre('');
    setNouvelAuteur('');
  };

  
  const disponibles = books.filter((b) => b.estDisponible).length;

  return (
    <div className="app">
      <h1>📚 Catalogue de la Bibliothèque</h1>
      <h2>
        Livres disponibles : <span className="count">{disponibles}</span> / {books.length}
      </h2>

      {}
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Titre du livre"
          value={nouveauTitre}
          onChange={(e) => setNouveauTitre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Auteur"
          value={nouvelAuteur}
          onChange={(e) => setNouvelAuteur(e.target.value)}
        />
        <button type="submit">➕ Ajouter</button>
      </form>

      {}
      <div className="book-list">
        {books.map((book) => (
          <BookCard
            key={book.id}
            titre={book.titre}
            auteur={book.auteur}
            estDisponible={book.estDisponible}
            onClickEmprunt={() => onClickEmprunt(book.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
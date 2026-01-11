import resources from '../../data/resources.json';
import ResourceBrowser from '../../components/ResourceBrowser';

export default function BooksPage() {
  const booksData = resources.filter(r => r.type === 'book');

  return (
    <div className="max-w-6xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-2 text-green-900">Suggested Books</h1>
      <p className="text-gray-600 mb-8">Standard textbooks recommended by MAKAUT.</p>
      
      <ResourceBrowser resources={booksData} category="Book" />
    </div>
  );
}
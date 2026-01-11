import resources from '../../data/resources.json';
import ResourceBrowser from '../../components/ResourceBrowser'; // Import the new component

export default function NotesPage() {
  // Pre-filter: We only want items where type is "note"
  const notesData = resources.filter(r => r.type === 'note');

  return (
    <div className="max-w-6xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-2 text-blue-900">Study Notes</h1>
      <p className="text-gray-600 mb-8">Find organized notes for your semester.</p>
      
      {/* We just pass the data to the component, it handles the rest! */}
      <ResourceBrowser resources={notesData} category="Note" />
    </div>
  );
}
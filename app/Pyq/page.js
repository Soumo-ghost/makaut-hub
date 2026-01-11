import resources from '../../data/resources.json';
import ResourceBrowser from '../../components/ResourceBrowser';

export default function PyqPage() {
  const pyqData = resources.filter(r => r.type === 'pyq');

  return (
    <div className="max-w-6xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-2 text-purple-900">Previous Year Questions</h1>
      <p className="text-gray-600 mb-8">Practice with last 5 years' papers.</p>
      
      <ResourceBrowser resources={pyqData} category="PYQ" />
    </div>
  );
}
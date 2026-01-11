import GpaCalculator from '../components/GpaCalculator';
import resources from '../data/resources.json'; // Importing your "Backend" data

export default function Home() {
  // Filter only PYQs for the homepage display
  const pyqs = resources.filter(r => r.type === 'pyq');

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">MAKAUT Info Hub</h1>
      
      {/* Section 1: The Tool */}
      <section className="mb-12">
        <GpaCalculator />
      </section>

      {/* Section 2: Resources */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Latest PYQs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pyqs.map((item) => (
            <div key={item.id} className="p-4 border rounded hover:shadow-md">
              <h3 className="font-bold">{item.subject}</h3>
              <p className="text-sm text-gray-500">{item.stream} | {item.year}</p>
              <a href={item.link} target="_blank" className="text-blue-500 underline mt-2 block">
                Download PDF
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
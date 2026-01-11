export default function NoticesPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Official Exam Notices</h1>
      
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8">
        <p className="font-bold">⚠️ Always verify with the official website.</p>
      </div>

      <div className="grid gap-4">
        <a href="https://makautexam.net/announcement.html" target="_blank" 
           className="block p-6 bg-white border rounded shadow hover:bg-blue-50 transition">
           <h2 className="text-xl font-bold text-blue-900">📄 Exam Announcements (makautexam.net)</h2>
           <p>Check for Form Fill-up dates, Admit Cards, and Results.</p>
        </a>

        <a href="https://makautwb.ac.in/" target="_blank" 
           className="block p-6 bg-white border rounded shadow hover:bg-green-50 transition">
           <h2 className="text-xl font-bold text-green-900">🏫 University General Notices</h2>
           <p>Holiday lists, General administration updates.</p>
        </a>
      </div>
    </div>
  );
}
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-cyan-600 text-white p-4">
        <h1 className="text-xl font-bold" align="center">Markdown to HTML</h1>
      </header>
      
      <main className="flex-grow p-8">
        <div className="mb-6" align="right">
          <input type="button" value="Convert to HTML" className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-blue-600 cursor-pointer" />
        </div>
        <div className="flex-col"> </div>

        {/* Main content goes here */}
        <div className="flex flex-1 gap-4 overflow-hidden">

          {/* Markdown Area */}
          <textarea
            className="w-1/2 p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none font-mono text-sm"
            placeholder="Enter your markdown here..."
          />

          {
          /* HTML preview Area */}  
          <div className="w-1/2 p-4 border rounded-lg shadow-sm bg-gray-50 overflow-auto">
            <h2 className="text-lg font-semibold mb-4">HTML Preview</h2>
            <div className="prose prose-sm">
              {/* Rendered HTML will go here */}
              <p>This is where the rendered HTML will appear.</p>
            </div>
          </div>


        </div>



      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2026 - Created by HEPAC</p>
      </footer>
    </div>
  )
}

export default App
// Test Tailwind CSS avec design moderne
document.querySelector("#app").innerHTML = `
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
    <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-200 max-w-md w-full">
      <div class="text-center">
        <div class="mb-4">
          <span class="text-4xl">🎯</span>
        </div>
        <h1 class="text-3xl font-bold text-blue-600 mb-4">
          Prompt Builder V2
        </h1>
        <p class="text-gray-600 mb-6">
          Tailwind CSS fonctionne parfaitement !
        </p>
        <div class="space-y-3">
          <button class="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
            Bouton Principal
          </button>
          <button class="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-200">
            Bouton Secondaire
          </button>
        </div>
        <div class="mt-6 p-3 bg-green-50 border border-green-200 rounded-lg">
          <p class="text-green-700 text-sm font-medium">
            ✅ Configuration réussie !
          </p>
        </div>
      </div>
    </div>
  </div>
`;

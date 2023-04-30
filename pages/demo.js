import React from 'react'

const demo = () => {
  return (
    <div class="flex flex-col items-center">
    <h2 class="text-2xl font-bold mb-4">Upload Media</h2>
    <form class="w-full max-w-lg">
      <div class="mb-4">
        <label for="image" class="block font-medium mb-2">Upload Image:</label>
        <input type="file" class="w-full px-4 py-2 rounded-md border border-gray-400" id="image"/>
      </div>
      <div class="mb-4">
        <label for="video" class="block font-medium mb-2">Upload Video:</label>
        <input type="file" class="w-full px-4 py-2 rounded-md border border-gray-400" id="video" />
      </div>
      <div class="mb-4">
        <label for="text" class="block font-medium mb-2">Upload Text:</label>
        <div class="flex items-center">
          <input type="text" class="w-full px-4 py-2 rounded-md border border-gray-400 mr-2" id="text"/>
          <span class="font-medium text-gray-600">or</span>
          <input type="file" class="ml-2" id="file" />
        </div>
      </div>
      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
    </form>
  </div>
  
  )
}

export default demo;
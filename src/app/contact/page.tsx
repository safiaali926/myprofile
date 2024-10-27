import { Mail } from 'lucide-react';

export default function Contact (){
    return (
        <main className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/images/bg.jpg')` }}>
      <div className="min-h-screen h-full w-full bg-black bg-opacity-60 p-4 sm:p-8 lg:p-12">
        
     
        
          <form
      action="#"
      method="POST"
      className="max-w-md mx-auto p-6 bg-gray-900 shadow-lg rounded-lg border border-gray-200"
    >
      <h2 className="text-2xl font-semibold text-white mb-6 text-center">Contact Us</h2>
      
      <div className="mb-4">
        <label className="block text-white font-medium mb-2" htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-white font-medium mb-2" htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-white font-medium mb-2" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
        ></textarea>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="bg-cyan-300 text-gray-900 py-2 px-6 rounded-lg hover:bg-cyan-500 transition-colors duration-300"
        >
          Send Message
        </button>
      </div>
    </form>
        
        
        </div>
        </main>
    )
}
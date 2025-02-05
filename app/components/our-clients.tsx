'use client'

import Link from 'next/link'

const clients = [
  { name: 'Kavya Reddy', website: 'https://kavyareddy.in' },
  

  
]

export function OurClients() {
  const totalSlots = 3; // no of grid slots
  const placeholder = { name: 'Launching Soon...', website: '#' };

  return (
    <section id="clients" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Our Clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: totalSlots }).map((_, index) => {
            const client = clients[index] || placeholder;
            return (
              <div
                key={index}
                className="rounded-xl p-6 shadow-lg bg-[#2B2B2B] hover:bg-black transition-shadow"
              >
                <h3 className="text-xl font-bold text-white mb-4">{client.name}</h3>
                {client.website !== '#' ? (
                  <Link
                    href={client.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FF5722] hover:underline"
                  >
                    Visit Website
                  </Link>
                ) : (
                  <span className="text-gray-500">Coming Soon</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

